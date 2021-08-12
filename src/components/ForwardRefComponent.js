import React from "react";
import {FancyButton} from "./FancyButton";

class ForwardRefComponent extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    render() {
        return <FancyButton ref={this.ref}>Click me!</FancyButton>;
    }
}

export default ForwardRefComponent;