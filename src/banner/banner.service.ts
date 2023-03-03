import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Banner } from '@prisma/client';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) {}

  async createBanner(data: CreateBannerDto): Promise<Banner> {
    const banner = await this.prisma.banner.create({
      data,
    });
    return banner;
  }

  async findAllBanners(): Promise<Banner[]> {
    return await this.prisma.banner.findMany();
  }

  async findOneBanner(id: string): Promise<Banner> {
    const banner = await this.prisma.banner.findUnique({
      where: { id },
    });
    if (!banner) {
      throw new NotFoundException(`Banner with ID ${id} not found`);
    }
    return banner;
  }

  async updateBanner(id: string, data: UpdateBannerDto): Promise<Banner> {
    const banner = await this.prisma.banner.update({
      where: { id },
      data,
    });
    return banner;
  }

  async removeBanner(id: string): Promise<Banner> {
    const banner = await this.prisma.banner.delete({
      where: { id },
    });
    return banner;
  }
}
  