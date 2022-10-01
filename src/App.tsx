import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProfilePictures from "./containers/profilepictures";
import NavBar from "./containers/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilepictures" element={<ProfilePictures />} />
      </Routes>
    </div>
  );
}

export default App;
