import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../users.entity';
import { Logs } from '../logs.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Users,Logs])],
    providers: [LoginService],
    controllers: [LoginController],
    exports: [TypeOrmModule]
  })
  export class LoginModule {}
