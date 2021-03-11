import { ShippingAddress } from './shipping-address';

export interface AppUser {
  displayName: string;
  email: string;
  isAdmin: boolean;
  shippingAddress?: ShippingAddress;
}