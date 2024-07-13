import { z } from "zod";

const productOrderSchema = z.object({
  product: z.string({
    invalid_type_error: "Product ID must be a string",
    required_error: "Product ID is required",
  }),
  quantity: z.number({
    invalid_type_error: "Product quantity must be a number",
    required_error: "Product quantity is required",
  }),
});

const createUserOrderDetailsValidationSchema = z.object({
  body: z.object({
    paymentMethod: z.string({
      invalid_type_error: "Payment method must be a string",
      required_error: "Payment method is required",
    }),
    products: z.array(productOrderSchema, {
      invalid_type_error: "Products must be an array of product orders",
      required_error: "Products are required",
    }),
    name: z.string({
      invalid_type_error: "User name must be a string",
      required_error: "User name is required",
    }),
    email: z
      .string({
        invalid_type_error: "User email must be a string",
        required_error: "User email is required",
      })
      .email(),
    phone: z.string({
      invalid_type_error: "User phone must be a string",
      required_error: "User phone is required",
    }),
    address: z.string({
      invalid_type_error: "User address must be a string",
      required_error: "User address is required",
    }),
  }),
});

export const UserOrderDetailsValidation = {
  createUserOrderDetailsValidationSchema,
};
