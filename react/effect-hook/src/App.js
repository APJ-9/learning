import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervelHookCounter from './components/IntervelHookCounter';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <IntervelHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
    </div>
  );
}

export default App;
