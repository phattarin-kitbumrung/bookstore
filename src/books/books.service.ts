import { Injectable,HttpService } from '@nestjs/common';

@Injectable()
export class BooksService 
{
    constructor(private http: HttpService)
    {
    }
    async getbook()
    {
        let books = await this.http.get('https://scb-test-book-publisher.herokuapp.com/books').toPromise();
        let recbooks = await this.http.get('https://scb-test-book-publisher.herokuapp.com/books/recommendation').toPromise();
        let list1 = [];
        let list2 = [];
        for(let x in books.data)
        {
            if(recbooks.data.findIndex(i => i.id === books.data[x].id) != -1)
            {
                let data = 
                {
                    "id":books.data[x].id, 
                    "name":books.data[x].book_name, 
                    "author":books.data[x].author_name,
                    "price":books.data[x].price,
                    "is_recommended": true 
                };
                list1.push(data);
            }
            else
            {
                let data = 
                {
                    "id":books.data[x].id, 
                    "name":books.data[x].book_name, 
                    "author":books.data[x].author_name,
                    "price":books.data[x].price,
                    "is_recommended": false 
                };
                list2.push(data);
            }
        }
        return {"books": list1.concat(list2)};
    }
}
