import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { beginStroke, updateStroke, endStroke } from "./actions";
import { clearCanvas, drawStroke } from "./canvasUtils";
import { ColorPanel } from "./ColorPanel";
import { EditPanel } from "./EditPanel";
import {
  currentStrokeSelector,
  historyIndexSelector,
  strokesSelector,
} from "./selectors";

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const currentStroke = useSelector(currentStrokeSelector);
  const strokes = useSelector(strokesSelector);
  const historyIndex = useSelector(historyIndexSelector);
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

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };

  React.useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) return;

    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    });
  }, [currentStroke]);

  React.useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!context || !canvas) return;

    requestAnimationFrame(() => {
      clearCanvas(canvas);

      strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
        drawStroke(context, stroke.points, stroke.color);
      });
    });
  }, []);

  return (
    <>
      <EditPanel />
      <ColorPanel />
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
      />
    </>
  );
}

export default App;
