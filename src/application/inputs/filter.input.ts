import { Field, InputType, Int } from '@nestjs/graphql';
import { ApplicationStatusEnum } from '../enums/application-status.enum';

@InputType()
export class FilterInput {
  @Field(() => Int)
  public readonly limit: number;

  @Field(() => Int)
  public readonly offset: number;

  @Field(() => ApplicationStatusEnum, { nullable: true })
  public readonly status?: ApplicationStatusEnum;
}
