import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne() {
    return {
      id: 1,
      username: 'test',
      email: 'ayoub@gmail.com',
    };
  }

  @Post()
  async create() {
    return this.usersService.create({
      username: 'test',
      email: 'test@test.com',
      password: 'test',
    });
  }
}
