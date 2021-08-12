import React, {useRef} from "react";

function UseRefComponent() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <>
            <input type="text" className="form-control" ref={inputEl}/>
            <br/>
            <button className="btn btn-danger" onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default UseRefComponent;