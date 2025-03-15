import React from "react";

const CreditsButton = ({ setDragMenu, hasDraggedMenu, hasDroppedMenu }) => {
  const handleClicked = () => {
    setDragMenu(!hasDraggedMenu);
  };

  return (
    <>
      <div
        className={`
                px-8 
                py-4 
                bottom-0 
                right-0 
                absolute 
                ${hasDroppedMenu ? 'z-40' : 'z-50'}
                `}
        onClick={handleClicked}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          id="credits"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${hasDraggedMenu ? "stroke-black" : "stroke-white"}`}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </div>
    </>
  );
};

export default CreditsButton;
