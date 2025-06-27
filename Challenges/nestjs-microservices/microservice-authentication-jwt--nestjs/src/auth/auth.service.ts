import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const users = [
  {
    id: 1,
    username: 'luisgabrielmarchio75@gmail.com',
    password: '123456',
  },
  {
    id: 2,
    username: 'luis@gmail.com',
    password: '654321',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const user = this.validateCredentials(username, password);

    const payload = {
      sub: user.id,
      name: user.username,
    };

    return this.jwtService.sign(payload);
  }

  validateCredentials(username: string, password: string) {
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (!user) {
      throw new Error('Email or Password Incorrect!');
    }

    return user;
  }
}
