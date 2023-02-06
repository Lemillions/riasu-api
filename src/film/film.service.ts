import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Film } from '@prisma/client';
import { UpdateFilmDto } from './dto/update-film.dto';
import { CreateFilmDto } from './dto/create-film.dto';

@Injectable()
export class FilmService {
  constructor(private prisma: PrismaService) {}

  async createFilm(data: CreateFilmDto): Promise<Film> {
    const film = await this.prisma.film.create({
      data,
      include: {
        genres: true,
      }
    });
    return film;
  }

  async findAllFilms(): Promise<Film[]> {
    return await this.prisma.film.findMany({
      include: {
        genres: true,
      }
    });
  }

  async findOneFilm(id: string): Promise<Film> {
    const film = await this.prisma.film.findUnique({
      where: { id },
    });
    if (!film) {
      throw new NotFoundException(`Film with ID ${id} not found`);
    }
    return film;
  }

  async updateFilm(id: string, data: UpdateFilmDto): Promise<Film> {
    const film = await this.prisma.film.update({
      where: { id },
      data,
    });
    if (!film) {
      throw new NotFoundException(`Film with ID ${id} not found`);
    }
    return film;
  }

  async deleteFilm(id: string): Promise<Film> {
    const film = await this.prisma.film.delete({
      where: { id },
    });
    if (!film) {
      throw new NotFoundException(`Film with ID ${id} not found`);
    }
    return film;
  }

  async findManyFilmByGenreId(id: string): Promise<Film[]> {
    return await this.prisma.film.findMany({
      where: {
        genres: {
          some: {
            genreId: id,
          },
        },
      },
    });
  }

  async findManyFilmByProductId(id: string): Promise<Film[]> {
    return await this.prisma.film.findMany({
      where: {
        products: {
          some: {
            productId: id,
          },
        },
      },
    });
  }

  async findManyFilmByUserId(id: string): Promise<Film[]> {
    const userProducts = await this.prisma.user.findUnique({
      where: { id: id},
      include: {
        products: true,
      },
    });

    if(!userProducts){
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const userProductsId = userProducts.products.map(
      (product) => product.productId,
    );

    return await this.prisma.film.findMany({  
      where: {
        products: {
          some: {
            productId: {
              in: userProductsId,
            },
          },
        },
      },
    });
  }

  async findManyFilmByUserIdAndGenreId(id: string, genreId: string): Promise<Film[]> {
    const userFilms = await this.findManyFilmByUserId(id);
    const userFilmsId = userFilms.map(
      (film) => film.id,
    );

    return await this.prisma.film.findMany({
      where: {
        id: {
          in: userFilmsId,
        },
        genres: {
          some: {
            genreId: genreId,
          },
        },
      },
    });
  }

  async addFilmsToGenre(id: string, genreIds: string[]): Promise<string> {
    const resultado = await this.prisma.filmOnGenre.deleteMany({
      where: {
        filmId: id,
      },
    })

    const data = genreIds.map((genreId) => ({
      filmId: id,
      genreId,
    }));

    await this.prisma.filmOnGenre.createMany({
      data,
    });

    if (!resultado) {
      throw new NotFoundException(`Filme não encontrado`);
    }
    return 'Ok';
  }

}
