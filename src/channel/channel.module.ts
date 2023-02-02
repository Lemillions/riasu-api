import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ChannelService } from "./channel.service";

@Module({
  providers: [ChannelService, PrismaService],
  controllers: [],
})

export class ChannelModule {}