DB name: Test

## User Table

sequelize model:generate --name User --attributes email:STRING,phone:INTEGER,password:STRING

## Item Table

sequelize model:generate --name Item --attributes name:STRING,price:INTEGER,description:STRING,quantity:INTEGER,imageUrl:STRING,categoryId:INTEGER

## Category Table

sequelize model:generate --name Category --attributes name:STRING

## Order Table

sequelize model:generate --name Order --attributes total:STRING,status:STRING,userId:INTEGER,categoryId:INTEGER

## Payment

sequelize model:generate --name Payment --attributes name:STRING,address:STRING,quantity:INTEGER,posCode:STRING,phone:INTEGER

## Upload Payment

sequelize model:generate --name Upload --attributes userId:INTEGER,image:STRING

## User

register : email, phone and password.
login : email and password.
hash password and token.

| Method | Endpoint    | Description                                                                                                              |
| ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| get    | /show       | show all user data (server : https://api.juliaveronica.com/users/show), (postman: http://localhost:3000/users/show)      |
| get    | /show/:id   | get user data by id (server : https://api.juliaveronica.com/users/show/1),(postman: http://localhost:3000/users/show/1)  |
| delete | /delete/:id | delete user by id (server : https://api.juliaveronica.com/users/delete/1)(postman: http://localhost:3000/users/delete/1) |
| update | /put/:id    | edit user by id (server : https://api.juliaveronica.com/users/put/1),(postman: http://localhost:3000/users/put/1)        |
| post   | /register   | user register (server : https://api.juliaveronica.com/users/register)(postman: http://localhost:3000/users/register)     |
| post   | /login      | user login (server : https://api.juliaveronica.com/users/login)(postman: http://localhost:3000/users/login)              |

## Item

name, price, description, imageUrl, quantity.
when show item include categoryId.

| Method | Endpoint    | Description                                                                                                            |
| ------ | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| get    | /show       | show all item (server : https://api.juliaveronica.com/item/show)(postman: http://localhost:3000/item/show)             |
| get    | /show/:id   | get item by id (server : https://api.juliaveronica.com/item/show/1)(postman: http://localhost:3000/item/show/1)        |
| delete | /delete/:id | delete item by id (server : https://api.juliaveronica.com/item/delete/1)(postman: http://localhost:3000/item/delete/1) |
| update | /put/:id    | edit item by id                                                                                                        |
| post   | /create     | Item                                                                                                                   |

## Category

name.

| Method | Endpoint | Description                                                                                                              |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| get    | /show    | show all category (server : https://api.juliaveronica.com/category/show)(postman: http://localhost:3000/category/show)   |
| post   | /create  | create category (server : https://api.juliaveronica.com/category/create)(postman: http://localhost:3000/category/create) |

## Order

total and quantity.

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| get    | order/show       | show all order        |
| delete | order/delete/:id | delete category by id |
| post   | order/create     | category              |

## Payment

name, address, quantity, poscode, phone

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| get    | payment/show | show all payment |

## Upload

userId and image

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| get    | upload/show   | show all upload payment |
| post   | upload/create | create upload payment   |

---

### Rest API

make new folder (mkdir folderName) or create new git hub repository (git clone copyGitHubRepository).

or using express -- no -view folderName

## Database Sequelize

mysql -u root password
create database databaseName;
show databases;
exit
insert sequelize table after that sequelize db:migrate
npm install
npm install nodemon --save
nodemon start
npm i body-parser --save
import body-parser into app.js
npm i sequelize-cli
if forget read readme sequelize on github repository
sequelize init
npm i dotenv

## Different between javascript and node.js

javascript is a programming language (type), used for any client-side actity for a web application(utility) and v8(running engine).

## node.js

framework developed on Chrome’s V8 JavaScript engine that compiles the JavaScript directly into the native machine code. It is a lightweight framework used for creating server-side web applications and extends JavaScript API to offer usual server-side functionalities.

## node.js benefit

|   Features   |                                                                           Description                                                                           |     |     |     |
| :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | --- | --- | --- |
|     Fast     |                          Node.js is built on Google Chrome’s V8 JavaScript Engine which makes its library very fast in code execution                           |     |     |     |
| Asynchronous |                                     Node.js based server never waits for an API to return data thus making it asynchronous                                      |     |     |     |
|   Scalable   |                          It is highly scalable because of its event mechanism which helps the server to respond in a non-blocking way                           |     |     |     |
| Open Source  | Node.js has an extensive open source community which has contributed in producing some excellent modules to add additional capabilities to Node.js applications |     |     |     |
| No Buffering |                                         Node.js applications simply output the data in chunks and never buffer any data                                         |     |     |     |

## Anglular and node.js

|                            Angular                            |                                         Node.js                                          |     |     |     |
| :-----------------------------------------------------------: | :--------------------------------------------------------------------------------------: | --- | --- | --- |
| 1. It is an open source web application development framework |             1. It is a cross-platform run-time environment for applications              |     |     |     |
|                2. It is written in TypeScript                 |                   2. It is written in C, C++ and JavaScript languages                    |     |     |     |
| 3. Used for building single-page client-side web applications |        3. Used for building fast and scalable server-side networking applications        |     |     |     |
|       4. Angular itself is a web application framework        | 4. Node.js has many different frameworks like Sails.js, Partial.js, and Express.js, etc. |     |     |     |
| 5. Ideal for creating highly active and interactive web apps  |                       5. Ideal for developing small size projects                        |     |     |     |
|      6. Helpful in splitting an app into MVC components       |                        6. Helpful in generating database queries                         |     |     |     |
|       7. Suitable for developing real-time applications       |      7. Suitable in situations where something faster and more scalable is required      |     |     |     |

Node.js can be used to develop:
- Real-Time Web Applications.
- Network Applications.
- Distributed Systems.
- General Purpose Applications.

There are two types of API functions in Node.js:
* Asynchronous, non-blocking functions.
* Synchronous, blocking functions.

|                                                                                                                 Asynchronous                                                                                                                 |                                                                                                                          Non-blocking                                                                                                                         |   |   |   |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|---|---|
| Asynchronous means not synchronous. Using these we can make asynchronous HTTP requests that do not wait for the server to respond. These functions continue to respond to the request for which it has already received the server response. | Non-blocking functions are used in regards with I/O operations. They immediately respond with whatever data is available and keeps on running as per the requests. In case, any answer couldn’t be retrieved then the API returns immediately with an error.  |   |   |   |
|                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                               |   |   |   |
|                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                               |   |   |   |
## package.json
metadata of the project where we define the properties of a package.

# REPL
REPL in Node.js stands for Read, Eval, Print, and Loop. 
* Read: Reads the user’s input, parses it into JavaScript data-structure and then stores it in the memory.
* Eval: Receives and evaluates the data structure.
* Print: Prints the final result.
* Loop: Loops the provided command until CTRL+C is pressed twice.