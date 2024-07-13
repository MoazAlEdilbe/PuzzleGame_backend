import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body('username') username: string) {
    return this.userService.createUser(username);
  }

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.userService.getUser(username);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
