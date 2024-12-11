import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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


*/
