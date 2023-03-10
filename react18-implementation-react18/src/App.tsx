import React, { Suspense, useEffect } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

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
      <hr />
      <ErrorBoundary fallback={<p>全体エラーです！！</p>}>
        <Suspense fallback={<p>全体ローディング中です！！</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
