import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUrl } from 'class-validator';

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
  @IsUrl()
  @IsOptional()
  src: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  banner: string;

  @ApiPropertyOptional()
  genresId: string[];

  @ApiPropertyOptional()
  productsId: string[];
}
