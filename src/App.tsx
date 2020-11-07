import React from 'react';
import './App.scss';
import TimeToCrack from './time-to-crack/TimeToCrack';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Time-To-Crack</h1>
                <TimeToCrack />
            </header>
        </div>
    );
}

export default App;
