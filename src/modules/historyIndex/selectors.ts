import { RootState } from "../../types";

export const historyIndexSelector = (state: RootState) => {
  return state.historyIndex;
};
