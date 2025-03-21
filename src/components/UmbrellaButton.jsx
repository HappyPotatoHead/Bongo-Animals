import React from "react";

const UmbrellaButton = ({
  setSlideMenu,
  hasSlideMenu,
  hasDroppedMenu,
  hasDraggedMenu,
}) => {
  const handleClicked = () => {
    setSlideMenu(!hasSlideMenu);
  };

  return (
    <>
      <div
        className={`
            px-8 
            py-4 
            top-0
            left-0 
            absolute 
            ${(hasDroppedMenu || hasDraggedMenu) ? "z-40" : "z-50"}
            hover:rotate-360
            transition-all
            duration-1000
            ease-in-out
            `}
        onClick={handleClicked}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            stroke-white
            
            `}
        >
          <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
          <path d="M12 12v8a2 2 0 0 0 4 0" />
          <path d="M12 2v1" />
        </svg>
      </div>
    </>
  );
};

export default UmbrellaButton;
