import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return await this.userService.getAllUser();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getOneUser(id);
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.createUser(data);
  }

  @Put(':id')
  async updateUser(@Param('id') id:string, @Body() data:UpdateUserDto): Promise<User> {
    return await this.userService.updateUser(id, data)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userService.deleteUser(id)
  }

  @Get('login')
  async loginUser(@Body() data: {email: string, password: string}): Promise<User> {
    return await this.userService.loginUser(data.email, data.password)
  }

  @Post(':id/product')
  async addProductsToUser(@Body() data: string[], @Param('id') id: string): Promise<User> {
    return await this.userService.addProducts(id, data)
  }
}