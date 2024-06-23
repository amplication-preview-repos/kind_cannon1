import { Build } from "../build/Build";
import { JsonValue } from "type-fest";

export type User = {
  builds?: Array<Build>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
