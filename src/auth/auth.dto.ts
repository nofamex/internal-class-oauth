import { IsEmail, IsString } from 'class-validator';

export class LoginRequestDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}

export class RegisterRequestDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly fullName: string;

  @IsString()
  public readonly password: string;
}

export class ValidateRequestDto {
  @IsString()
  public readonly token: string;
}

export class RegisterResponse {
  public readonly status: number;
  public readonly error: string[];
}

export class LoginResponse {
  public readonly status: number;
  public readonly error: string[];
  public readonly token: string;
}

export class ValidateResponse {
  public readonly status: number;
  public readonly error: string[];
}
