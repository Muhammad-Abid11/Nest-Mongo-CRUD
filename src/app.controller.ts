import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/about')
  getAbout(): string {
    return 'Hello about';
  }

  @Post()
  postTodoWithData(@Body() data: Partial<any>) {
    return data
  }
}