import { Injectable,HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';
import { Logs } from '../logs.entity';
import { Orders } from '../orders.entity';

@Injectable()
export class UsersService 
{
  constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>,
    @InjectRepository(Logs) private readonly logRepository: Repository<Logs>,
    @InjectRepository(Orders) private readonly orderRepository: Repository<Orders>,
    private http: HttpService)
  {
  }

  async checklogin(userid)
  {
    let log = await this.logRepository.findOne({userid: userid, activity:"login"});
    if(log)
     return true;
    else
     return false;
  }
  async checktoken(token)
  {
    let log = await this.logRepository.findOne({token: token, activity:"login"});
    if(log)
     return true;
    else
     return false;
  }
  async getinfo(userid)
  {
    let user = await this.userRepository.findOne({id: userid});
    let log = await this.orderRepository.find({userid: userid});
    let orderlist = [];
    for(let x in log)
      orderlist.push(log[x].bookid);
    let result = {"name": user.name, "surname": user.surname, "date_of_birth": user.birthday, "books":orderlist};
    return result;
  }
  async register(username, password, birthday)
  {
    let crypto = require('crypto');
    password = crypto.createHash('md5').update(password).digest('hex');
    let user = await this.userRepository.findOne({username: username});
    if(user)
      return false;
    else
    {
       await this.userRepository.save( {"username": username, "password": password, "birthday": birthday});
       return true;
    }
  }
  async delete(userid)
  {
    let user = await this.userRepository.findOne(userid);
    if(!user)
     return false;

    try 
    {
      await this.userRepository.delete(userid);
      await this.orderRepository.delete({userid: userid});
      return true;
    } 
    catch (error) 
    {
      return false;
    }
  }
  async orderbook(userid,orders)
  {
    let books = await this.http.get('https://scb-test-book-publisher.herokuapp.com/books').toPromise();
    let booklist = [];
    let price = 0;

    const bookid = books.data.map(({id}) => (id));
    const difference = orders.filter(x => !bookid.includes(x));
    if(difference.length > 0)
     return false;
 
    for(let x in orders)
    {
        price = price + books.data[books.data.findIndex(i => i.id === orders[x])].price;
        booklist.push(books.data.findIndex(i => i.id === orders[x]));
        await this.orderRepository.save({"userid": userid, "bookid": orders[x], "datetime": new Date});
    }
    if(orders.length == booklist.length)
      return {"price": price};
  }
  
}
