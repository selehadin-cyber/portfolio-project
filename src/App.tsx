import React from 'react';
import logo from './bitmassssp.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selehadins portfolio is coming soon
        </p>
        <p>this time with react and typescript 😃</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/selehadin-a-7bb11116b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          in the mean time visit my linkedIn page
        </a>
      </header>
    </div>
  );
}

export default App;
