import { useState, useRef, useEffect } from "react";

const useHandAnimation = (
  isToggleOn,
  // generateSpiral,
  PATHS,
  type = "shark"
) => {
  const getRandomInterval = () => Math.floor(Math.random() * 1000);

  const [sharkHandPath, setHandPath] = useState(
    type === "shark" ? PATHS.HAND.LOWERED : null
  );

  const [leftPawPath, setLeftPaw] = useState(
    type === "dog" ? PATHS.LEFT_HAND.LOWERED : null
  );
  const [rightPawPath, setRightPaw] = useState(
    type === "dog" ? PATHS.RIGHT_HAND.LOWERED : null
  );

  const toggleCooldown = useRef(false);
  const handIntervalRef = useRef(null);

  const toggleHand = () => {
    if (toggleCooldown.current) return;
    toggleCooldown.current = true;

    if (type === "shark") {
      setHandPath(PATHS.HAND.RAISED);
      setTimeout(() => setHandPath(PATHS.HAND.LOWERED), 150);
    } else {
      setLeftPaw(PATHS.LEFT_HAND.RAISED);
      setRightPaw(PATHS.RIGHT_HAND.RAISED);
      setTimeout(() => setLeftPaw(PATHS.LEFT_HAND.LOWERED), 150);
      setTimeout(() => setRightPaw(PATHS.RIGHT_HAND.LOWERED), 150);
    }

    // if (!isToggleOn) {
    //   for (let i = 0; i < 3; i++) setTimeout(() => generateSpiral(), i * 200);
    // }

    setTimeout(() => {
      toggleCooldown.current = false;
    }, 200);
  };

  useEffect(() => {
    const cleanupIntervals = () => {
      if (handIntervalRef.current) {
        if (type === "shark" && typeof handIntervalRef.current === "number")
          clearInterval(handIntervalRef.current);
        else if (
          type === "dog" &&
          typeof handIntervalRef.current === "object"
        ) {
          if (handIntervalRef.current.left)
            clearTimeout(handIntervalRef.current.left);
          if (handIntervalRef.current.right)
            clearTimeout(handIntervalRef.current.right);
        }
      }
    };

    if (!isToggleOn) {
      cleanupIntervals();
      if (type === "shark") setHandPath(PATHS.HAND.LOWERED);
      else {
        setLeftPaw(PATHS.LEFT_HAND.LOWERED);
        setRightPaw(PATHS.RIGHT_HAND.LOWERED);
      }
      return;
    }

    cleanupIntervals();

    if (type === "shark") {
      handIntervalRef.current = setInterval(() => {
        setHandPath((prevPath) =>
          prevPath === PATHS.HAND.RAISED
            ? PATHS.HAND.LOWERED
            : PATHS.HAND.RAISED
        );
      }, 150);
    } else {
      const animateLeftPaw = () => {
        setLeftPaw(PATHS.LEFT_HAND.RAISED);
        setTimeout(() => {
          setLeftPaw(PATHS.LEFT_HAND.LOWERED);
          handIntervalRef.current.left = setTimeout(
            animateLeftPaw,
            getRandomInterval()
          );
        }, 150);
      };

      const animateRightPaw = () => {
        setRightPaw(PATHS.RIGHT_HAND.RAISED);
        setTimeout(() => {
          setRightPaw(PATHS.RIGHT_HAND.LOWERED);
          handIntervalRef.current.right = setTimeout(
            animateRightPaw,
            getRandomInterval()
          );
        }, 150);
      };

      handIntervalRef.current = {
        left: setTimeout(animateLeftPaw, getRandomInterval()),
        right: setTimeout(animateRightPaw, getRandomInterval()),
      };
      // handIntervalRef.current = {
      //   left: setInterval(() => {
      //     setLeftPaw((prevPath) =>
      //       prevPath === PATHS.LEFT_HAND.RAISED ? PATHS.LEFT_HAND.LOWERED : PATHS.LEFT_HAND.RAISED
      //   );
      //     // clearInterval(handIntervalRef.current.left);
      //     // handIntervalRef.current.left = setInterval(() => {}, getRandomInterval());

      //   }, getRandomInterval()),

      //   right: setInterval(() => {
      //     setRightPaw((prevPath) =>
      //       prevPath === PATHS.RIGHT_HAND.RAISED ? PATHS.RIGHT_HAND.LOWERED : PATHS.RIGHT_HAND.RAISED
      //     );
      //     // clearInterval(handIntervalRef.current.right);
      //     // handIntervalRef.current.right = setInterval(() => {}, getRandomInterval());
      //   }, getRandomInterval())
      // };
    }

    return cleanupIntervals;
  }, [isToggleOn]);

  return type === "shark"
    ? { sharkHandPath, toggleHand }
    : { leftPawPath, rightPawPath, toggleHand };
};

export default useHandAnimation;
