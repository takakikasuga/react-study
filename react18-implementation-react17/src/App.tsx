import React, { useEffect } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';

function App() {
  console.log('App is Rendering for react17');
  useEffect(() => {
    console.log('App is Rendering for react17 in useEffect');
  }, []);
  return (
    <div className='App'>
      <AutoBatchEventHandler />
      <AutoBatchOther />
    </div>
  );
}

export default App;
