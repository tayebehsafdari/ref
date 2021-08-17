import React from "react";

class CreateRefComponent extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.fileInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    focusTextInput() {
        this.textInput.current.blur();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.textInput.current.value + ' Selected file - ' + this.fileInput.current.files[0].name);
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={React.version}
                    ref={this.textInput}/>
                <br/>
                <input
                    type="file"
                    className="form-control"
                    ref={this.fileInput}/>
                <br/>
                <br/>
                <input
                    type="submit"
                    value="Focus the text input"
                    className="btn btn-primary"
                    onClick={this.focusTextInput}/>
            </form>
        );
    }
}

export default CreateRefComponent;