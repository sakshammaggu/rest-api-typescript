# Build a REST API with Node.js, Mongoose & TypeScript

Note: This repository includes the [postman collection for the finished API](postman_collection.json)

Note 2: We also want to generate new public & private keys

#### Generate new keys: https://travistidwell.com/jsencrypt/demo/

#### Base64 encode the keys: https://www.base64encode.org/

## Concepts
* REST API principals
    * CRUD
    * HTTP methods
* JWT & refresh tokens
* Request validation
## Technologies
* Node.js
* MongoDB with Mongoose
* TypeScript
* Express.js & Express.js middleware
* Zod validation

## Respository structure
1. Bootstrap application
   1. Setup express JS
   2. Create routes function
   3. Setup database connection
   4. Setup logger
   5. Validate request middleware
2. Registration
   1. Create user model
   2. Create user endpoint
   3. Create user session
   4. Deserialize user middleware (refresh tokens)
   5. Get sessions
   6. Delete session
   7. Require user middleware
3. Product resource
   1. Create product model
   2. Create product
   3. Read product
   4. Update product
   5. Delete product

## Installation

First, initialize your project and then install the necessary dependencies and development dependencies:

```bash
npm init -y
npm install express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
npm install @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript --save-dev
```

## Data flow
![](./public/images/data-flow.png)


## Access & refresh token flow
![](./public/images/refresh-token-flow.png)


# Deployment

## What will we use
* Docker (image)
* docker-compose (container)
* Caddy - Web server
* DigitalOcean

Note: You will need Docker installed locally if you want to test your Docker configutation