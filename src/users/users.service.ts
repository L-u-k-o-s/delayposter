import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.model';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {
  }

  async createOne(user: object): Promise<Users> {
    return this.usersRepository.save(user);
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
