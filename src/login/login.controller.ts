import { Controller, Get, Post, Param, Res, Req, Body } from '@nestjs/common';
import { Request,Response } from 'express';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController 
{
  constructor(private readonly loginService: LoginService) {}
  
  @Post()
  async login(@Res() res: Response, @Req() req: Request) 
  {
      res.send(await this.loginService.login(req.body.username, req.body.password));
  }
}
