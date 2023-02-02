import { IsString, IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserStatus } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsEnum(UserStatus)
  status: UserStatus;

}
