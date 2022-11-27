import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

export default function PaintBoard() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [painting, setPainting] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const WIDTH = '100%';
  const HEIGHT = 500;

  const drawFn = (e: React.MouseEvent) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!painting) {
      ctx?.beginPath();
      ctx?.moveTo(mouseX, mouseY);
    } else {
      ctx?.lineTo(mouseX, mouseY);
      ctx?.stroke();
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCtx(canvas.getContext('2d'));
    if (ctx) {
      ctx.beginPath();
      ctx.lineJoin = 'round';
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#000';
    }

    setCanvas(canvas);
  }, []);

  return (
    <Box
      component={'canvas'}
      sx={{ backgroundColor: '#fff', backgroundSize: 'cover' }}
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      onMouseDown={() => setPainting(true)}
      onMouseUp={() => setPainting(false)}
      onMouseMove={drawFn}
      onMouseLeave={() => setPainting(false)}
    ></Box>
  );
}
