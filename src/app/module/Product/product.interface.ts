export type TCategory =
  | "Cardio"
  | "StrengthTraining"
  | "Yoga&Pilates"
  | "Accessories"
  | "Outdoor&Adventure"
  | "Recovery&Wellness"
  | "Apparel"
  | "Nutrition&Supplements"
  | "HomeGymEquipment"
  | "FitnessTechnology"
  | "FunctionalTraining"
  | "GroupFitness"
  | "WeightManagement"
  | "Flexibility&Mobility"
  | "AquaticFitness";

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
