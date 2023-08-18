import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from './application.entity';
import { ApplicationStatusEnum } from './enums/application-status.enum';
import { ApplicationListSchema } from './schemas/application-list.schema';
import { FilterInput } from './inputs/filter.input';
import { AddApplicationInput } from './inputs/add-application.input';

@Injectable()
export class ApplicationRepository {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly applicationEntityRepository: Repository<ApplicationEntity>,
  ) {}

  public async save(input: AddApplicationInput): Promise<ApplicationEntity> {
    return this.applicationEntityRepository.save({
      ...input,
      status: ApplicationStatusEnum.NEW,
    });
  }

  public async getMany(filter: FilterInput): Promise<ApplicationListSchema> {
    const [items, count] = await this.applicationEntityRepository.findAndCount({
      ...(filter?.status ? { where: { status: filter.status } } : null),
      take: filter.limit,
      skip: filter.offset,
    });

    return {
      items,
      count,
    };
  }

  public async updateStatus(
    id: number,
    newStatus: ApplicationStatusEnum,
  ): Promise<ApplicationEntity> {
    const result = await this.applicationEntityRepository.update(id, {
      status: newStatus,
    });

    return result?.raw?.[0];
  }
}
