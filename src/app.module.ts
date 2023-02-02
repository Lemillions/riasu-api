import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { ChannelModule } from './channel/channel.module';
import { ChannelController } from './channel/channel.controller';
import { ChannelService } from './channel/channel.service';

@Module({
  imports: [ChannelModule, PrismaModule],
  controllers: [ChannelController],
  providers: [ ChannelService],
})
export class AppModule {}
