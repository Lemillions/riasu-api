import { IsUrl, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBannerDto {
  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  src: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  link: string;
}