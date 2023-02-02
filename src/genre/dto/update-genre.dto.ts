import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGenreDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  channelsId: string[];

  @ApiPropertyOptional()
  filmsId: string[];
}
