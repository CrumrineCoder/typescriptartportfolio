import React from "react";
import "./App.scss";
import ArtBox from "./components/artBox";

const TammyConfused = require("./assets/tammy.png");
const AsheSaris = require("./assets/ashesaris.jpeg");

function App() {
  return (
    <div className="App">
      <ArtBox
        imageName={TammyConfused}
        artTitle={"Testing"}
        artDescription={"Here's the description!"}
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
    </div>
  );
}

export default App;
