import { IsString } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  channelsId: string[];

  @ApiPropertyOptional()
  filmsId: string[];
}
