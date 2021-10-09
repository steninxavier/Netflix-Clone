
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title='Popular on Netflix'/>
      <RowPost title='Action'  isSmall />
    </div>
  );
}

export default App;
