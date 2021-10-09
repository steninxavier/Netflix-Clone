
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import{originals,action, comedy, horror, romantic} from "./urls";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url ={originals} title='Popular on Netflix'/>
      <RowPost url={action} title='Action Movies'  isSmall />
      <RowPost url={comedy} title='Comedy Movies'  isSmall />
      <RowPost url={horror} title='Horror Movies'  isSmall />
      <RowPost url ={romantic} title='Romantic Movies'/>
    </div>
  );
}

export default App;
