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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PureComponent from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">

      <UserProvider value='Akhil'>
        <ComponentC />
      </UserProvider>

      {/* <CounterTwo render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)} /> */}
      {/* <CounterTwo render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)} /> */}
      {/* <HoverCounterTwo />
      <ClickCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Akhil' : 'Guest'} /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <FRParent /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComponent /> */}
      {/* <FragmentDemo /> */}
      {/* <Tables /> */}
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
