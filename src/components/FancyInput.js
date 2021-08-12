import React, {useImperativeHandle, useRef} from "react";

const FancyInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input type="text" className="form-control" ref={inputRef}/>;
});

export default FancyInput;