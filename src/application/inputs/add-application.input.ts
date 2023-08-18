import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddApplicationInput {
  @Field(() => String)
  public readonly name: string;

  @Field(() => String)
  public readonly phone: string;

  @Field(() => String)
  public readonly mail: string;

  @Field(() => String)
  public readonly message: string;
}
