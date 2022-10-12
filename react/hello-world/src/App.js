import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProp from './components/GreetProp';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome name="Akhil" shortHand="APJ" /> */}
      {/* <Hello /> */}
      {/* <GreetProp name="Akhil"> */}
      {/* <button>Hit Me</button> */}
      {/* </GreetProp> */}
      {/* <GreetProp name="APJ" /> */}

      {/* <Message></Message> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
