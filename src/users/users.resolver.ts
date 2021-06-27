import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewUsersInput } from './dto/new-users.input';
import { UsersArgs } from './dto/users.args';
import { Users } from './users.model';
import { UsersService } from './users.service';

@Resolver((of) => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => Users)
  async user(@Args('id') id: number): Promise<Users> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException(id);
    }

    return user;
  }

  @Query((returns) => [Users])
  users(@Args() recipesArgs: UsersArgs): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Mutation((returns) => Users)
  async addUser(
    @Args('newUsersData') newUsersData: NewUsersInput,
  ): Promise<Users> {
    const user = await this.usersService.createOne(newUsersData);

    return user;
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
