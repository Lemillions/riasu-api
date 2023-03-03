import { IsString, IsOptional, IsUrl } from 'class-validator';
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
  @IsUrl()
  src: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  banner: string;

  @ApiPropertyOptional()
  genreId: string[];

  @ApiPropertyOptional()
  productId: string[];
}
