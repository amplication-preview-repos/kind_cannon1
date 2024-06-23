import { BuildPartUpdateManyWithoutProductsInput } from "./BuildPartUpdateManyWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductUpdateInput = {
  buildParts?: BuildPartUpdateManyWithoutProductsInput;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  price?: number | null;
};
