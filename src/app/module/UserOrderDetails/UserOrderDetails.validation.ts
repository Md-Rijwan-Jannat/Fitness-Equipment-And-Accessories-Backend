import { z } from "zod";

const createUserOrderDetailsValidationSchema = z.object({
  body: z.object({
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
