import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <p>
          <Link to="/about" className="App-Link">
            Go to About
          </Link>
        </p>
      </header>
    </div>
  );
}

export default App;
