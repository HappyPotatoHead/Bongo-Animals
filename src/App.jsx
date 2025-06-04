import { useState, useEffect } from "react";
import SharkInteractive from "./components/SharkInteractive";
import DogInteractive from "./components/DogInteractive";
import AutomateAnimation from "./components/AutomateAnimation";
import InfoButton from "./components/InfoButton";
import DropDownInfo from "./components/DropDownInfo";
import DragUpInfo from "./components/DragUpInfo";
import CreditsButton from "./components/CreditsButton";
import UmbrellaButton from "./components/UmbrellaButton";
import SlideMenu from "./components/SlideMenu";

import "./App.css";

const App = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [hasDroppedMenu, setDropMenu] = useState(false);
    const [hasDraggedMenu, setDragMenu] = useState(false);
    const [hasSlideMenu, setSlideMenu] = useState(false);
    const [isShark, setShark] = useState(true);
    const [isDog, setDog] = useState(false);
    const flags = [isShark, isDog];
    const setFlags = (newFlags) => {
        setShark(newFlags[0]);
        setDog(newFlags[1]);
    };
    useEffect(() => {
        document.body.style.backgroundColor = isDog 
            ? "var(--lighter-background-colour)" 
            : "var(--background-colour)";
    }, [isDog]);

    return (
        <>
            <UmbrellaButton
            setSlideMenu={setSlideMenu}
            hasSlideMenu={hasSlideMenu}
            hasDroppedMenu={hasDroppedMenu}
            hasDraggedMenu={hasDraggedMenu}/>

            <InfoButton
            setDropMenu={setDropMenu}
            hasDroppedMenu={hasDroppedMenu}
            hasDraggedMenu={hasDraggedMenu}
            />
            <CreditsButton
            setDragMenu={setDragMenu}
            hasDraggedMenu={hasDraggedMenu}
            hasDroppedMenu={hasDroppedMenu}
            />

            <SlideMenu hasSlideMenu={hasSlideMenu} flags = {flags} setFlags = {setFlags} />
            <AutomateAnimation setIsToggleOn={setIsToggleOn} />

            {isShark && <SharkInteractive isToggleOn={isToggleOn} />}
            {isDog && <DogInteractive isToggleOn={isToggleOn} />}
            {/* <SharkInteractive isToggleOn={isToggleOn} /> */}

            <DropDownInfo hasDroppedMenu={hasDroppedMenu} flags = {flags} />
            <DragUpInfo hasDraggedMenu={hasDraggedMenu} />

            <object
                className="easter-egg"
                style={{ display: 'none' }}
                data="bracelet.svg" 
                type="image/svg+xml"
            >
            </object>
        </>
    );
};
export default App;
