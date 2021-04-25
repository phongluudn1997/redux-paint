import { RootState } from "./types";

export const currentStrokeSelector = (state: RootState) => {
  return state.currentStroke;
};
