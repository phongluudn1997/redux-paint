import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { beginStroke, updateStroke, endStroke } from "./actions";
import { currentStrokeSelector } from "./selectors";

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const currentStroke = useSelector(currentStrokeSelector);
  const dispatch = useDispatch();

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke(offsetX, offsetY));
  };

  const isDrawing = !!currentStroke.points.length;

  const endDrawing = () => {
    if (!isDrawing) return;
    dispatch(endStroke());
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      onMouseMove={draw}
    />
  );
}

export default App;
