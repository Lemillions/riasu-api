import { Module } from '@nestjs/common';
import { ChannelModule } from '@/channel/channel.module';
import { ChannelController } from './channel/channel.controller';
import { ChannelService } from './channel/channel.service';
import { FilmModule } from './film/film.module';
import { FilmController } from './film/film.controller';
import { FilmService } from './film/film.service';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { GenreModule } from './genre/genre.module';
import { GenreController } from './genre/genre.controller';
import { GenreService } from './genre/genre.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { BannerModule } from './banner/banner.module';
import { BannerController } from './banner/banner.controller';
import { BannerService } from './banner/banner.service';


@Module({
  imports: [ChannelModule, FilmModule, PrismaModule, ProductModule, GenreModule, UserModule, BannerModule],
  controllers: [ChannelController, FilmController, ProductController, GenreController, UserController, BannerController],
  providers: [ChannelService, FilmService, ProductService, GenreService, UserService, BannerService],
})
export class AppModule {}
