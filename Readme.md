# User Registration Endpoint

## Endpoint
`POST /user/register`

## Description
This endpoint is used to register a new user. It validates the input data, creates a new user in the database, and returns an authentication token along with the user details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

{
  "token": "jwt-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

{
  "errors": [
    {
      "msg": "All fields are required"
    }
  ]
}

curl -X POST http://localhost:4000/user/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'

User Login Endpoint
Endpoint
POST /user/log-in

Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details if the credentials are valid.

Request Body
The request body should be a JSON object with the following fields:

email: A string representing a valid email address (required).
password: A string with a minimum length of 6 characters (required).

Example:

{
  "email": "john.doe@example.com",
  "password": "password123"
}

Responses
Success
Status Code: 200 OK
Response Body:

{
  "token": "jwt-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

Validation Errors
Status Code: 400 Bad Request
Response Body:

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

Invalid Credentials
Status Code: 401 Unauthorized
Response Body:

{
  "message": "Invalid email or password"
}

Example Request

curl -X POST http://localhost:4000/user/log-in \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'

Here is the updated `README.md` file with documentation for the `/user/profile` and `/user/logout` endpoints:

```markdown
# User Registration Endpoint

## Endpoint
`POST /user/register`

## Description
This endpoint is used to register a new user. It validates the input data, creates a new user in the database, and returns an authentication token along with the user details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "jwt-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Example Request
```sh
curl -X POST http://localhost:4000/user/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Login Endpoint

## Endpoint
`POST /user/log-in`

## Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details if the credentials are valid.

## Request Body
The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required).
- 

password

: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "token": "jwt-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Example Request
```sh
curl -X POST http://localhost:4000/user/log-in \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Profile Endpoint

## Endpoint
`GET /user/profile`

## Description
This endpoint is used to get the profile of the authenticated user. It requires a valid authentication token.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Example Request
```sh
curl -X GET http://localhost:4000/user/profile \
-H "Authorization: Bearer jwt-auth-token"
```

# User Logout Endpoint

## Endpoint
`GET /user/logout`

## Description
This endpoint is used to log out the authenticated user. It requires a valid authentication token and clears the token from the cookies.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "message": "Logged out"
  }
  ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Example Request
```sh
curl -X GET http://localhost:4000/user/logout \
-H "Authorization: Bearer jwt-auth-token"
```
```

# Captain Registration Endpoint

## Endpoint
`POST /captain/register`

## Description
This endpoint is used to register a new captain. It validates the input data, creates a new captain in the database, and returns an authentication token along with the captain details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: A number with a minimum value of 1 (required).
  - `vehicleType`: A string with one of the following values: `car`, `motorcycle`, `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}

Responses
Success
Status Code: 201 Created
Response Body:

{
  "token": "jwt-auth-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

Validation Errors
Status Code: 400 Bad Request
Response Body:
Missing Fields
Status Code: 400 Bad Request
Response Body:
Example Request


{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle Type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}

Here is the `README.md` file with documentation for the captain routes:

```markdown
# Captain Registration Endpoint

## Endpoint
`POST /captain/register`

## Description
This endpoint is used to register a new captain. It validates the input data, creates a new captain in the database, and returns an authentication token along with the captain details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: A number with a minimum value of 1 (required).
  - `vehicleType`: A string with one of the following values: `car`, `motorcycle`, `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "jwt-auth-token",
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle Type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Example Request
```sh
curl -X POST http://localhost:4000/captain/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'

# Captain Registration Endpoint

## Endpoint
`POST /captain/register`

## Description
This endpoint is used to register a new captain. It validates the input data, creates a new captain in the database, and returns an authentication token along with the captain details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: A number with a minimum value of 1 (required).
  - `vehicleType`: A string with one of the following values: `car`, `motorcycle`, `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}

Responses
Success
Status Code: 201 Created <vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'>- Response Body: </vscode_annotation> ```json { "token": "jwt-auth-token", "captain": { "_id": "captain-id", "fullname": { "firstname": "Jane", "lastname": "Doe" }, "email": "jane.doe@example.com", "vehicle": { "color": "red", "plate": "ABC123", "capacity": 4, "vehicleType": "car" } } }
Validation Errors
Status Code: 400 Bad Request
Response Body:
Missing Fields
Status Code: 400 Bad Request
Response Body:
Example Request
Captain Login Endpoint
Endpoint
POST /captain/log-in

Description
This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns an authentication token along with the captain details if the credentials are valid.

Request Body
The request body should be a JSON object with the following fields:

email: A string representing a valid email address (required).
password: A string with a minimum length of 6 characters (required).
Example:

Responses
Success
Status Code: 200 OK
Response Body:
Validation Errors
Status Code: 400 Bad Request
Response Body:
Invalid Credentials
Status Code: 401 Unauthorized
Response Body:
Example Request
Captain Profile Endpoint
Endpoint
GET /captain/profile

Description
This endpoint is used to get the profile of the authenticated captain. It requires a valid authentication token.

Responses
Success
Status Code: 200 OK
Response Body:
Unauthorized
Status Code: 401 Unauthorized
Response Body:
Example Request
Captain Logout Endpoint
Endpoint
GET /captain/logout

Description
This endpoint is used to log out the authenticated captain. It requires a valid authentication token and clears the token from the cookies.

Responses
Success
Status Code: 200 OK
Response Body:
Unauthorized
Status Code: 401 Unauthorized
Response Body:
Example Request


Validation Errors
Status Code: 400 Bad Request
Response Body:

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle Type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}

Missing Fields
Status Code: 400 Bad Request
Response Body:

{
  "errors": [
    {
      "msg": "All fields are required"
    }
  ]
}

Example Request

curl -X POST http://localhost:4000/captain/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}

Here is the updated `README.md` file with documentation for the `/captain/log-in`, `/captain/logout`, and `/captain/profile` endpoints:

```markdown
# Captain Registration Endpoint

## Endpoint
`POST /captain/register`

## Description
This endpoint is used to register a new captain. It validates the input data, creates a new captain in the database, and returns an authentication token along with the captain details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: A number with a minimum value of 1 (required).
  - `vehicleType`: A string with one of the following values: `car`, `motorcycle`, `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code**: `201 Created`


- **Response Body**:


  ```json
  {
    "token": "jwt-auth-token",
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle Type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Example Request
```sh
curl -X POST http://localhost:4000/captain/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

# Captain Login Endpoint

## Endpoint
`POST /captain/log-in`

## Description
This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns an authentication token along with the captain details if the credentials are valid.

## Request Body
The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required).
- 

password

: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "token": "jwt-auth-token",
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Example Request
```sh
curl -X POST http://localhost:4000/captain/log-in \
-H "Content-Type: application/json" \
-d '{
  "email": "jane.doe@example.com",
  "password": "password123"
}'
```

# Captain Profile Endpoint

## Endpoint
`GET /captain/profile`

## Description
This endpoint is used to get the profile of the authenticated captain. It requires a valid authentication token.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Example Request
```sh
curl -X GET http://localhost:4000/captain/profile \
-H "Authorization: Bearer jwt-auth-token"
```

# Captain Logout Endpoint

## Endpoint
`GET /captain/logout`

## Description
This endpoint is used to log out the authenticated captain. It requires a valid authentication token and clears the token from the cookies.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "message": "Logout Successfully"
  }
  ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Example Request
```sh
curl -X GET http://localhost:4000/captain/logout \
-H "Authorization: Bearer jwt-auth-token"
```
```
