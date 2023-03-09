import React, { useEffect } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';

function App() {
  console.log('App is Rendering for react18');
  useEffect(() => {
    console.log('App is Rendering for react18 in useEffect');
  }, []);
  return (
    <div className='App'>
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <Transition />
    </div>
  );
}

export default App;
