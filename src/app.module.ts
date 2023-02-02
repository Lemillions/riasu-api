import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ChannelModule } from './channel/channel.module';
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

@Module({
  imports: [ChannelModule, FilmModule, PrismaModule, ProductModule, GenreModule],
  controllers: [ChannelController, FilmController, ProductController, GenreController],
  providers: [ChannelService, FilmService, ProductService, GenreService],
})
export class AppModule {}
