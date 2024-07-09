import { model, Schema } from "mongoose";
import { TUserOrderDetails } from "./UserOrderDetails.interface";

export const userOrderDetailsSchema = new Schema<TUserOrderDetails>(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
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
