import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';
import { Logs } from '../logs.entity';

@Injectable()
export class LoginService 
{
  constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>,
    @InjectRepository(Logs) private readonly logRepository: Repository<Logs>)
  {
  }

  async login(username,password) 
  {
     let crypto = require('crypto');
     password = crypto.createHash('md5').update(password).digest('hex');
     let user = await this.userRepository.findOne({username,password});
     if(user)
     {
      let jwt = require('jsonwebtoken');
      let token = jwt.sign({data: user.username+user.birthday+new Date()}, 'xxxyyy');
      let log = await this.logRepository.findOne({userid: user.id, activity:"login"});
      if(log)
        this.logRepository.update({userid: user.id, activity: "login"},{token: token});
      else
        this.logRepository.save({userid: user.id, activity: "login", token: token});
      return "200 OK";
     }
     else
      return "400 NotFound";
  }
}

