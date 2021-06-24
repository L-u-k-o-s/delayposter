import { Controller, Get, Post } from '@nestjs/common';
// import { Users } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getAllUsers(): Promise<any> {
    return this.usersService.findAll();
  }

  @Post('/')
  async generateUsers(amountForGenerating = 1): Promise<any> {
    const promises = [];
    for (let i = 0; i < amountForGenerating; i++) {
      promises.push(this.usersService.createOne());
    }
    return Promise.all(promises);
  }
}
