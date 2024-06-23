import { Build as TBuild } from "../api/build/Build";

export const BUILD_TITLE_FIELD = "name";

export const BuildTitle = (record: TBuild): string => {
  return record.name?.toString() || String(record.id);
};
