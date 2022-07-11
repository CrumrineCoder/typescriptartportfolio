import React from 'react';
import './App.css';

 const test = require('./assets/tammy.png')

function CarcasoPortfolioBox(imageName: string) {
  return (
    <img src ={imageName} alt="Test" />
  );
}

function App() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  return (
    <div className="App">
         <img src={test} />
    </div>
  );
}

export default App;
