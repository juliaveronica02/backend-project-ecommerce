New Databases
DB name: Test

## User Table

sequelize model:generate --name User --attributes email:STRING,phone:INTEGER,password:STRING

## Item Table

sequelize model:generate --name Item --attributes name:STRING,price:INTEGER,description:STRING,quantity:INTEGER,imageUrl:STRING,categoryId:INTEGER,userId:INTEGER

## Category Table

sequelize model:generate --name Category --attributes name:STRING

## Order Table

sequelize model:generate --name Order --attributes total:STRING,status:STRING,userId:INTEGER,itemId:INTEGER

## Payment Table

sequelize model:generate --name Payment --attributes name:STRING,address:STRING,quantity:INTEGER,posCode:STRING,phone:INTEGER

## Upload Payment Table

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

```javascript
{
    "_id": "5ec8a62371054e1ecf6e9853",
    "userName": "Julia Veronica",
    "email": "juliavero2206@gmail.com",
    "phone": 1234567890,
    "password": "$2b$10$0vWyrmfcMqOrofHFAIKZG.kqGBGdnczKiz3siiCNHzeiNxfYWSEEq",
    "__v": 0
}
```

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

```javascript
[
    {
        "id": 1,
        "name": "Aparel 6",
        "price": 123456,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "quantity": 60,
        "imageUrl": "public/images/2020-05-25T05:39:17.284Z1.jpeg",
        "categoryId": 1,
        "userId": 1,
        "createdAt": "2020-05-25T05:39:17.000Z",
        "updatedAt": "2020-05-25T05:39:17.000Z",
        "category": {
            "id": 1,
            "name": "Shoes",
            "createdAt": "2020-05-25T05:41:09.000Z",
            "updatedAt": "2020-05-25T05:41:09.000Z"
        },
        "user": {
            "id": 1,
            "email": "julia@gmail.com",
            "phone": 1234567890,
            "password": "$2b$10$dzWrONTaEn336LFCvIaAAOH3PCPPNpSA5rHVf5w912HA8Lz7hWkTC",
            "createdAt": "2020-05-25T05:38:47.000Z",
            "updatedAt": "2020-05-25T05:38:47.000Z"
        }
    }
]
```

## Category

name.

