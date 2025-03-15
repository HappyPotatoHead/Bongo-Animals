import { useState } from 'react';
import SharkInteractive from './components/SharkInteractive';
import AutomateAnimation from './components/AutomateAnimation';
import InfoButton from './components/InfoButton';
import DropDownInfo from './components/DropDownInfo';
import DragUpInfo from './components/DragUpInfo';
import CreditsButton from './components/CreditsButton';
import './App.css';

const App = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [hasDroppedMenu, setDropMenu] = useState(false);
    const [hasDraggedMenu, setDragMenu] = useState(false);

    return (
        <>
            <InfoButton setDropMenu = {setDropMenu} hasDroppedMenu = {hasDroppedMenu} hasDraggedMenu = {hasDraggedMenu}/>
            <CreditsButton setDragMenu = {setDragMenu} hasDraggedMenu={hasDraggedMenu} hasDroppedMenu={hasDroppedMenu}/>

            <AutomateAnimation setIsToggleOn={setIsToggleOn} />   
            <SharkInteractive isToggleOn = {isToggleOn}/>
            
            <DropDownInfo hasDroppedMenu={hasDroppedMenu}/>
            <DragUpInfo hasDraggedMenu={hasDraggedMenu}/>
        </>
    )
}
export default App
