# Tour app

<!-- This is an online quiz organizing website project, developed using Node's web framework Express.js.
For front-end using React.js


### To view video demo app, [Click here](https://youtu.be/0e3Ym7UZn1Q/)
## Features

- **Admin**
  - CRUD account for user
  - CRUD quiz, question, quiz
  - Assign quiz to user
  - Show dashboard for total quiz , user in systems

- **User**
  -  Attempt a quiz 
  -  Submit quiz and get result details
  -  Update profile account
  -  Change password 
  -  Get history quizzes used to submit
- **Storage**
  - Store images quiz, question in Database
  - Store images user in Cloudinary
- **Authentication**
  - Login using gmail account.
  - Verify user using access token 
  - Logout using refresh token 
  - Authorization users




## TechStack


1. Front End 
    - ReactJS 
    - Bootstrap 5
    - Redux

2. BackEnd Server:
   - ExpressJs
   - Sequelize

3. Data Management (Databases): 
    - Mysql

## Installation


### Pre-Requisites:


- Install Mysql and connect it to localhost **3306** 



### **Backend Server:**
#### Clone the project:

```bash
  git clone https://github.com/lgbao123/quizz-app-backend.git
```
Go to the project directory

```bash
  cd quizz-app-backend
```

Install all dependencies

```bash
 npm install
```
Create and insert data in database

```bash
 npx sequelize-cli db:migrate
 npx sequelize-cli db:seed:all
```

Start backend server

```bash
 npm run start
```


### **Frontend Server:**
#### Link: https://github.com/lgbao123/quiz-app-frontend
#### Clone the project:

```bash
  git clone https://github.com/lgbao123/quiz-app-frontend.git
```
Go to the project directory

```bash
  cd quizz-app-frontend
```

Install all dependencies

```bash
 npm install
```

Start frontend server

```bash
 npm run start
```


#### Local Url for Server:

- Frontend is running on http://localhost:3000 
- Backend is running on http://localhost:8000
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend .

```
NODE_ENV = development
PORT=8000
HOST_NAME =localhost

# Config database
DB_HOST=localhost
DB_NAME= 
DB_PORT =
DB_USER = 
DB_PASSWORD = 

JWT_SECRET=   #random string 

CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```


 -->
