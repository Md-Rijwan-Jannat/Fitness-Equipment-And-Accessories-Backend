import { ObjectId } from "mongoose";

// UserOrderDetails for delivery
export type TUserOrderDetails = {
  product: ObjectId;
  price?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  quantity: number;
};
