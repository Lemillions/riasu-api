import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('channels')
@Controller('api/channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async findAllChannels(): Promise<Channel[]> {
    return await this.channelService.findAllChannels();
  }

  @Get(':id')
  async findOneChannel(@Param('id') id: string): Promise<Channel> {
    return await this.channelService.findOneChannel(id);
  }

  @Post()
  async createChannel(@Body() data: CreateChannelDto): Promise<Channel> {
    return await this.channelService.createChannel(data);
  }

  @Put(':id')
  async updateChannel(
    @Param('id') id: string,
    @Body() data: UpdateChannelDto,
  ): Promise<Channel> {
    return await this.channelService.updateChannel(id, data);
  }

  @Delete(':id')
  async deleteChannel(@Param('id') id: string): Promise<Channel> {
    return await this.channelService.deleteChannel(id);
  }

  @Get('genre/:id')
  async findManyChannelByGenreId(@Param('id') id: string): Promise<Channel[]> {
    return await this.channelService.findManyChannelByGenreId(id);
  }

  @Get('product/:id')
  async findManyChannelByProductId(@Param('id') id: string): Promise<Channel[]> {
    return await this.channelService.findManyChannelByProductId(id);
  }

  @Get('user/:id')
  async findManyChannelByUserId(@Param('id') id: string): Promise<Channel[]> {
    return await this.channelService.findManyChannelByUserId(id);
  }

  @Get('user/:id/genre/:genreId')
  async findManyChannelByUserIdAndGenreId(
    @Param('id') id: string,
    @Param('genreId') genreId: string,
  ): Promise<Channel[]> {
    return await this.channelService.findManyChannelByUserIdAndGenreId(id, genreId);
  }

}
