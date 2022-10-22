import './App.css';
import data from './dataBase.json'
import { useState } from 'react';
import New from './New';
import ButtonList from './ButtonList';
const DB = data.header
function App() {
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
    setIsShow(true)
  }
  const handleClose =() => {
    setIsShow(false)
  }

console.log(DB)
  return (
    <div className="App">
      <button onClick={handleShow}>Click Me</button>
      {isShow&& <New onClick={handleClose}/>}

      <div className="list">
      {
        DB.map((list,idx)=>
        <div key={idx}>
            {/* <button key={idx} >{list.title}</button> */}
            <ButtonList value={list.title} />
            
          </div>
        )
      }
      </div>
    </div>

  );
}

export default App;
