import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenreService } from './genre.service';

@Module({
    controllers: [],
    providers: [PrismaService, GenreService],
})

export class GenreModule {}