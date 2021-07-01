import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../users/users.model';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [GoogleStrategy],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
