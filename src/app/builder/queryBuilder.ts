import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // Search method - 1
  search(searchingFields: string[]) {
    const searchTerm = this.query?.searchTerm as string | undefined;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchingFields.map((field) => ({
          [field]: { $regex: searchTerm, $options: "i" },
        })),
      } as FilterQuery<T>);
    }

    return this;
  }

  // Filter method - 2
  filter() {
    const queryObj = { ...this.query };
    const excludedFields = ["searchTerm", "sort", "limit", "fields", "page"];

    excludedFields.forEach((el) => delete queryObj[el]);

    // Filter by categories
    if (queryObj.categories) {
      const categories = Array.isArray(queryObj.categories)
        ? queryObj.categories
        : [queryObj.categories];
      this.modelQuery = this.modelQuery.find({
        category: { $in: categories },
      } as FilterQuery<T>);
    }

    // Filter by price range
    if (queryObj.minPrice || queryObj.maxPrice) {
      const minPrice = queryObj.minPrice as number | undefined;
      const maxPrice = queryObj.maxPrice as number | undefined;
      this.modelQuery = this.modelQuery.find({
        price: {
          ...(minPrice && { $gte: minPrice }),
          ...(maxPrice && { $lte: maxPrice }),
        },
      } as FilterQuery<T>);
    }

    // Filter by deletion status
    if (queryObj.isDeleted) {
      this.modelQuery = this.modelQuery.find({ isDeleted: queryObj.isDeleted });
    }

    return this;
  }

  // Sort method - 3
  sort() {
    const sort =
      (this.query?.sort as string)?.split(",")?.join(" ") || "-createdAt";

    this.modelQuery = this.modelQuery.sort(sort);

    return this;
  }

  // Paginate method - 4
  paginate() {
    const limit = (this.query?.limit as number) || 10;
    const page = (this.query?.page as number) || 1;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  // Fields method - 5
  fields() {
    const fields =
      (this.query?.fields as string)?.split(",")?.join(" ") || "-__v";

    this.modelQuery = this.modelQuery.select(fields);

    return this;
  }
}

export default QueryBuilder;
