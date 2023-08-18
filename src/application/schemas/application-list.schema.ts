import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ApplicationEntity } from '../application.entity';

@ObjectType()
export class ApplicationListSchema {
  @Field(() => [ApplicationEntity])
  public readonly items: ApplicationEntity[];

  @Field(() => Int)
  public readonly count: number;
}
