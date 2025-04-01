import React from "react";

const SlideMenu = ({ 
    hasSlideMenu, 
    flags, 
    setFlags, 
    // isShark, isDog, setShark, setDog 
}) => {
  const handleClickedShark = () => {
    setFlags([true, false]);
  };
  const handleClickedDog = () => {
    setFlags([false, true]);
  };
  return (
    <>
      <div
        className={`
                px-8 
                py-4 
                absolute
                transition-all
                ease-in-out
                duration-1000
                lg:top-0
                top-20
                left-0 
                ${
                  hasSlideMenu
                    ? `translate-x-0 lg:translate-x-20`
                    : `-translate-x-96`
                }
                z-30
                cursor-default
                `}
      >
        <ul
          className={`
                        list-none
                        block
                        lg:flex
                        lg:space-x-3
                        space-y-3
                        `}
        >
          <li
            className={`
                                text-white
                                font-(family-name:--header-font)
                                `}
            onClick={handleClickedShark}
          >
            Blue Shark
          </li>
          <li
            className={`
                                text-white
                                font-(family-name:--header-font)`}
            onClick={handleClickedDog}
          >
            Brown Dog
          </li>
        </ul>
      </div>
    </>
  );
};

export default SlideMenu;
