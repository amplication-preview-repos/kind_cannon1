import { BuildPart as TBuildPart } from "../api/buildPart/BuildPart";

export const BUILDPART_TITLE_FIELD = "id";

export const BuildPartTitle = (record: TBuildPart): string => {
  return record.id?.toString() || String(record.id);
};
