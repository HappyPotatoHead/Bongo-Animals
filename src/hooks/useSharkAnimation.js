import { useEffect, useRef } from "react";

// This was suppose to be something, but I forgo

const useSharkAnimations = (isToggleOn, svgRef) => {
    const animationRef = useRef({ 
      // spirals: [], 
      toggleCooldown: false 
    });
  
    useEffect(() => {
      if (!svgRef.current) return;

    }, [isToggleOn, svgRef]);
  
    return animationRef;
  };
  
export default useSharkAnimations;