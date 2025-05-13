import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(credentials: LoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: { username: credentials.username },
    });

    if (!user) throw new RpcException('User not found');

    if (credentials.password !== user.password)
      throw new RpcException('Contraseña incorrecta');

    return user;
  }
}
