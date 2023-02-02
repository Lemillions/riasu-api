import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Genres')
@Controller('api/genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) {}

    @Get()
    async findAllGenres(): Promise<Genre[]> {
        return await this.genreService.findAllGenre();
    }

    @Get(':id')
    async findOneGenre(@Param('id') id: string): Promise<Genre> {
        return await this.genreService.findOneGenre(id);
    }

    @Post()
    async createGenre(@Body() data: CreateGenreDto): Promise<Genre> {
        return await this.genreService.createGenre(data);
    }

    @Put(':id')
    async updateGenre(
        @Param('id') id: string,
        @Body() data: UpdateGenreDto,
    ): Promise<Genre> {
        return await this.genreService.updateGenre(id, data);
    }

    @Delete(':id')
    async deleteGenre(@Param('id') id: string): Promise<Genre> {
        return await this.genreService.removeGenre(id);
    }

    @Post(':genreId/film')
    async addFilmToGenre(
        @Param('genreId') genreId: string,
        @Body('filmIds') filmIds: string[],
    ): Promise<Genre> {
        return await this.genreService.addFilmsToGenre(genreId, filmIds);
    }

}

