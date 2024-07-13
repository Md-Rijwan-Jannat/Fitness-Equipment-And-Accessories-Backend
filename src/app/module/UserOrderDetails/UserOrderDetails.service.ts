import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Product from "../Product/product.model";
import { TUserOrderDetails } from "./UserOrderDetails.interface";
import { UserOrderDetails } from "./UserOrderDetails.model";
import mongoose from "mongoose";

// Create a UserOrderDetails Service
const createUserOrderDetailsInToDB = async (
  payload: TUserOrderDetails,
): Promise<TUserOrderDetails> => {
  const { product } = payload;

  console.log("Checking if product exists:", product);
  const isProductExist = await Product.findById(product);

  if (!isProductExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product not found");
  }

  if (isProductExist.stock <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "This product is out of stock");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const totalPrice = isProductExist.price * payload.quantity;
    await Product.findByIdAndUpdate(
      product,
      {
        $inc: { stock: -payload.quantity },
      },
      {
        session,
      },
    );

    const userOrderDetailsData = {
      ...payload,
      price: totalPrice,
    };

    const result = await UserOrderDetails.create([userOrderDetailsData], {
      session,
    });

    await session.commitTransaction();
    await session.endSession();

    return result[0];
  } catch (error) {
    console.error("Error occurred:", error);
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Transaction error");
  }
};

// Create a UserOrderDetails Service
const getAllUserOrderDetailsFromDB = async () => {
  const result = await UserOrderDetails.find();
  return result;
};

// Create a UserOrderDetails Service
const getSingleUserOrderDetailsFromDB = async (id: string) => {
  const result = await UserOrderDetails.findById(id);
  return result;
};

export const UserOrderDetailsServices = {
  createUserOrderDetailsInToDB,
  getAllUserOrderDetailsFromDB,
  getSingleUserOrderDetailsFromDB,
};
