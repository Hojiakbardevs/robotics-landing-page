import React, { useRef, useEffect } from 'react';

// Define the bubble type
interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  oscillationAmplitude: number;
  oscillationSpeed: number;
  offset: number;
  color: string;
}

const BubbleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bubbles: Bubble[] = [];

  // Function to generate a random neon color
  const randomNeonColor = () => {
    const colors = [
      '#1c9cbd', '#8abe56', '#f7ce46', '#4256a1', '#3c57a6', 
      '#da3832', '#ec248f', '#bd6700', '#a29e5e', '#ebf2dd', 
      '#ffffff', '#cd760c', '#efeed4', '#e3e1bf', '#69ccff'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to create a new bubble
  const createBubble = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const bubble: Bubble = {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      radius: Math.random() * 5 + 2,
      speed: Math.random() * 1 + 0.5,
      oscillationAmplitude: Math.random() * 20 + 10,
      oscillationSpeed: Math.random() * 0.02 + 0.01,
      offset: Math.random() * Math.PI * 2,
      color: randomNeonColor()
    };
    bubbles.push(bubble);
  };

  // Function to draw a single bubble
  const drawBubble = (ctx: CanvasRenderingContext2D, bubble: Bubble) => {
    ctx.beginPath();
    const oscillation = Math.sin(bubble.y * bubble.oscillationSpeed + bubble.offset) * bubble.oscillationAmplitude;
    ctx.arc(bubble.x + oscillation, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color;
    ctx.fill();
    ctx.closePath();
  };

  // Function to update the bubbles
  const updateBubbles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < bubbles.length; i++) {
      const bubble = bubbles[i];
      bubble.y -= bubble.speed;

      if (bubble.y + bubble.radius < 0) {
        // Remove bubbles that have moved off the top of the screen
        bubbles.splice(i, 1);
        i--;
      } else {
        drawBubble(ctx, bubble);
      }
    }

    // Add more bubbles each frame
    for (let i = 0; i < 5; i++) {
      createBubble();
    }

    requestAnimationFrame(updateBubbles);
  };

  // Effect to handle canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Start the animation
    updateBubbles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default BubbleAnimation;
