import { BuildPartCreateNestedManyWithoutProductsInput } from "./BuildPartCreateNestedManyWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductCreateInput = {
  buildParts?: BuildPartCreateNestedManyWithoutProductsInput;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  price?: number | null;
};
