import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
import { Parent } from './components/ParentChild/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      <GrandParent />
    </div>
  );
}

export default App;
