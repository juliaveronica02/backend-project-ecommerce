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

make new folder (mkdir folderName) or create new git hub repository (git clone copyGitHubRepository)

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

# Different between javascript and node.js

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
