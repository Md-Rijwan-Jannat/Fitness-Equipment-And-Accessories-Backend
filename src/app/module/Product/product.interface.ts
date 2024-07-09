export type TCategory =
  | "Cardio"
  | "Strength Training"
  | "Yoga & Pilates"
  | "Accessories"
  | "Outdoor & Adventure"
  | "Recovery & Wellness"
  | "Apparel"
  | "Nutrition & Supplements"
  | "Home Gym Equipment"
  | "Fitness Technology"
  | "Functional Training"
  | "Group Fitness"
  | "Weight Management"
  | "Flexibility & Mobility"
  | "Aquatic Fitness";

export type TProduct = {
  name: string;
  price: number;
  description: string;
  images: string[];
  category: TCategory;
  stock: number;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
