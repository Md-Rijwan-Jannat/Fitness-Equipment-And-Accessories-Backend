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
    message: "Order confirm successfully",
    data: result,
  });
});

const UserOrderDetailsController = {
  createUserOrderDetails,
};
