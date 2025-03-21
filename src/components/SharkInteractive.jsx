import React, { useRef } from "react";
import SharkSVG from "../assets/sharkSVG.svg";

import { SHARK_PATHS, LOAD_ANIMATION_SETTINGS } from "../config/sharkConfig";

import useSharkAnimationControl from "../hooks/useSharkAnimationControl";
import useSharkAnimations from "../hooks/useSharkAnimation";
// import useSpiralAnimations from "../hooks/useSpiralAnimation";
import useKeyboardControls from "../hooks/useKeyboardControls";
import useEyeAnimation from "../hooks/useEyeAnimation";
import useHandAnimation from "../hooks/useHandAnimation";
import useAnime from "../hooks/loadAnimalSVGAnim";

const SharkInteractive = ({ isToggleOn }) => {
  const svgRef = useRef(null);
  const animationRef = useSharkAnimations(isToggleOn, svgRef);
  // const { spirals, generateSpiral, clearAllSpirals } = useSpiralAnimations(
  //   isToggleOn,
  //   svgRef
  // );
  const { handPath, toggleHand } = useHandAnimation(
    isToggleOn,
    // generateSpiral,
    SHARK_PATHS
  );
  useEyeAnimation(isToggleOn, svgRef, SHARK_PATHS);

  useKeyboardControls(isToggleOn, toggleHand);
  useAnime(LOAD_ANIMATION_SETTINGS(["#shark-svg path", "#flipper"]));
  useSharkAnimationControl(
    isToggleOn,
    animationRef,
    // generateSpiral,
    // clearAllSpirals
  );

  return (
    <>
      <div
        onClick={!isToggleOn ? toggleHand : undefined}
        className={`flex justify-center items-center w-screen h-screen`}
      >
        <svg ref={svgRef} viewBox="0 0 1920 917" width="100%" height="100%">
          <SharkSVG />

          <path
            d={handPath}
            stroke="var(--light-blue-colour)"
            fill="var(--background-colour)"
            strokeWidth="8"
            strokeLinecap="round"
            id="flipper"
          />
          {/* {spirals.map((spiral) => (
            <g
              key={spiral.id}
              id={`spiral-${spiral.id}`}
              style={{
                transform: `translate(${spiral.x}px, ${spiral.y}px) rotate(${
                  spiral.rotation
                }deg) scale(${spiral.size / 20})`,
              }}
            >
              <path
                d={SHARK_PATHS.SPIRAL}
                stroke="white"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))} */}
        </svg>
      </div>
    </>
  );
};

export default SharkInteractive;
