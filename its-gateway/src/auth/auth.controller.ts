import { Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { MS_USER } from 'src/common/constants/user-ms.constant';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(MS_USER) private readonly clientUser: ClientProxy,
  ) {}

  @Post()
  login(credentials: LoginDto) {
    return this.clientUser.send('auth.login', credentials);
  }
}
