import { model, Schema, Types } from "mongoose";
import { TUserOrderDetails } from "./UserOrderDetails.interface";

export const userOrderDetailsSchema = new Schema<TUserOrderDetails>(
  {
    product: {
      type: Types.ObjectId,
      required: [true, "Product ID is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
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
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
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
