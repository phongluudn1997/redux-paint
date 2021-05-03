import * as React from "react";
import { useDispatch } from "react-redux";
import { undo, redo } from "./actions";

export const EditPanel = () => {
  const dispatch = useDispatch();
  return (
    <div className="window edit">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button onClick={() => dispatch(undo())} className="button redo">
            Undo
          </button>
          <button onClick={() => dispatch(redo())} className="button undo">
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};
