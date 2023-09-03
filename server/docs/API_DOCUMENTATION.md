# Backend API Documentation

This documentation provides an overview of the backend API for the [Your Project Name] project. The API is responsible for user authentication and registration.

## Table of Contents

- [Authentication](#authentication)
  - [Login](#login)
  - [Authentication](#authentication-verification)

- [User Management](#user-management)
  - [Signup](#signup)


## Authentication

### Login

**Endpoint:** `/api/login`

**Method:** `POST`

**Description:** Allows users to log in by providing their email and password. Returns a JSON Web Token (JWT) for authenticated users.

**Request Body:**

- `email` (string): User's email address.
- `password` (string): User's password.

**Response (Success):**

- `message` (string): "Login Successful"
- `token` (string): JWT token for authentication.

**Response (Error):**

- Status Code: 400 Bad Request
- JSON object with an error message.


### Authentication Verification

**Endpoint:** `/api/auth`

**Method:** `POST`

**Description:** Verifies the provided JWT token and returns user information if the token is valid.

**Request Body:**

- `token` (string): JWT token obtained during login.

**Response (Success):**

- `auth` (boolean): `true` if authentication is successful, `false` otherwise.
- `data` (object): User data if authentication is successful.

**Response (Error):**

- `auth` (boolean): `false`
- `data` (string): Error message if authentication fails.


## User Management

### Signup

**Endpoint:** `/api/signup`

**Method:** `POST`

**Description:** Allows users to create a new account by providing their name, email, and password.

**Request Body:**

- `name` (string): User's name.
- `email` (string): User's email address.
- `password` (string): User's password.

**Response (Success):**

- `message` (string): "Account Created Successfully"
- `user` (object): User data with `_id`, `name`, and `email` properties.

**Response (Error):**

- Status Code: 400 Bad Request
- JSON object with an error message.