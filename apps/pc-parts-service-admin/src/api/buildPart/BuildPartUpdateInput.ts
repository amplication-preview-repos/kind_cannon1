import { BuildWhereUniqueInput } from "../build/BuildWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type BuildPartUpdateInput = {
  build?: BuildWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
