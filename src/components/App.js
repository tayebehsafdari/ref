import './App.scss';

import {Container} from 'react-bootstrap';
import CreateRefComponent from "./CreateRefComponent";
import ForwardRefComponent from "./ForwardRefComponent";
import ForwardRefComponentHOC from "./ForwardRefComponentHOC";
import UseRefComponent from "./UseRefComponent";

function App() {
    return (
        <div className="App my-5">
            <Container>
                <CreateRefComponent/>
                <br/>
                <ForwardRefComponent/>
                <br/>
                <br/>
                <ForwardRefComponentHOC/>
                <br/>
                <br/>
                <UseRefComponent/>
            </Container>
        </div>
    );
}

export default App;
