import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProfilePictures from "./containers/profilepictures";
import NavBar from "./containers/NavBar";
import CommissionInfo from "./containers/CommissionInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProfilePictures />} />
        <Route path="/commissions" element={<CommissionInfo />} />
      </Routes>
    </div>
  );
}

export default App;

/*
 <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilepictures" element={<ProfilePictures />} />
      </Routes>
      */