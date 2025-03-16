import { useEffect, useRef } from "react";

const useEyeAnimation = (isToggleOn, svgRef, PATHS) => {
  const rightBlinkRef = useRef(null);
  const leftBlinkRef = useRef(null);


  // const [rightEyePath, setRightEyePath] = useState(PATHS.EYES.RIGHT.OPEN);
  // const [leftEyePath, setLeftEyePath] = useState(PATHS.EYES.LEFT.OPEN);

  const getRandomBlinkInterval = () => Math.floor(Math.random() * 4000) + 2000;

  useEffect(() => {
    if (!svgRef.current) return;

    const rightEye = svgRef.current.querySelector(".right-open");
    const leftEye = svgRef.current.querySelector(".left-open");

    if (!rightEye || !leftEye) return;

    
    // ✅ Set eyes closed when toggle is OFF
    if (!isToggleOn) {
      rightEye.setAttribute("d", PATHS.EYES.RIGHT.CLOSED);
      leftEye.setAttribute("d", PATHS.EYES.LEFT.CLOSED);
      return; // Stop execution if toggle is OFF
    }

    // if (!isToggleOn) {
    //   setRightEyePath(PATHS.EYES.RIGHT.CLOSED);
    //   setLeftEyePath(PATHS.EYES.LEFT.CLOSED);
    //   return;
    // }
    
    rightEye.setAttribute("d", PATHS.EYES.RIGHT.OPEN);
    leftEye.setAttribute("d", PATHS.EYES.LEFT.OPEN);

    const blinkRightEye = () => {
      rightEye.setAttribute("d", PATHS.EYES.RIGHT.CLOSED);
      setTimeout(() => {
        rightEye.setAttribute("d", PATHS.EYES.RIGHT.OPEN);
      }, 200);
    };

    const blinkLeftEye = () => {
      leftEye.setAttribute("d", PATHS.EYES.LEFT.CLOSED);
      setTimeout(() => {
        leftEye.setAttribute("d", PATHS.EYES.LEFT.OPEN);
      }, 200);
    };

    const startRightBlinking = () => {
      rightBlinkRef.current = setTimeout(() => {
        blinkRightEye();
        startRightBlinking();
      }, getRandomBlinkInterval());
    };

    const startLeftBlinking = () => {
      leftBlinkRef.current = setTimeout(() => {
        blinkLeftEye();
        startLeftBlinking();
      }, getRandomBlinkInterval());
    };

    startRightBlinking();
    startLeftBlinking();

    return () => {
      clearTimeout(rightBlinkRef.current);
      clearTimeout(leftBlinkRef.current);
    };
  }, [isToggleOn, svgRef]);

  return { }; // ✅ Now returning values so they can be used in the SVG
};

export default useEyeAnimation;

