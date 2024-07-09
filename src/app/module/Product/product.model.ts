import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";
import { Categories } from "./product.consttant";

// Define the Product schema
const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    images: [
      {
        type: String,
        required: [true, "Product image is required"],
      },
    ],
    category: {
      type: String,
      enum: {
        values: Categories,
        message: "Category `{VALUE}` is not valid",
      },
      required: [true, "Product category is required"],
    },
    stock: {
      type: Number,
      required: [true, "Product stock is required"],
      min: [0, "Stock cannot be less than 0"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Create the Product model
const Product = model<IProduct>("Product", productSchema);

export default Product;
