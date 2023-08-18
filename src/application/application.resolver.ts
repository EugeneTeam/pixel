import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { ApplicationEntity } from './application.entity';
import { ApplicationListSchema } from './schemas/application-list.schema';
import { FilterInput } from './inputs/filter.input';
import { AddApplicationInput } from './inputs/add-application.input';
import { TelegrafService } from '../telegraf/telegraf.service';
import { createTextForTelegrafHelper } from './helpers/create-text-for-telegraf.helper';

@Resolver(() => ApplicationEntity)
export class ApplicationResolver {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly telegrafService: TelegrafService,
  ) {}

  @Query(() => ApplicationListSchema, { name: 'getApplicationsList' })
  async getAll(
    @Args('filter') filter: FilterInput,
  ): Promise<ApplicationListSchema> {
    return this.applicationService.getMany(filter);
  }

  @Mutation(() => ApplicationEntity, { name: 'addApplication' })
  async createOne(
    @Args('input') input: AddApplicationInput,
  ): Promise<ApplicationEntity> {
    const newApplication = await this.applicationService.save(input);

    const text = createTextForTelegrafHelper(newApplication);

    await this.telegrafService.sendMessageUseTelegraf(null, text, {
      parse_mode: 'Markdown',
    });

    return newApplication;
  }
}
