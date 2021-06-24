import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private connection: Connection,
  ) {
  }

  async createOne(): Promise<Users> {
    return this.connection
      .getRepository(Users)
      .save({
        first_name: `${Math.random()}`,
        last_name: 'ssdfsfsdf',
        email: 'ab@mail.com',
      });
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
