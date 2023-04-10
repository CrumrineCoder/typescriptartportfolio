import "./App.scss";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProfilePictures from "./containers/profilepictures";
import NavBar from "./containers/NavBar";
import CommissionInfo from "./containers/CommissionInfo";
import ScrollToTop from "./utils/ScrollToTop";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ProfilePictures />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/commissions" element={<CommissionInfo />} />
      </Routes>
    </div>
  );
}

export default App;
//  <ScrollToTop />
/*
 <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilepictures" element={<ProfilePictures />} />
      </Routes>
      */
