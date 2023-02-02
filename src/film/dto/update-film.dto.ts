import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateFilmDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  src: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  banner: string;

  @ApiPropertyOptional()
  genresId: string[];

  @ApiPropertyOptional()
  productsId: string[];
}
