import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);

export const UserRoutes = router;
