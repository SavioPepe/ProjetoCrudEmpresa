import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '././jwt.strategy';

@Module({
  imports: [
    UsersModule, // Para ter acesso ao UsersService
    PassportModule,
    JwtModule.register({
      secret: 'SUA_CHAVE_SECRETA', // Substitua por uma chave segura ou utilize variáveis de ambiente
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
