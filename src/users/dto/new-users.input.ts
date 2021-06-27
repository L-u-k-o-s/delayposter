import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class NewUsersInput {
  @Field()
  @Length(30, 255)
  firstName: string;

  @Field()
  @Length(30, 255)
  lastName: string;

  @Field()
  @Length(30, 255)
  email: string;
}
