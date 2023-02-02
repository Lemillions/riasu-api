import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  channelsId: string[];

  @ApiPropertyOptional()
  filmsId: string[];
}
