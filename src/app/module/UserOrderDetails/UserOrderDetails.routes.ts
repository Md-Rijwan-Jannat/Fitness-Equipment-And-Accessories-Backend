import express from "express";
import { UserOrderDetailsController } from "./UserOrderDetails.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserOrderDetailsValidation } from "./UserOrderDetails.validation";

const router = express.Router();

router.post(
  "/create-user-order-details",
  validateRequest(
    UserOrderDetailsValidation.createUserOrderDetailsValidationSchema,
  ),
  UserOrderDetailsController.createUserOrderDetails,
);

router.get("/", UserOrderDetailsController.getAllUserOrderDetails);

router.get("/:id", UserOrderDetailsController.getSingleUserOrderDetails);

export const UserOrderDetailsRoutes = router;
