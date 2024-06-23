import { Build } from "../build/Build";
import { Product } from "../product/Product";

export type BuildPart = {
  build?: Build | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
