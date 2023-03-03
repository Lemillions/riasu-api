import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { Banner } from '@prisma/client';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Banners')
@Controller('api/banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  async findAllBanners(): Promise<Banner[]> {
    return await this.bannerService.findAllBanners();
  }

  @Get(':id')
  async findOneBanner(@Param('id') id: string): Promise<Banner> {
    return await this.bannerService.findOneBanner(id);
  }

  @Post()
  async createBanner(@Body() data: CreateBannerDto): Promise<Banner> {
    return await this.bannerService.createBanner(data);
  }

  @Put(':id')
  async updateBanner(
    @Param('id') id: string,
    @Body() data: UpdateBannerDto,
  ): Promise<Banner> {
    return await this.bannerService.updateBanner(id, data);
  }

  @Delete(':id')
  async deleteBanner(@Param('id') id: string): Promise<Banner> {
    return await this.bannerService.removeBanner(id);
  }
}