import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

function App() {
    const [name, setName] = useState('John');

    return (
        <div className="App">
            <h1>React Debugging Example</h1>
            <Greeting name={name} />
            <Counter />
            <button onClick={() => setName('Jane')}>Change Name</button>
        </div>
    );
}

export default App;
