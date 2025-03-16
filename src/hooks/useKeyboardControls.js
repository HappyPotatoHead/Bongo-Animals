import { useEffect, useCallback } from "react";

const useKeyboardControls = (isToggleOn, toggleHand) => {
  const memoizedToggleHand = useCallback(toggleHand, []);

  useEffect(() => {
    if (isToggleOn) return;

    const handleKeyPress = () => toggleHand();
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isToggleOn, memoizedToggleHand]);
};

export default useKeyboardControls;
