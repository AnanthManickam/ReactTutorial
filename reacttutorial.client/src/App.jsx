import './App.css';

import { sampleKey, employeeID as empID } from '../src/scripts/util.jsx';
import * as util from '../src/scripts/util.jsx';


function App() {

    const contents = <div>
        <p>{sampleKey}</p>
        <p>{util.default}</p>
        <p>{util.sampleKey}</p>
        <p>{util.testKey}</p>
        <p>{empID}</p>
    </div>;

    return (
        contents
    );
}

export default App;