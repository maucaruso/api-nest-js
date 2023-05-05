import { IsEmail } from 'class-validator';

export class AuthForgetrDTO {
  @IsEmail()
  email: string;
}
