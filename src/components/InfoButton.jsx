import React from "react";

const InfoButton = ({ setDropMenu, hasDroppedMenu, hasDraggedMenu}) => {
  const handleClicked = () => {
    setDropMenu(!hasDroppedMenu);
  };

  return (
    <>
      <div
        className={`
                px-8 
                py-4 
                top-0 
                right-0 
                absolute 
                ${!hasDraggedMenu ? 'z-50' : 'z-40'}

                `}
        onClick={handleClicked}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          id="circle"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${hasDroppedMenu ? 'stroke-black' : 'stroke-white'}`}
          />
        </svg>
      </div>
    </>
  );
};

export default InfoButton;
