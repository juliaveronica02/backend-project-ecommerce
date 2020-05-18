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
