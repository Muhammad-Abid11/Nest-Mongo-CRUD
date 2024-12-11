import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Enable global validation
   app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // Remove extra properties not in the DTO
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
      transform: true, // Automatically transform payloads to match DTO types
    }
   ));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();



/* 
Steps follow
npm i -g @nestjs/cli
nest new nest-mongo-crud
cd nest-mongo-crud

npm install @nestjs/mongoose mongoose


Replace mongodb://localhost:27017/nest-mongo-crud with your MongoDB connection string.

nest g module your

Create a schema for your MongoDB collection. In the your module folder, create a file named your.schema.ts

nest g service your
In your.service.ts, implement the CRUD logic:

nest g controller your
In your.controller.ts, set up routes to handle CRUD operations:

In your.module.ts, register the schema and add the service and controller
npm run start
npm run start:dev

Validation
  To add validation to your NestJS project, you can use the class-validator and class-transformer libraries,
  which work well with NestJS. Here's how to integrate validation for your CRUD operations:

  npm install class-validator class-transformer
  Create DTOs (Data Transfer Objects)
  Add a global validation pipe in the main file (src/main.ts):
  Update the your.controller.ts to use the DTOs for validation:
  The ValidationPipe in main.ts can be customized to change how validation works:

*/
