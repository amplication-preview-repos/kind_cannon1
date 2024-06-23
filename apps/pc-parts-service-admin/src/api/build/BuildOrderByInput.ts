import { SortOrder } from "../../util/SortOrder";

export type BuildOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
