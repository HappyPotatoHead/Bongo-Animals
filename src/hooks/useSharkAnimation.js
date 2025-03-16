import { useEffect, useRef } from "react";

const useSharkAnimations = (isToggleOn, svgRef) => {
    const animationRef = useRef({ spirals: [], toggleCooldown: false });
  
    useEffect(() => {
      if (!svgRef.current) return;

    }, [isToggleOn, svgRef]);
  
    return animationRef;
  };
  
export default useSharkAnimations;