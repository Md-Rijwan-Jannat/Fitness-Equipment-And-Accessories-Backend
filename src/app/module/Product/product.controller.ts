import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const { product: productData } = req.body;

  const result = await ProductService.createProductInToDB(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create product successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
};
