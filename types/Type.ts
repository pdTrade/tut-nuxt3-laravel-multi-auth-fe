export interface Credentials {
  email: string;
  password: string;
}

export interface RegistrationInfo {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordInfo {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
