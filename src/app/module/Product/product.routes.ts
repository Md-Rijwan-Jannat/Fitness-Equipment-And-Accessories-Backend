import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";

const router = Router();

router.post(
  "/create-product",
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);

router.get(
  "/",
  validateRequest(ProductValidation.getAllProductValidationSchema),
  ProductController.getAllProducts,
);

router.get("/:id", ProductController.getSingleProduct);

router.put(
  "/:id",
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateSingleProduct,
);

router.delete("/:id", ProductController.deleteSingleProduct);

export const ProductRoutes = router;
