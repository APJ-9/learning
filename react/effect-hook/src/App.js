import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervelHookCounter from './components/IntervelHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Akhil'}>
        <ChannelContext.Provider value={'APJ'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <DataFetching /> */}
      {/* <IntervelHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
    </div>
  );
}

export default App;
