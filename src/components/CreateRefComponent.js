import React from "react";

class CreateRefComponent extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.blur();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    ref={this.textInput}/>
                <br/>
                <input
                    type="button"
                    value="Focus the text input"
                    className="btn btn-primary"
                    onClick={this.focusTextInput}/>
            </div>
        );
    }
}

export default CreateRefComponent;