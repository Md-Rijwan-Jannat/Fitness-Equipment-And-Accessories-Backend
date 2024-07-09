import { z } from "zod";
import { Categories } from "./product.consttant";

// Define the Zod validation schema for Product
export const createProductValidationSchema = z.object({
  name: z.string().nonempty({ message: "Product name is required" }),
  price: z
    .number()
    .positive({ message: "Product price must be greater than 0" }),
  description: z
    .string()
    .nonempty({ message: "Product description is required" }),
  images: z
    .array(z.string())
    .nonempty({ message: "At least one product image is required" }),
  category: z.array(z.enum([...Categories] as [string, ...string[]]), {
    message: "Category must be one of the predefined values",
  }),
  stock: z.number().int().nonnegative({ message: "Stock cannot be negative" }),
});

export const ProductValidation = {
  createProductValidationSchema,
};
