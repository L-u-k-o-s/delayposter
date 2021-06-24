import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getAllUsers(): Promise<any> {
    return this.usersService.findAll();
  }

  @Post('/')
  async generateUsers(amountForGenerating: number = 1): Promise<Users[]> {
    const promises = [];
    for (let i = 0; i < amountForGenerating; i++ ) {
      promises.push(this.usersService.createOne());
    }
    return Promise.all(promises);
  }
}
