import React, {forwardRef, useImperativeHandle, useRef} from "react";

function UseRefComponent(props, ref) {
    const inputEl = useRef(null);

    useImperativeHandle(ref, () => {
        console.log("useImperativeHandle");
        return {
            focus: () => {
                inputEl.current.focus();
            }
        };
    });

    const onButtonClick = () => {
        console.log("onButtonClick");
        inputEl.current.focus();
    }

    return (
        <>
            <input type="text" className="form-control" ref={inputEl}/>
            <br/>
            <button className="btn btn-danger" onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

UseRefComponent = forwardRef(UseRefComponent);

export default UseRefComponent;