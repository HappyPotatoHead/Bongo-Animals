import { useState, useRef, useEffect } from "react";

const useHandAnimation = (isToggleOn, generateSpiral, PATHS) => {
  const [handPath, setHandPath] = useState(PATHS.HAND.LOWERED);
  const toggleCooldown = useRef(false);
  const handIntervalRef = useRef(null);

  const toggleHand = () => {
    if (toggleCooldown.current) return;
    toggleCooldown.current = true;

    setHandPath(PATHS.HAND.RAISED);
    setTimeout(() => setHandPath(PATHS.HAND.LOWERED), 150);

    if (!isToggleOn) {
      for (let i = 0; i < 3; i++) setTimeout(() => generateSpiral(), i * 200);
    }

    setTimeout(() => {
      toggleCooldown.current = false;
    }, 200);
  };

  useEffect(() => {
    if (!isToggleOn) {
      setHandPath(PATHS.HAND.LOWERED); 
      return; 
    }

    handIntervalRef.current = setInterval(() => {
      setHandPath((prevPath) =>
        prevPath === PATHS.HAND.RAISED ? PATHS.HAND.LOWERED : PATHS.HAND.RAISED
      );
    }, 150);

    return () => clearInterval(handIntervalRef.current);
  }, [isToggleOn]);

  return { handPath, toggleHand };
};

export default useHandAnimation;
