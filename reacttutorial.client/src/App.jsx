import './App.css';

import { sampleKey, employeeID } from '../src/scripts/util.jsx';
import * as util from '../src/scripts/util.jsx';


function App() {
    
    return (
        <div>
            <p>{sampleKey}</p>
            <p>{util.default}</p>
            <p>{util.sampleKey}</p>
            <p>{util.testKey}</p>
            <p>{employeeID}</p>
        </div>
    );
}

export default App;