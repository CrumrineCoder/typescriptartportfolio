import React from 'react';
import './App.css';
import ArtBox from "./components/artBox"

const test = require('./assets/tammy.png')

function App() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="App">
       <ArtBox imageName = {test}></ArtBox>
    </div>
  );
}

export default App;
