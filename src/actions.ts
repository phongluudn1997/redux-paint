import { Point } from "./types";

// Action type type
export const BEGIN_STROKE = "BEGIN_STROKE";
export const UPDATE_STROKE = "UPDATE_STROKE";
export const END_STROKE = "END_STROKE";
export const SET_STROKE_COLOR = "SET_STROKE_COLOR";

// Action type
export type Action =
  | {
      type: typeof BEGIN_STROKE;
      payload: Point;
    }
  | {
      type: typeof UPDATE_STROKE;
      payload: Point;
    }
  | {
      type: typeof END_STROKE;
    }
  | {
      type: typeof SET_STROKE_COLOR;
      payload: string;
    };

// Action creators
export const beginStroke = (x: number, y: number): Action => ({
  type: BEGIN_STROKE,
  payload: { x, y },
});

export const updateStroke = (x: number, y: number): Action => ({
  type: UPDATE_STROKE,
  payload: { x, y },
});

export const endStroke = (): Action => ({
  type: END_STROKE,
});

export const setStrokeColor = (color: string): Action => ({
  type: SET_STROKE_COLOR,
  payload: color,
});
