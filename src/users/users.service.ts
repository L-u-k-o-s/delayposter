import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createOne({ firstName, lastName, email }): Promise<Users> {
    return this.usersRepository.save({
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    await this.usersRepository.delete(id);

    return true;
  }
}
