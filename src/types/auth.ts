import { User } from './models';

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
}

export interface StrapiAuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ErrorResponse {
  error: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
}

export interface AuthData {
  email: string;
  password?: string;
  token?: string;
  user?: User;
}
