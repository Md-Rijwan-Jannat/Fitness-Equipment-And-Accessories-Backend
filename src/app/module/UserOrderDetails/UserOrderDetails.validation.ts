import { z } from "zod";

const createUserOrderDetailsValidationSchema = z.object({
  body: z.object({
    product: z.string({
      invalid_type_error: "Product ID must be a string",
      required_error: "Product ID is required",
    }),
    price: z
      .number({
        invalid_type_error: "User name must be a number",
      })
      .optional(),
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
    quantity: z.number({
      invalid_type_error: "Product quantity must be a number",
      required_error: "Product quantity is required",
    }),
  }),
});

export const UserOrderDetailsValidation = {
  createUserOrderDetailsValidationSchema,
};
