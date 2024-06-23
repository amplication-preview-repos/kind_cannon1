import { BuildWhereInput } from "./BuildWhereInput";
import { BuildOrderByInput } from "./BuildOrderByInput";

export type BuildFindManyArgs = {
  where?: BuildWhereInput;
  orderBy?: Array<BuildOrderByInput>;
  skip?: number;
  take?: number;
};
