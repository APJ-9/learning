import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
    </div>
  );
}

export default App;
