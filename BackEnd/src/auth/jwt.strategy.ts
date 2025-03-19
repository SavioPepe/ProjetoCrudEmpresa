import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SUA_CHAVE_SECRETA', // Use uma variável de ambiente em produção
    });
  }

  async validate(payload: any) {
    // O que retornar aqui ficará disponível em req.user
    return { userId: payload.sub, username: payload.username };
  }
}
