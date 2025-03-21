import { useState, useRef, useEffect, useCallback } from "react";
import anime from "animejs";
import { SPIRAL_EMISSION_POINTS } from "../config/particleConfig";

const useSpiralAnimations = (isToggleOn, svgRef) => {
  const [spirals, setSpirals] = useState([]);
  const spiralIdRef = useRef(0);
  const animationRef = useRef({ spirals: [], spiralGenerator: null});

  const clearAllSpirals = useCallback(() => {
    if (animationRef.current.spirals.length === 0) return;
    animationRef.current.spirals.forEach((anim) => anim.pause());
    animationRef.current.spirals = [];
    setSpirals([]);
  }, []);

  const generateSpiral = useCallback(() => {
    const emissionPoint =
      SPIRAL_EMISSION_POINTS[Math.floor(Math.random() * SPIRAL_EMISSION_POINTS.length)];

    const id = spiralIdRef.current++;
    const newSpiral = {
      id,
      x: emissionPoint.x + (Math.random() * 30 - 15),
      y: emissionPoint.y + (Math.random() * 30 - 15),
      size: 0.1,
      opacity: 0.1,
      rotation: Math.random() * 360,
    };

    setSpirals((prev) => [...prev, newSpiral]);

    setTimeout(() => {
      const element = svgRef.current.querySelector(`#spiral-${id}`);
      if (!element) return;

      const animation = anime({
        targets: element,
        translateY: [-10, -200],
        scale: [1, 0.2],
        opacity: [1, 0],
        easing: "easeOutQuad",
        duration: 3000,
        complete: () => {
          setSpirals((prev) => prev.filter((spiral) => spiral.id !== id));
        },
      });

      animationRef.current.spirals.push(animation);
    }, 1000);
  },[svgRef]);

  useEffect(() => {
    if (!isToggleOn) {
      clearAllSpirals();
      return;
    }

    if (animationRef.current.spiralGenerator)
      clearInterval(animationRef.current.spiralGenerator);

    const interval = setInterval(() => generateSpiral(), 4000);
    animationRef.current.spiralGenerator = interval;

    return () => clearInterval(interval);
  }, [isToggleOn, generateSpiral]);

  return { spirals, generateSpiral, clearAllSpirals};
};

export default useSpiralAnimations;
