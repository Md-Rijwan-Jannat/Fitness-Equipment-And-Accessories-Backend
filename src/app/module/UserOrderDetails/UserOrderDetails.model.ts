import { model, Schema, Types } from "mongoose";
import { TUserOrderDetails } from "./UserOrderDetails.interface";

const productOrderSchema = new Schema(
  {
    product: {
      type: Types.ObjectId,
      required: [true, "Product ID is required"],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      trim: true,
    },
  },
  { _id: false },
);

export const userOrderDetailsSchema = new Schema<TUserOrderDetails>(
  {
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
      trim: true,
    },
    products: {
      type: [productOrderSchema],
      required: [true, "Products are required"],
    },
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "User phone is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "User address is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const UserOrderDetails = model<TUserOrderDetails>(
  "UserOrderDetails",
  userOrderDetailsSchema,
);
