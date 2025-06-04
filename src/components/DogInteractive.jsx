import React, { useRef } from "react";
import DogSVG from "../assets/dogSVG.svg";
import { DOG_PATHS, LOAD_ANIMATION_SETTINGS } from "../config/dogConfig";

// import underConstruction from "../assets/underConstruction.svg";
import useAnime from "../hooks/loadAnimalSVGAnim";
import useSharkAnimations from "../hooks/useSharkAnimation";
import useHandAnimation from "../hooks/useHandAnimation";
import useKeyboardControls from "../hooks/useKeyboardControls";
import useSharkAnimationControl from "../hooks/useSharkAnimationControl";

const DogInteractive = ({ isToggleOn }) => {
  const svgRef = useRef(null);
  const animationRef = useSharkAnimations(isToggleOn, svgRef);

  const { leftPawPath, rightPawPath, toggleHand } = useHandAnimation(
    isToggleOn,
    DOG_PATHS,
    "dog"
  );

  useKeyboardControls(isToggleOn, toggleHand);

  useAnime(LOAD_ANIMATION_SETTINGS(["#dog-svg path", "ellipse", "#left-paw", "#right-paw"]));

  useSharkAnimationControl(
    isToggleOn,
    animationRef,
  );


  console.log(leftPawPath);
  console.log(rightPawPath);

  return (
    <>
      <div 
        onClick={!isToggleOn ? toggleHand : undefined}
        className={`flex justify-center items-center w-screen h-screen`}>
        <svg
          ref = {svgRef} viewBox = "0 500 3000 4000"
          width="100%"
          height="100%"
        >
          <DogSVG/>
          <path 
          d = {leftPawPath}
          stroke = "#5a4832"
          fill = "none"
          strokeWidth="20"
          strokeLinecap="round"
          id = "left-paw"/>

          <path 
          d = {rightPawPath}
          stroke = "#5a4832"
          fill = "none"
          strokeWidth="20"
          strokeLinecap="round"
          id = "right-paw"/>
        </svg>
      </div>
    </>
  );
};

export default DogInteractive;
