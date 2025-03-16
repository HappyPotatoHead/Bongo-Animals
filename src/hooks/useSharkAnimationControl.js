import { useEffect } from "react";

const clearAllAnimations = (animationRef) => {
  Object.values(animationRef.current).forEach((timeout) => {
    if (timeout) {
      if (timeout._id) clearInterval(timeout);
      else clearTimeout(timeout);
    }
  });

  animationRef.current.spirals.forEach((anim) => anim.pause());
  animationRef.current.spirals = [];
};

const useSharkAnimationControl = (isToggleOn, animationRef, generateSpiral, clearAllSpirals) => {
  useEffect(() => {
    if (!isToggleOn){
      clearAllAnimations(animationRef);
      clearAllSpirals();
      return;
    }

    const spiralInterval = setInterval(() => {
      generateSpiral();
    }, 400);

    animationRef.current.spiralGenerator = spiralInterval;

    return () => {
      clearAllAnimations(animationRef);
      clearInterval(spiralInterval);
    };
    
  }, [isToggleOn, generateSpiral, clearAllSpirals]);
};

export default useSharkAnimationControl;
