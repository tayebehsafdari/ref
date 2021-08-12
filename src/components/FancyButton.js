import React from "react";

export const FancyButton = React.forwardRef((props, ref) => (
    <button type="button" className="btn btn-secondary" ref={ref}>{props.children}</button>
));