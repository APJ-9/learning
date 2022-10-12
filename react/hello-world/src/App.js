import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProp from './components/GreetProp';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './FragmentDemo';
import Tables from './components/Tables';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo /> */}
      <Tables />
      {/* <LifeCycleA/> */}
      {/* <Form /> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Greet /> */}
      {/* <Welcome name="Akhil" shortHand="APJ" /> */}
      {/* <Hello /> */}
      {/* <GreetProp name="Akhil" /> */}
      {/* <button>Hit Me</button> */}
      {/* </GreetProp> */}
      {/* <GreetProp name="APJ" /> */}

      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
    </div >
  );
}

export default App;
