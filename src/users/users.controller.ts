import { Controller, Get, Post, Param, Res, Req, Body, Delete } from '@nestjs/common';
import { Request,Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController 
{
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async getinfo(@Param('id') id: string, @Res() res: Response, @Req() req: Request) 
  {
      id = id.replace(":", "");
      let userid = Number(id);
      let login = await this.userService.checklogin(userid);
      if(login)
        res.send("200 OK\n"+JSON.stringify(await this.userService.getinfo(userid)));
      else
        res.send("400 Please Login!");
  }

  @Post()
  async register(@Res() res: Response, @Req() req: Request) 
  {
      let result = await this.userService.register(req.body.username, req.body.password, req.body.date_of_birth);
      if(result)
        res.send("200 OK");
      else
        res.send("400 Register Fail!");
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response, @Req() req: Request) 
  {
      id = id.replace(":", "");
      let userid = Number(id);
      let login = await this.userService.checklogin(userid);
      if(login)
      {
        let result = await this.userService.delete(userid);
        if(result)
         res.send("200 OK");
        else
         res.send("400 Delete Fail!");
      }
      else
        res.send("400 Please Login!");
  }

  @Post('orders')
  async orderbook(@Res() res: Response, @Req() req: Request) 
  {
    let login = await this.userService.checklogin(req.body.userid);
    let token = await this.userService.checktoken(req.body.token);
    if(login && token)
    {
     let data = await this.userService.orderbook(req.body.userid, req.body.orders);
     if(data != false)
      res.send("200 OK\n"+JSON.stringify(data));
     else
      res.send("400 Order Fail!");
    }
    else
      res.send("400 Please Login!");
  }
}