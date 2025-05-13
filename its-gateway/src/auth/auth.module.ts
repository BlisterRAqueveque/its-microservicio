import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { envs } from 'src/config/envs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MS_USER } from 'src/common/constants/user-ms.constant';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: envs.SECRET,
      // signOptions: { expiresIn: '30d' },
    }),
    ClientsModule.register([
      {
        name: MS_USER,
        transport: Transport.TCP,
        options: {
          host: envs.MS_USER_HOST,
          port: envs.MS_USER_PORT,
        },
      },
    ]),
  ],
})
export class AuthModule {}
