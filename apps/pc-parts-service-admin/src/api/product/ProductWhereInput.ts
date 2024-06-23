import { BuildPartListRelationFilter } from "../buildPart/BuildPartListRelationFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  buildParts?: BuildPartListRelationFilter;
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
