export interface ICreateUserDTO {
  name: string
  email: string;
  password: string;
  password_confirmation: string;
  [key: string]: string;
}