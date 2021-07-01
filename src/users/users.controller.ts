import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get('/')
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post('/')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: [Users],
  })
  async generateUsers(amountForGenerating: number = 1): Promise<Users[]> {
    const promises = [];
    for (let i = 0; i < amountForGenerating; i++) {
      promises.push(this.usersService.createOne({}));
    }
    return Promise.all(promises);
  }
}
