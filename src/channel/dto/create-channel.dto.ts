import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  src: string;

  genreId: string[];

  productId: string[];
}
