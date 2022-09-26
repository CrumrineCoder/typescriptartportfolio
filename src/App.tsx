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
        artDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."}
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={TammyConfused}
        artTitle={"Testing"}
        artDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."}
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={TammyConfused}
        artTitle={"Testing"}
        artDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."}
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
    </div>
  );
}

export default App;
