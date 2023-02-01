import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateChannelDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  src: string;

  genresId: string[];

  productsId: string[];
}
