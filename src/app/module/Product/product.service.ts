import QueryBuilder from "../../builder/queryBuilder";
import { TProduct } from "./product.interface";
import Product from "./product.model";

// Create a product Service
const createProductInToDB = async (payload: TProduct): Promise<TProduct> => {
  const result = await Product.create(payload);
  return result;
};

// Get all products Service
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder<TProduct>(Product.find(), query)
    .search([])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;

  return result;
};

// Get single product Service
const getSingleProductFromDB = async (id: string): Promise<TProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

// Update single product Service
const updateSingleProductInToDB = async (
  id: string,
  payload: Partial<TProduct>,
): Promise<TProduct | null> => {
  if (payload.images) {
    const product = await Product.findById(id);
    if (product) {
      // Merge existing images with new images, avoiding duplicates - cool
      product.images = [...new Set([...product.images, ...payload.images])];
      payload.images = product.images;
    }
  }

  const result = await Product.findByIdAndUpdate(
    id,
    {
      $set: payload,
    },
    {
      new: true,
    },
  );
  return result;
};

// Delete single product Service
const deleteSingleProductFromDB = async (
  id: string,
): Promise<TProduct | null> => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    },
  );
  return result;
};

export const ProductService = {
  createProductInToDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductInToDB,
  deleteSingleProductFromDB,
};
