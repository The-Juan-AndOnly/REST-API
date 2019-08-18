# Full Stack JavaScript Techdegree v2 - REST API Project

A REST API that allows users to CREATE, READ, UPDATE, DELETE Courses as well as CREATE a USER and view currently authenticated USER.

### Prerequisites

- Node: 8.0.0 later <https://nodejs.org/en/>

### Optional

- Postman: <https://www.getpostman.com/>

### How to install

- Download or Clone the repo to your local machine

- Run `npm install` to install all dependencies of the Project

- Seed the database by running `npm run seed` which will create the `fsjstd-restapi.db`

* Lastly run the application by using the command `npm start`

* You can utilize the `RESTAPI.postman_collection.json` file in Postman to test the different routes and responses.

* To Test the Express server visit the URL [http://localhost:5000/](http://localhost:5000/).

#### Users Route

```
GET /api/users
```

Will return the currently authenticated user

```
POST /api/users
```

Creates a new user

#### Courses Route

```
GET /api/courses
```

Returns a list of courses ( includes the user that owns each course)

```
GET /api/courses/:id
```

Returns a course (including the user that own the course) for the provided course ID

```
POST /api/courses
```

Create a new course for an authenticated user

```
PUT /api/courses/:id
```

Updates a course for an authenticated user

```
DELETE /api/courses/:id
```

Deletes a course for an authenticated user
