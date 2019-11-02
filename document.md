Book Store API

1. POST: /login 
Request:
{"username":"john.doe", "password": "thisismysecret"}
Response:
200 OK

2. GET: /users/id
Request:
Response:
200 OK
{"name":"john","surname":"doe","date_of_birth":"15/01/1985","books":[1,4]}

3. DELETE: /users/id
Request:
Response:
200 OK

4. POST: /users
 Request:
 {"username": "john.doe", "password": "thisismysecret", "date_of_birth": "15/01/1985"}
 Response:
 200 OK

 5. POST: /users/orders
 Request:
 {
    "userid": 2,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiam9obi5kb2U",
    "orders": [1,4]
 }
 Response:
 200 OK
 {"price": 519.00}

 6. GET: /books
 Request:
 Response:
 200 OK
{"books":[{"id":4,"name":"The Great Alone: A Novel Kristin Hannah","author":"Kristin Hannah","price":495,"is_recommended":true},{"id":5,"name":"An American Princess: The Many Lives of Allene Tew","author":"Annejet van der Zijl, Michele Hutchison","price":149,"is_recommended":true},{"id":1,"name":"Before We Were Yours: A Novel","author":"Lisa Wingate","price":340,"is_recommended":false},{"id":2,"name":"When Never Comes","author":"Barbara Davis","price":179,"is_recommended":false},{"id":3,"name":"Giraffes Can't Dance","author":"Giles Andreae, Guy Parker-Rees","price":200.5,"is_recommended":false},{"id":6,"name":"Medical Medium Life-Changing Foods","author":"Anthony William","price":929.7,"is_recommended":false},{"id":7,"name":"Vegan 100","author":"Gaz Oakley","price":897.96,"is_recommended":false},{"id":8,"name":"Have You Filled A Bucket Today?","author":"Carol McCloud","price":290.06,"is_recommended":false},{"id":9,"name":"The Very Hungry Caterpillar","author":"Eric Carle","price":208.51,"is_recommended":false},{"id":10,"name":"The Hate U Give","author":"Angie Thomas","price":319.16,"is_recommended":false},{"id":11,"name":"The Alice Network","author":"Kate Quinn","price":393.22,"is_recommended":false},{"id":12,"name":"Harry Potter - A History of Magic","author":"British Library","price":1379.78,"is_recommended":false}]}