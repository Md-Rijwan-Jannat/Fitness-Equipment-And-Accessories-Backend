import { z } from "zod";
import { Categories } from "./product.constants";

// Define the Zod validation schema for Product
export const createProductValidationSchema = z.object({
  body: z.object({
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
    category: z.enum([...Categories] as [string, ...string[]], {
      message: "Category must be one of the predefined values",
    }),
    stock: z
      .number()
      .int()
      .nonnegative({ message: "Stock cannot be negative" }),
  }),
});

const getAllProductValidationSchema = z.object({
  searchTerm: z.string().optional(),
  categories: z.array(z.string()).optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  page: z.number().positive().optional(),
  limit: z.number().positive().optional(),
});

const updateProductValidationSchema = z.object({
  body: createProductValidationSchema.partial(),
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
  getAllProductValidationSchema,
};
