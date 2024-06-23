import { BuildCreateNestedManyWithoutUsersInput } from "./BuildCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  builds?: BuildCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
