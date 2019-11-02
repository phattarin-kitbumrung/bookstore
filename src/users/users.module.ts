import { Module,HttpModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../users.entity';
import { Logs } from '../logs.entity';
import { Orders } from '../orders.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Users,Logs,Orders]),HttpModule],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [TypeOrmModule]
  })
  export class UsersModule {}
