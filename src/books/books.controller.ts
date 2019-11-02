/*import { Controller } from '@nestjs/common';

@Controller('books')
export class BooksController {}*/


import { Controller, Get, Post, Param, Res, Req, Body, Delete } from '@nestjs/common';
import { Request,Response } from 'express';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController 
{
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getbook(@Res() res: Response, @Req() req: Request) 
  {
      let data = await this.booksService.getbook();
      if(data.books.length != 0)
        res.send("200 OK\n"+JSON.stringify(await this.booksService.getbook()));
      else
        res.send("400 NotFound");
  }
}
