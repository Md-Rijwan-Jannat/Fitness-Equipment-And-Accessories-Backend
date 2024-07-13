import { ObjectId } from "mongoose";

export type TProductOrder = {
  product: ObjectId;
  quantity: number;
};

export type TUserOrderDetails = {
  paymentMethod: string;
  products: TProductOrder[];
  name: string;
  email: string;
  phone: string;
  address: string;
};
