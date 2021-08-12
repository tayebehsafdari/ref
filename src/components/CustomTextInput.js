import React from "react";

function CustomTextInput(props) {
    return <input type="text" className="form-control" ref={props.inputRef}/>;
}

export default CustomTextInput;