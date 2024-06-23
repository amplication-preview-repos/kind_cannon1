import { BuildPart } from "../buildPart/BuildPart";
import { Category } from "../category/Category";

export type Product = {
  buildParts?: Array<BuildPart>;
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
