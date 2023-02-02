import { IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiPropertyOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  channelsId: string[];

  @ApiPropertyOptional()
  filmsId: string[];
}
