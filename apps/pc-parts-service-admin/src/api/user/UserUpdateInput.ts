import { BuildUpdateManyWithoutUsersInput } from "./BuildUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  builds?: BuildUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
