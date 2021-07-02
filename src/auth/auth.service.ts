import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

import { Users } from '../users/users.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async googleLogin(req) {
    const { user } = req;

    if (!user) {
      return {
        message: 'No user from google',
        user: null,
      };
    }

    const alreadySavedUser = await this.usersRepository.findOne({
      where: { provider_id: user.id, provider: user.provider },
    });

    if (alreadySavedUser) {
      return {
        message: 'Auth complete. User has been recognized by the app',
        user: alreadySavedUser,
      };
    }

    const newUser = await this.usersRepository.save({
      first_name: user.firstName,
      last_name: user.lastName,
      provider: user.provider,
      provider_id: user.id,
      email: user.email,
      img: user.img,
    });

    return {
      message: 'Auth complete. New user has been registered.',
      user: newUser,
    };
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