| Method | Endpoint | Description                                                                                                              |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| get    | /show    | show all category (server : https://api.juliaveronica.com/category/show)(postman: http://localhost:3000/category/show)   |
| post   | /create  | create category (server : https://api.juliaveronica.com/category/create)(postman: http://localhost:3000/category/create) |

```javascript
[
    {
        "id": 1,
        "name": "Shoes",
        "createdAt": "2020-05-25T05:41:09.000Z",
        "updatedAt": "2020-05-25T05:41:09.000Z"
    }
]
```

## Order

total and quantity.

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| get    | order/show       | show all order        |
| delete | order/delete/:id | delete category by id |
| post   | order/create     | category              |


```javascript
[
    {
        "id": 4,
        "total": "123456",
        "status": "pending",
        "userId": 1,
        "itemId": 1,
        "createdAt": "2020-05-25T05:47:14.000Z",
        "updatedAt": "2020-05-25T05:47:14.000Z",
        "item": {
            "id": 1,
            "name": "Aparel 6",
            "price": 123456,
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "quantity": 60,
            "imageUrl": "public/images/2020-05-25T05:39:17.284Z1.jpeg",
            "categoryId": 1,
            "userId": 1,
            "createdAt": "2020-05-25T05:39:17.000Z",
            "updatedAt": "2020-05-25T05:39:17.000Z"
        },
        "user": {
            "id": 1,
            "email": "julia@gmail.com",
            "phone": 1234567890,
            "password": "$2b$10$dzWrONTaEn336LFCvIaAAOH3PCPPNpSA5rHVf5w912HA8Lz7hWkTC",
            "createdAt": "2020-05-25T05:38:47.000Z",
            "updatedAt": "2020-05-25T05:38:47.000Z"
        }
]
```

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

- Asynchronous, non-blocking functions.
- Synchronous, blocking functions.

|                                                                                                                 Asynchronous                                                                                                                 |                                                                                                                         Non-blocking                                                                                                                         |     |     |     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --- | --- | --- |
| Asynchronous means not synchronous. Using these we can make asynchronous HTTP requests that do not wait for the server to respond. These functions continue to respond to the request for which it has already received the server response. | Non-blocking functions are used in regards with I/O operations. They immediately respond with whatever data is available and keeps on running as per the requests. In case, any answer couldn’t be retrieved then the API returns immediately with an error. |     |     |     |
|                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                              |     |     |     |
|                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                              |     |     |     |

## package.json

metadata of the project where we define the properties of a package.

## REPL

REPL in Node.js stands for Read, Eval, Print, and Loop.

- Read: Reads the user’s input, parses it into JavaScript data-structure and then stores it in the memory.
- Eval: Receives and evaluates the data structure.
- Print: Prints the final result.
- Loop: Loops the provided command until CTRL+C is pressed twice.

## asynchronously using the event loop

Below is the list of the tasks which must be done asynchronously using the event loop:

- I/O operations.
- Heavy computation.
- Anything requiring blocking.

## Frontend and Backend

|                    Front-end Development                     |                           Back-end Development                            |     |     |     |
| :----------------------------------------------------------: | :-----------------------------------------------------------------------: | --- | --- | --- |
| 1. Uses mark up and web languages like HTML, CSS, JavaScript | 1. Uses programming and scripting languages like Python, Ruby, Perl, etc. |     |     |     |
|          2. Based on asynchronous requests and AJAX          |                      2. Based on Server Architecture                      |     |     |     |
|                   3. Better Accessibility                    |                           3. Enhanced Security                            |     |     |     |
|                       4. Used for SEO                        |                            4. Used for Backup                             |     |     |     |

## Nodejs Timers

- setTimeout/clearTimeout – Used to schedule code execution after a designated amount of milliseconds.
- setInterval/clearInterval – Used to execute a block of code multiple times.
- setImmediate/clearImmediate – Used to execute code at the end of the current event loop cycle.
- process.nextTick – Used to schedule a callback function that needs to be invoked in the next iteration of the Event Loop.

## Node.js Various Types.

- Readable: Used for reading large chunks of data from the source.
- Writeable: Use for writing large chunks of data to the destination.
- Duplex: Used for both the functions; read and write.
- Transform: It is a duplex stream that is used for modifying the data.

## Exit codes in Node.js

- Uncaught fatal exception
- Unused
- Fatal Error
- Internal Exception handler Run-time failure
- Internal JavaScript Evaluation Failure

## Express ‘app’ and ‘server’ must be kept separate

- It allows testing the API in-process without having to perform the network calls.
- Faster testing execution.
- Getting wider coverage metrics of the code.
- Allows deploying the same API under flexible and different network conditions.
- Better separation of concerns and cleaner code.

## Build node + express + mongo API

npx express-generator
npm install -g express-generator
express -h is a command options.
express --no-view folderName
npm init
npm install body-parser
npm install nodemon

add ( "scripts": { "dev": "nodemon server.js" },) to package.json
after add, package.json should be like:

```javascript
{  "name": "notable",  "version": "1.0.0",  "description": "",  "main": "server.js",  "scripts": {    "dev": "nodemon server.js"  },  "author": "",  "license": "ISC",  "dependencies": {    "body-parser": "^1.15.2",    "express": "^4.14.0",    "mongodb": "^2.2.16"  },  "devDependencies": {    "nodemon": "^1.11.0"  }}
```

server.js

```javascript
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
```

## MVC

Model View Controller (MVC)

- Model: Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

- View: View is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

- Controller:Controller controls the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response.

- Model is data part.
- View is User Interface part.
- Controller is request-response handler.

npm init is used here to generate a package.json and app.js file.

NPM (node package manager )
check NPM (npm -v)
npm install package_name
npm install express
npm install nodemon -g (-g mean To install a package globally (accessible by all projects in system))
node_modules directory present in the folder of Node application. To see all the locally installed modules use npm ls command.
npm uninstall (To uninstall packages using npm)
npm uninstall package_name -g (To uninstall global packages)

What does package.json file consist of?
The metadata information in package.json file can be categorized into below categories:

1. Identifying metadata properties: It basically consist of the properties to identify the module/project such as the name of the project, current version of the module, license, author of the project, description about the project etc.
2. Functional metadata properties: As the name suggests, it consists of the functional values/properties of the project/module such as the entry/starting point of the module, dependencies in project, scripts being used, repository links of Node project etc.

Creating a package.json file:
A package.json file can be created in two ways:

1. Using npm init : Running this command, system expects user to fill the vital information required as discussed above. It provides users with default values which are editable by the user. Syntax: npm init
2. Writing directly to file : One can directly write into file with all the required information and can include it in the Node project.

```javascript
{
  "name": "GeeksForGeeks",
  "version": "1.0.0",
  "description": "GeeksForGeeks",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node start.js",
  },
  "engines": {
    "node": ">=7.6.0",
    "npm": ">=4.1.2"
  },
  "author": "GeeksForGeeks",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-validator": "^3.1.2",
    "mongoose": "^4.8.7",
    "nodemon": "^1.14.12",
  },
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/gfg/gfg.git" //sample git repo url
  },
  "bugs": {
    "url": "https://github.com/gfg/gfg/issues"
  },
  "homepage": "https://github.com/gfg/gfg#readme"
}
```

name: The name of the application/project.
version: The version of application. The version should follow semantic versioning rules.
description: The description about the application, purpose of the application, technology used like React, MongoDB, etc.
main: This is the entry/starting point of the app. It specifies the main file of the application that triggers when the application starts. Application can be started using npm start.
scripts: The scripts which needs to be included in the application to run properly.
engines: The versions of the node and npm used. These versions are specified in case the application is deployed on cloud like heroku or google-cloud.
keywords: It specifies the array of strings that characterizes the application.
author: It consist of the information about the author like name, email and other author related information.
license: The license to which the application confirms are mentioned in this key-value pair.
dependencies: The third party package or modules installed using npm are specified in this segment.
devDependencies: The dependencies that are used only in the development part of the application are specified in this segment. These dependencies do not get rolled out when the application is in production stage.
repository: It contain the information about the type and url of the repository where the code of the application lives is mentioned here in this segment.
bugs: The url and email where the bugs in the application should be reported are mentioned in this segment.

mongoDB: MongoDB is a cross-platform and open-source document-oriented database, a kind of NoSQL database.
MongooseJS: Mongoose or MongooseJS is a MongoDB object modeling(ODM) tool designed to work in an asynchronous environment.
NPM: Node Package Manager or NPM is the official package manager for nodeJS applications.

|                                                                               MONGODB                                                                                |                                                                      MYSQL                                                                       |     |     |     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | --- | --- | --- |
| MongoDB is an open-source database developed by MongoDB, Inc. MongoDB stores data in JSON-like documents that can vary in structure. It is a popular NoSQL database. | MySQL is a popular open-source relational database management system (RDBMS) that is developed, distributed and supported by Oracle Corporation. |     |     |     |
|                                                                                                                                                                      |                                                                                                                                                  |     |     |     |
|                                                                                                                                                                      |                                                                                                                                                  |     |     |     |

body-parser − This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
cookie-parser − Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
multer − This is a node.js middleware for handling multipart/form-data.
npm install body-parser
npm install cookie-parser
npm install multer

undefined: If variable exists but is not defined then it is categorized under undefined.
null: If variable exists but is not explicitly set the it comes under null category.
boolean: Boolean represents a logical entity and can have two values: true, and false.
number: The number is the data type to define a number which can be integer, floating-point, double. The only problem here is that we have to allocate a memory equivalent to a double variable every time we define a number.
string: This is used to define string values of a character.
symbol: This is a special data type which is new in ECMA Script 6. The data type “symbol” is a primitive data type having the quality that values of this type can be used to make object properties that are anonymous.
