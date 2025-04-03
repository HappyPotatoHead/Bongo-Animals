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
                overflow-y-scroll
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
              <div className="description">
                {content.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-1xl font-(family-name:--text-font)"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <h2 className="text-2xl lg:text-4xl font-(family-name:--text-font)">
                How about a little backstory?
              </h2>

              <div className="backstory space-y-3 lg:w-1/4">
                {content.sob_story.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-1xl font-(family-name:--text-font)"
                  >
                    {typeof paragraph === "string" ? paragraph : paragraph}
                  </p>
                ))}
                {content.link_file && (
                  <p>
                    <a
                      href={content.link_file}
                      target="_blank"
                      className={`
                        no-underline 
                        hover:cursor-default
                        font-(family-name:--text-font)
                        `}
                    >
                      {content.link_text}
                    </a>
                  </p>
                )}
              </div>

              <div className={`image_link space-y-5 pb-5`}>
                {content.link_image && (
                  <p>
                    <a
                      href={content.link_image}
                      target="_blank"
                      className={`
                        underline 
                        hover:no-underline 
                        `}
                    >
                      {content.image_text}
                    </a>
                  </p>
                )}
              </div>
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
