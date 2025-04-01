import React from "react";

const DragUpInfo = ({hasDraggedMenu}) => {
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
                    !hasDraggedMenu ? 'translate-y-full opacity-0' : '-translate-y-0 opacity-100'
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
                        <h1 className={`text-6xl font-(family-name:--header-font)`}>Credits</h1>
                        <div className="description">
                            <p>This is a form of externalisation.</p>
                        </div>
                        <div className="Inspiration">
                            <p className={`font-(family-name:--text-font)`}> 
                                This was inspired by <a href = "https://hostrider.com" className={`underline`}>Coding Cat</a>. &nbsp;
                                <a href = "https://uiverse.io/cuzpq/gentle-goat-72" className={`underline`}>Toggle button</a> from by cuzpq.  
                            </p>
                        </div>
                </div>
            </div>
        </>
    );
} 

export default DragUpInfo;