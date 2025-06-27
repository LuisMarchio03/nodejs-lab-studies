import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { ExtractJwt } from 'passport-jwt';
import { JWT_SECRETS } from 'src/auth/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
      ignoreExpiration: false,
      secretOrKey: JWT_SECRETS,
    });
  }

  async validate(payload) {
    return payload;
  }
}
