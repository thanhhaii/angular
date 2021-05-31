import { Address } from './address.model';

export class Account {
  username: string;
  password: string;
  description: string;
  address: Address;
  status: boolean;
  gender: string;
  role: string;
}
