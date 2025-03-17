import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule], // Importa o UsersModule para ter acesso ao UsersService
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
