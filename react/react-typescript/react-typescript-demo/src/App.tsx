import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';


function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }

  const nameList = [
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]

  const dude = ({event,id}: any)=>{
    alert(`Button Clicked ${event} ${id}`)
    return 'hello'
  }

  return (
    <div className="App">
      <Greet name="APJ" messageCount={10} isLoggedIn={true}></Greet>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Oscar>
      <Heading>Placeholder text</Heading>
      </Oscar>
      <Greet name="Akhil"  isLoggedIn={true}></Greet>
      <Greet name="Nidheesh"  isLoggedIn={true}></Greet>
      <Greet name="Akhil"  isLoggedIn={true}></Greet>
      <Greet name="Akhil"  isLoggedIn={true}></Greet>
      <Greet name="Akhil"  isLoggedIn={true}></Greet>
      <Button handleClick={dude}/>
    </div>
  );
}

export default App;
