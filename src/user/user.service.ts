import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<User[]> {
    return await this.prisma.user.findMany({
      include: {
        products: true
      }
    });
  }

  async getOneUser(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        products: true
      }
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async loginUser(email: string, password: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (!user) {
      throw new NotFoundException(
        'Email or password is incorrect. Please retry',
      );
    }
    return user;
  }

  async addProductsToUser(id: string, productsId: string[]): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        products: {
          connect: productsId.map((productId) => ({
            userId_productId: { userId: id, productId: productId },
         })),
        },
      },
    });
    return user;
  }

  async addProducts(id: string, productsId: string[]): Promise<any> {
    const today = new Date();
    const expires = new Date(today.setMonth(today.getMonth() + 1));
    const data = productsId.map((productId) => ({
      userId: id,
      productId: productId,
      expires
    }));
    const resultado = await this.prisma.productOnUser.createMany({
      data
    });
    
    if(!resultado){
      throw new NotFoundException('Usuario ou produto listado não encotrados!');
    }

    return "Ok"
  }
}
