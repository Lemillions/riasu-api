import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFilmDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  src: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  banner: string;

  @ApiPropertyOptional()
  genreId: string[];

  @ApiPropertyOptional()
  productId: string[];
}
