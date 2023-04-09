import { Role } from "./role";
import { Address } from './address';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: Role[];
  addressList: Address[];
}
