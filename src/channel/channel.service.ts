import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Channel, Prisma } from '@prisma/client';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  async creteChannel(data: CreateChannelDto): Promise<Channel> {
    const channel = await this.prisma.channel.create({
      data,
    });
    return channel;
  }

  async findAllChannels(): Promise<Channel[]> {
    return await this.prisma.channel.findMany();
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

  
}
