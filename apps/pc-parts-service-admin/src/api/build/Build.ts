import { BuildPart } from "../buildPart/BuildPart";
import { User } from "../user/User";

export type Build = {
  buildParts?: Array<BuildPart>;
  createdAt: Date;
  id: string;
  name: string | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
