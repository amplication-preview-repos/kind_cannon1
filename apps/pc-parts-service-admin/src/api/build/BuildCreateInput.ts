import { BuildPartCreateNestedManyWithoutBuildsInput } from "./BuildPartCreateNestedManyWithoutBuildsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuildCreateInput = {
  buildParts?: BuildPartCreateNestedManyWithoutBuildsInput;
  name?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
