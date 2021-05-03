import { RootState } from "../../types";

export const strokesSelector = (state: RootState) => {
  return state.strokes;
};

export const strokesLengthSelector = (state: RootState) => {
  return state.strokes.length;
};
