import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  photo: string;

  @IsNotEmpty()
  role: string;
}
