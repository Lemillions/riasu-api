import { IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  channelsId: string[];

  @ApiPropertyOptional()
  filmsId: string[];
}