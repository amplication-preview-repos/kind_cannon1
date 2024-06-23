import { BuildWhereUniqueInput } from "../build/BuildWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type BuildPartCreateInput = {
  build?: BuildWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
