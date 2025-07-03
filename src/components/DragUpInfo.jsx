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
                            <p className={`font-(family-name:--text-font)`}>This is a form of externalisation.</p>
                        </div>
                        <div className="Inspiration">
                            <ul className={'font-(family-name:--text-font)'}>
                                <li>Inspired by <a href="https://hostrider.com" className="underline">Coding Cat</a></li>
                                <li>Toggle button from <a href="https://uiverse.io/cuzpq/gentle-goat-72" className="underline">cuzpq</a></li>
                                <li>Icons from <a href="https://lucide.dev/" className="underline">Lucide.dev</a></li>
                                <li>SVGs drawn with <a href="https://inkscape.org/" className="underline">Inkscape</a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    );
} 

export default DragUpInfo;