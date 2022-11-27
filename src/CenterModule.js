
import { useState } from 'react';
import MainDisplay from './centerMod/MainDisplay.js';
const CenterModule = (props) => {
    // default state 
    const [header, setHeader] = useState("default text center module");

    return(
        <div className="d-flex w-100 justify-content-center align-items-center p-1">
            <MainDisplay setHeader={setHeader} header={header}/>
        </div>
    )
}

export default CenterModule;