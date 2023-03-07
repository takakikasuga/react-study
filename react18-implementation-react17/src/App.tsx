import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('App is Rendering for react17');
  useEffect(() => {
    console.log('App is Rendering for react17 in useEffect');
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
