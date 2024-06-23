import { BuildWhereUniqueInput } from "../build/BuildWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BuildPartWhereInput = {
  build?: BuildWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
