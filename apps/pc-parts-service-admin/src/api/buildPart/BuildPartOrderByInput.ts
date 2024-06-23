import { SortOrder } from "../../util/SortOrder";

export type BuildPartOrderByInput = {
  buildId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
