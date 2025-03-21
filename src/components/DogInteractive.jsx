import React from "react";
// import underConstruction from "../assets/underConstruction.svg";
import useAnime from "../hooks/loadAnimalSVGAnim";
import { LOAD_ANIMATION_SETTINGS } from "../config/sharkConfig";

const DogInteractive = () => {
  useAnime(LOAD_ANIMATION_SETTINGS(["#under-construction path"]));
  return (
    <>
      <div className={`flex justify-center items-center w-screen h-screen`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="orange"
          id="under-construction"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      </div>
    </>
  );
};

export default DogInteractive;
