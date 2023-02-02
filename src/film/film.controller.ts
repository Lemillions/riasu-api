import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Films')
@Controller('api/film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  async findAllFilms(): Promise<Film[]> {
    return await this.filmService.findAllFilms();
  }

  @Get(':id')
  async findOneFilm(@Param('id') id: string): Promise<Film> {
    return await this.filmService.findOneFilm(id);
  }

  @Post()
  async createFilm(@Body() data: CreateFilmDto): Promise<Film> {
    return await this.filmService.createFilm(data);
  }

  @Put(':id')
  async updateFilm(
    @Param('id') id: string,
    @Body() data: UpdateFilmDto,
  ): Promise<Film> {
    return await this.filmService.updateFilm(id, data);
  }

  @Delete(':id')
  async deleteFilm(@Param('id') id: string): Promise<Film> {
    return await this.filmService.deleteFilm(id);
  }

  @Get('genre/:id')
  async findManyFilmByGenreId(@Param('id') id: string): Promise<Film[]> {
    return await this.filmService.findManyFilmByGenreId(id);
  }

  @Get('product/:id')
  async findManyFilmByProductId(@Param('id') id: string): Promise<Film[]> {
    return await this.filmService.findManyFilmByProductId(id);
  }

  @Get('user')
  async findManyFilmByUserId(@Body('id') id: string): Promise<Film[]> {
    return await this.filmService.findManyFilmByUserId(id);
  }

  @Get('user/genre/:genreId')
  async findManyFilmByUserIdAndGenreId(
    @Body('id') id: string,
    @Param('genreId') genreId: string,
  ): Promise<Film[]> {
    return await this.filmService.findManyFilmByUserIdAndGenreId(id, genreId);
  }
}
