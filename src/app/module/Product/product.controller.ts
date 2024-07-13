import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./product.service";

// Create a new product
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProductInToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Create product successfully",
    data: result,
  });
});

// Get all products
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProductsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all products successfully",
    data: result,
  });
});

// Get single product
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProductFromDB(id);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Product not found",
      data: null,
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get product successfully",
    data: result,
  });
});

// Update single product
const updateSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.updateSingleProductInToDB(id, req.body);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Product not found",
      data: null,
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update product successfully",
    data: result,
  });
});

// Delete single product
const deleteSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.deleteSingleProductFromDB(id);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Product not found",
      data: null,
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete product successfully",
    data: result,
  });
});

// Update multiple products quantities
const updateProductsQuantities = catchAsync(
  async (req: Request, res: Response) => {
    const { products } = req.body;
    const result = await ProductService.updateProductsQuantitiesInDB(products);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Products quantities updated successfully",
      data: result,
    });
  },
);

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  updateProductsQuantities,
};
