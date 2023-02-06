import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product, User } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany({
      include: {
        channels: true,
        users: true,
        films: true,
      },
    });
  }

  async findOneProduct(id: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        channels: true,
        films: true,
      },
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

  async addFilmsToProduct(productId: string, filmsId: string[]): Promise<string> {
    const data = filmsId.map((filmId) => ({
      filmId: filmId,
      productId: productId,
    }));
    const resultado = await this.prisma.filmOnProduct.deleteMany({
      where: { productId: productId },
    });
    await this.prisma.filmOnProduct.createMany({
      data,
    });
    if (!resultado) {
      throw new NotFoundException('Produto não encotrado!');
    }
    return 'Ok';
  }

  async addChannelsToProduct(
    productId: string,
    channelsId: string[],
  ): Promise<string> {
    const data = channelsId.map((channelId) => ({
      channelId: channelId,
      productId: productId,
    }));
    const resultado = await this.prisma.channelOnProduct.deleteMany({
      where: { productId: productId },
    });
    await this.prisma.channelOnProduct.createMany({
      data,
    });

    if (!resultado) {
      throw new NotFoundException('Produto não encotrado!');
    }
    return 'Ok';
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
