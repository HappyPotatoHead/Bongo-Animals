import React from "react";
import { SHORK_CONTENT, DOG_CONTENT } from "../config/dropDownContent";

const DropDownInfo = ({
  hasDroppedMenu,
  flags,
  //  isShark, isDog
}) => {
  const isShark = flags[0];
  const isDog = flags[1];

  const content = isShark ? SHORK_CONTENT : isDog ? DOG_CONTENT : null;
  
  return (
    <>
      <div
        className={`absolute
                z-40
                bg-[#6473ad]
                h-screen
                w-screen
                top-0
                left-0
                p-6 
                transition-all
                duration-300 
                ease-in-out
                ${
                  hasDroppedMenu
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
      >
        <div
          id="dropdown-wrapper"
          className={`
                    flex 
                    flex-col
                    items-start
                    h-full
                    p-8
                    lg:p-16
                    space-y-10
                    
                    [&_*]:transition-all
                    [&_*]:ease-in-out
                    lg:space-y-10
                    xl:space-y-10
                    `}
        >
          {content ? (
            <>
              <h1 className="text-3xl lg:text-6xl font-(family-name:--header-font)">
                {content.title}
              </h1>
              <p className="text-1xl font-(family-name:--text-font)">
                {content.description}
              </p>
              {content.link && (
                <p>
                  <a href={content.link} target="_blank" className="underline">
                    {content.link_text}
                  </a>
                </p>
              )}
            </>
          ) : (
            <p className="text-2xl text-white">
              Select an option to see more details.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDownInfo;
