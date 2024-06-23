import { BuildPartWhereInput } from "./BuildPartWhereInput";
import { BuildPartOrderByInput } from "./BuildPartOrderByInput";

export type BuildPartFindManyArgs = {
  where?: BuildPartWhereInput;
  orderBy?: Array<BuildPartOrderByInput>;
  skip?: number;
  take?: number;
};
