import React from 'react';
import './App.css';
import ArtBox from "./components/artBox"

const test = require('./assets/tammy.png')
const test2 = require('./assets/spidermaidasa.jpeg')
function App() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="App">
       <ArtBox imageName = {test}></ArtBox>
       <ArtBox imageName = {test2}></ArtBox>
    </div>
  );
}

export default App;
