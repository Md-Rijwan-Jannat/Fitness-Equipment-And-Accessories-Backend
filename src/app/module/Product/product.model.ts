import { Schema, model, UpdateQuery, Query } from "mongoose";
import { TProduct } from "./product.interface";
import { Categories } from "./product.constants";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

// Define the Product schema
const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Product description is required"],
    },
    images: [
      {
        type: String,
        trim: true,
        required: [true, "Product image is required"],
      },
    ],
    category: {
      type: String,
      trim: true,
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Pre-find hooks
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});

productSchema.pre("findOne", function (next) {
  this.findOne({ isDeleted: { $eq: false } });
  next();
});

productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $eq: false } } });
  next();
});

// Pre-save hook to check for duplicate product names
productSchema.pre("save", async function (next) {
  const product = this;
  if (product.isNew || product.isModified("name")) {
    const existingProduct = await Product.findOne({
      name: product.name,
      isDeleted: false,
    });
    if (existingProduct) {
      const error = new Error("Product with this name already exists");
      return next(error);
    }
  }
  next();
});

productSchema.pre("save", async function (next) {
  const isExistStudent = await Product.findById(this._id);
  if (isExistStudent) {
    throw new AppError(httpStatus.NOT_FOUND, "This student already exists!");
  }
  next();
});

// Create the Product model
const Product = model<TProduct>("Product", productSchema);

export default Product;
