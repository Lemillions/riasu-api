import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Channel } from '@prisma/client';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  async createChannel(data: CreateChannelDto): Promise<Channel> {
    const channel = await this.prisma.channel.create({
      data,
      include: {
        genres: true,
      }
    });
    return channel;
  }

  async findAllChannels(): Promise<Channel[]> {
    return await this.prisma.channel.findMany({
      include: {
        genres: true,
      }
    });
  }

  async findOneChannel(id: string): Promise<Channel> {
    const channel = await this.prisma.channel.findUnique({
      where: { id },
    });
    if (!channel) {
      throw new NotFoundException(`Channel with ID ${id} not found`);
    }
    return channel;
  }

  async updateChannel(id: string, data: UpdateChannelDto): Promise<Channel> {
    const channel = await this.prisma.channel.update({
      where: { id },
      data,
    });
    if (!channel) {
      throw new NotFoundException(`Channel with ID ${id} not found`);
    }
    return channel;
  }

  async deleteChannel(id: string): Promise<Channel> {
    const channel = await this.prisma.channel.delete({
      where: { id },
    });
    if (!channel) {
      throw new NotFoundException(`Channel with ID ${id} not found`);
    }
    return channel;
  }

  async findManyChannelByGenreId(id: string): Promise<Channel[]> {
    return await this.prisma.channel.findMany({
      where: {
        genres: {
          some: {
            genreId: id,
          },
        },
      },
    });
  }

  async findManyChannelByProductId(id: string): Promise<Channel[]> {
    return await this.prisma.channel.findMany({
      where: {
        products: {
          some: {
            productId: id,
          },
        },
      },
    });
  }

  async findManyChannelByUserId(id: string): Promise<Channel[]> {
    const userProducts = await this.prisma.user.findUnique({
      where: { id: id},
      include: {
        products: true,
      },
    });

    if(!userProducts){
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const userProductsId = userProducts.products.map(
      (product) => product.productId,
    );

    return await this.prisma.channel.findMany({
      where: {
        products: {
          some: {
            productId: { in: userProductsId },
          },
        },
      },
    });
  }

  async findManyChannelByUserIdAndGenreId(
    userId: string,
    genreId: string,
  ): Promise<Channel[]> {
    const userChannels = await this.findManyChannelByUserId(userId);
    const userChannelsId = userChannels.map((channel) => channel.id);
    return await this.prisma.channel.findMany({
      where: {
        id: { in: userChannelsId },
        genres: {
          some: {
            genreId,
          },
        },
      },
    });
  }
}
