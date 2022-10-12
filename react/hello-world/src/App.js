import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProp from './components/GreetProp';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome name="Akhil" shortHand="APJ" />
      {/* <Hello /> */}
      <GreetProp name="Akhil">
        <button>Hit Me</button>
      </GreetProp>
      <GreetProp name="APJ" />
    </div>
  );
}

export default App;
