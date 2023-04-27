import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() param) {
    return { user: {}, param };
  }

  @Put(':id')
  async update(@Body() body, @Param() param) {
    return {
      method: 'PUT',
      body,
      param,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() param) {
    return {
      method: 'PATCH',
      body,
      param,
    };
  }

  @Delete(':id')
  async delete(@Param() param) {
    return {
      param,
    };
  }
}
