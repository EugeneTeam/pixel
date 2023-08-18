import { Injectable } from '@nestjs/common';
import { ApplicationEntity } from './application.entity';
import { ApplicationListSchema } from './schemas/application-list.schema';
import { ApplicationStatusEnum } from './enums/application-status.enum';
import { ApplicationRepository } from './application.repository';
import { FilterInput } from './inputs/filter.input';
import { AddApplicationInput } from './inputs/add-application.input';

@Injectable()
export class ApplicationService {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  public async save(
    application: AddApplicationInput,
  ): Promise<ApplicationEntity> {
    return this.applicationRepository.save(application);
  }

  public async getMany(filter: FilterInput): Promise<ApplicationListSchema> {
    return this.applicationRepository.getMany(filter);
  }

  public async updateStatus(
    id: number,
    newStatus: ApplicationStatusEnum,
  ): Promise<ApplicationEntity> {
    return this.applicationRepository.updateStatus(id, newStatus);
  }
}
