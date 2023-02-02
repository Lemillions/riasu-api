import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product, User } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async findOneProduct(id: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async createProduct(data: CreateProductDto): Promise<Product> {
    const product = await this.prisma.product.create({
      data,
    });
    return product;
  }

  async updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    const product = await this.prisma.product.update({
      where: { id },
      data,
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.prisma.product.delete({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async addChannelsToProduct(
    productId: string,
    channelsId: string[],
  ): Promise<Product> {
    const product = await this.prisma.product.update({
      where: { id: productId },
      data: {
        channels: {
          connect: channelsId.map((id) => ({
            channelId_productId: { channelId: id, productId },
          })),
        },
      },
    });
    return product;
  }

  async removeChannelsFromProduct(
    productId: string,
    channelsId: string[],
  ): Promise<Product> {
    const product = await this.prisma.product.update({
      where: { id: productId },
      data: {
        channels: {
          disconnect: channelsId.map((id) => ({
            channelId_productId: { channelId: id, productId },
          })),
        },
      },
    });
    return product;
  }

  async getUserFromProduct(productId: string): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      where: {
        products: {
          some: {
            productId: productId,
          },
        },
      },
    });
    return users;
  }
}
