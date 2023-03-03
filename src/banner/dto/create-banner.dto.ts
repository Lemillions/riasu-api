import { IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBannerDto {
  @ApiProperty()
  @IsUrl()
  src: string;

  @ApiProperty()
  @IsUrl()
  link: string;
}