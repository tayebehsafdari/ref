import React from "react";
import OtherFancyButton from "./OtherFancyButton";

function forwardRefComponentHOC(Component) {

    class ForwardRefComponentHOC extends React.Component {
        render() {
            console.log(this);
            const {forwardedRef, ...rest} = this.props;
            return <Component ref={forwardedRef} {...rest}/>;
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log("old props: ", prevProps);
            console.log("new props: ", this.props);
        }
    }

    function forwardRef(props, ref) {
        return <ForwardRefComponentHOC forwardedRef={ref} {...props}/>;
    }

    const name = Component.displayName || Component.name;
    forwardRef.displayName = `forwardRefComponentHOC(${name})`;

    // return ForwardRefComponentHOC;
    return React.forwardRef(forwardRef);
}

export default forwardRefComponentHOC(OtherFancyButton);