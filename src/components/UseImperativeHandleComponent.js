import React, {useRef} from "react";
import FancyInput from "./FancyInput";

function UseImperativeHandleComponent() {
    const inputEl = useRef();
    return <FancyInput ref={inputEl}/>;
}

export default UseImperativeHandleComponent;