import React from "react";

class OtherFancyButton extends React.Component {
    focus() {
        console.log("OtherFancyButton: ", this);
    }

    render() {
        console.log("OtherFancyButton: ", this);
        return <button className="btn btn-success">Click me!</button>;
    }
}

export default OtherFancyButton;