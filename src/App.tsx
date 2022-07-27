import React from 'react';
import './App.css';
import ArtBox from "./components/artBox"

const test = require('./assets/tammy.png')

 interface CarcasoPortfolioBoxProps {
    imageName: string;
 }

function CarcasoPortfolioBox({imageName}: CarcasoPortfolioBoxProps) {
  /*  
      <img src ={require(imageName)} alt="Test" />
  */
  return (
    <div>
      test
      <ArtBox></ArtBox>
      <h1>{imageName}</h1>
      <img src ={(imageName)} alt="Test" />
    </div>
  );
}

function App() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="App">
      test
      <CarcasoPortfolioBox imageName = {test} />
    </div>
  );
}

export default App;
