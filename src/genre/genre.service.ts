import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Genre } from '@prisma/client';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async createGenre(data: CreateGenreDto): Promise<Genre> {
    const genre = await this.prisma.genre.create({
      data,
    });
    return genre;
  }

  async findAllGenre(): Promise<Genre[]> {
    const genres = await this.prisma.genre.findMany();
    return genres;
  }

  async findOneGenre(id: string): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({
      where: { id },
    });
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    return genre;
  }

  async updateGenre(id: string, data: UpdateGenreDto): Promise<Genre> {
    const genre = await this.prisma.genre.update({
      where: { id },
      data,
    });
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    return genre;
  }

  async removeGenre(id: string): Promise<Genre> {
    const genre = await this.prisma.genre.delete({
      where: { id },
    });
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    return genre;
  }

  async addFilmsToGenre(genreId: string, filmsId: string[]): Promise<Genre> {
    const genre = await this.prisma.genre.update({
      where: { id: genreId },
      data: {
        films: {
          connect: filmsId.map((id)=>({
            filmId_genreId :{
              filmId: id,
              genreId: genreId
            }
          })),
        },
      },
    });
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${genreId} not found`);
    }
    return genre;
  }
}
