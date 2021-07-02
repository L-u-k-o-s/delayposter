import { createParamDecorator, NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Field, ObjectType } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Users } from '../users/users.model';
import { CurrentUser } from './decorators/current-user.decorators';
import { JwtGuards } from './guards/jwt.guards';

@ObjectType()
class Users1 {
  @Field()
  access_token: string;
}

@Resolver((of) => Users)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => Users1)
  async login(@Args('email') email: string, @Args('sub') sub: number) {
    return this.authService.login({ email, sub });
  }

  @UseGuards(JwtGuards)
  @Query((returns) => Users)
  getProfile(@CurrentUser() user: Users) {
    return user;
  }
}
