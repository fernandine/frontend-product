import { Role } from "./role";
import { Address } from './address';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthDay: string;
  roles: Role[];
}
