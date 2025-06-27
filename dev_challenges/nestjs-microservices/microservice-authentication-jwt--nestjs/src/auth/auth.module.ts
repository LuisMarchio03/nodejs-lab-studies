import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRETS } from './constants';
import { JwtStrategy } from './strategies/jwt-strategy/jwt-strategy.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRETS,
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
