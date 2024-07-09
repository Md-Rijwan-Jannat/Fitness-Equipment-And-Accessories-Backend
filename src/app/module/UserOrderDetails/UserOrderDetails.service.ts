import { TUserOrderDetails } from "./UserOrderDetails.interface";
import { UserOrderDetails } from "./UserOrderDetails.model";

// Create a UserOrderDetails Service
const createUserOrderDetailsInToDB = async (
  payload: TUserOrderDetails,
): Promise<TUserOrderDetails> => {
  const result = await UserOrderDetails.create(payload);
  return result;
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
