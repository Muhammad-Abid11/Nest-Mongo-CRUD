import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

/*   @Post()
  create(@Body() data: Partial<Todo>) {
    return this.todoService.create(data);
  } */

  @Post()//http://localhost:3000/todo
  create(@Body() createYourDto: CreateTodoDto) {
    return this.todoService.create(createYourDto);
  }

  @Get()//http://localhost:3000/todo
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')//http://localhost:3000/todo/<id>
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

/*   @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Todo>) {
    return this.todoService.update(id, data);
  } */
  
  @Put(':id')//http://localhost:3000/todo/<id>
  update(@Param('id') id: string, @Body() updateYourDto: UpdateTodoDto) {
    return this.todoService.update(id, updateYourDto);
  }

  @Delete(':id')//http://localhost:3000/todo/<id>
  delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
