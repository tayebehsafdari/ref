import './App.scss';

import {Container} from 'react-bootstrap';
import CreateRefComponent from "./CreateRefComponent";
import ForwardRefComponent from "./ForwardRefComponent";
import ForwardRefComponentHOC from "./ForwardRefComponentHOC";
import UseRefComponent from "./UseRefComponent";
import UseImperativeHandleComponent from "./UseImperativeHandleComponent";
import CallbackRefs from "./CallbackRefs";

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
                <br/>
                <br/>
                <UseImperativeHandleComponent/>
                <br/>
                <br/>
                <CallbackRefs/>
            </Container>
        </div>
    );
}

export default App;
