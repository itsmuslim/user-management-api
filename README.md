User Management API

A simple and flexible backend API for user management built with Node.js and Express.
This API supports user registration, login, profile management, and secure authentication using JWT.

--------------------------------------------------

FEATURES

- User registration (Sign Up)
- User login (Authentication)
- Get all users
- Get a specific user
- Update user
- Delete user
- Secure routes with JWT authentication

--------------------------------------------------

TECHNOLOGIES USED

- Node.js & Express.js  : Backend server framework
- MongoDB / Mongoose   : Database management
- JWT                  : Secure authentication
- bcrypt               : Password hashing
- dotenv               : Environment variable management

--------------------------------------------------

GETTING STARTED

1) Clone the repository

git clone https://github.com/itsmuslim/user-management-api.git

2) Install dependencies

cd user-management-api
npm install

3) Configure environment variables

Create a .env file in the project root and add:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret

4) Start the server

npm start

The API will be running at:
http://localhost:5000

--------------------------------------------------

CORE API ENDPOINTS

- POST    /api/users/register     -> Create a new user
- POST    /api/users/login        -> Authenticate user & get token
- GET     /api/users              -> Retrieve all users
- GET     /api/users/:id          -> Retrieve specific user
- PUT     /api/users/:id          -> Update a user’s data
- DELETE  /api/users/:id          -> Delete a user

Note:
All sensitive routes are protected with JWT authentication.

--------------------------------------------------

SECURITY

- Passwords are hashed securely using bcrypt
- Protected endpoints require a valid JWT token

--------------------------------------------------

LICENSE

MIT License © 2026 ItsMuslim

--------------------------------------------------

ABOUT

A simple, reliable, and flexible user management backend using Node.js and Express.
