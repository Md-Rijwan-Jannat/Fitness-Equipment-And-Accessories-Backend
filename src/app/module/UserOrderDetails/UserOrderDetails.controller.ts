import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserOrderDetailsServices } from "./UserOrderDetails.service";

// Create a new UserOrderDetails Controller
const createUserOrderDetails = catchAsync(async (req, res) => {
  const result = await UserOrderDetailsServices.createUserOrderDetailsInToDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order confirmed successfully",
    data: result,
  });
});

// Get all user order details
const getAllUserOrderDetails = catchAsync(async (req, res) => {
  const result = await UserOrderDetailsServices.getAllUserOrderDetailsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all user order details successfully",
    data: result,
  });
});

// Get single user order details
const getSingleUserOrderDetails = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await UserOrderDetailsServices.getSingleUserOrderDetailsFromDB(id);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "User order details not found",
      data: null,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get user order details successfully",
      data: result,
    });
  }
});

export const UserOrderDetailsController = {
  createUserOrderDetails,
  getAllUserOrderDetails,
  getSingleUserOrderDetails,
};
