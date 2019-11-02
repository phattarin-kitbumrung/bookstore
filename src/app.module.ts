import { Module,HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Logs } from './logs.entity';
import { Orders } from './orders.entity';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-iron-east-05.cleardb.net',
      port: 3306,
      username: 'beb3ff4f8ab1fa',
      password: '7e031418',
      database: 'heroku_2286900cbaf5ad1',
      entities: [Users,Logs,Orders],
      synchronize: true,
    }),
    UsersModule,
    LoginModule,
    HttpModule,
    BooksModule
  ],
  controllers: [AppController, UsersController, LoginController, BooksController],
  providers: [AppService, UsersService, LoginService, BooksService],
})
export class AppModule {}
