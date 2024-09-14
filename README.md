TASK-3

A simple Role-Based Access Control (RBAC) system built with Node.js and Express.js.

Overview
---------
This project implements a basic RBAC system using Node.js and Express.js. It includes user authentication with JWT, role-based access control, and error handling. The system supports three roles: Admin, User, and Guest, with varying levels of access to different routes.

Features
--------
- User Authentication: Register and log in users with JWT-based authentication.
- Role-Based Access Control: Enforce access permissions based on user roles.
- Error Handling: Properly handle authentication and authorization errors.
- Logging: Logs requests to protected routes.

Getting Started
---------------
Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

Installation
1. Clone the repository:
   git clone https://github.com/jesuisaditya10/TASK-3.git
   cd TASK-3

2. Install dependencies:
   npm install

3. Set up environment variables:
   Create a .env file in the root directory with the following content:
   PORT=4000
   JWT_SECRET=ADITYA
   JWT_EXPIRE=5
   COOKIE_EXPIRE=5


4. Run the application:
   For development:
   npm run dev
   For production:
   npm start

API Endpoints
-------------
- Public Routes:
  - POST /register: Register a new user.
  - POST /login: Log in a user.
  - GET /get: A public endpoint accessible without authentication.

- User Routes:
  - GET /logout: Log out the current user.
  - GET /deleteme: Delete the current user's account.

- Admin Routes:
  - POST /roleupdate: Update a user's role.
  - POST /deleteuser: Delete a user.

Middleware
----------
- Authentication: Middleware to check if a user is authenticated.
- Authorization: Middleware to check if a user has the required permissions based on their role.

Error Handling
--------------
- 401 Unauthorized: Invalid or missing tokens.
- 403 Forbidden: Insufficient permissions.

Logging
-------
Requests to protected routes are logged, including user role and access status.


Author
------
Aditya Yadav
