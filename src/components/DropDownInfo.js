import { useState, useEffect } from "react";
import React from "react";

const DropDownInfo = ({hasDroppedMenu}) => {
    return (
        <>
            <div className = {
                `absolute
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
                    hasDroppedMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`
            }>
                <div id = "dropdown-wrapper"
                className = {
                    `
                    flex 
                    flex-col
                    items-start
                    h-full
                    p-8
                    lg:p-16
                    space-y-44
                    
                    [&_*]:transition-all
                    [&_*]:ease-in-out
                    lg:space-y-20
                    xl:space-y-20
                    `}>
                        <h1 className={`text-6xl font-(family-name:--header-font)`}>The Great Blue Shork</h1>
                </div>
            </div>
        </>
    );
} 

export default DropDownInfo