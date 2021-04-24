import React from "react";

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

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
