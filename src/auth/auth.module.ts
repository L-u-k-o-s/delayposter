import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../users/users.model';

@Module({
  imports: [GoogleStrategy, TypeOrmModule.forFeature([Users])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
