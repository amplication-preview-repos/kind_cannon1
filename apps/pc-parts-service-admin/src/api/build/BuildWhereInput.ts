import { BuildPartListRelationFilter } from "../buildPart/BuildPartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuildWhereInput = {
  buildParts?: BuildPartListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
