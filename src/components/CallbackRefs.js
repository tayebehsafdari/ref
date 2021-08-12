import React from "react";
import CustomTextInput from "./CustomTextInput";

class CallbackRefs extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        };
        this.focusTextInput = () => {
            this.textInput && this.textInput.focus();
        }
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    ref={this.setTextInputRef}/>
                <br/>
                <input
                    type="button"
                    value="Focus the text input"
                    className="btn btn-warning"
                    onClick={this.focusTextInput}/>
                <br/>
                <br/>
                <CustomTextInput inputRef={el => this.inputElement = el}/>
            </div>
        );
    }
}

export default CallbackRefs;