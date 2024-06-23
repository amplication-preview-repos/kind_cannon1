import { BuildPartUpdateManyWithoutBuildsInput } from "./BuildPartUpdateManyWithoutBuildsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuildUpdateInput = {
  buildParts?: BuildPartUpdateManyWithoutBuildsInput;
  name?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
