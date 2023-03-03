import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { BannerController } from "./banner.controller";
import { BannerService } from "./banner.service";

@Module({
  controllers: [BannerController],
  providers: [PrismaService, BannerService],
})

export class BannerModule {}