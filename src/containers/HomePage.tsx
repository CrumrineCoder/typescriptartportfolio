import "../App.scss";
import { Link } from "react-router-dom";
const TammyConfused = require("../assets/profilepics/tammy.png");

function HomePage() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="HomePage">
       <Link to="/profilepictures"><img src={TammyConfused} className="homePageLinkImage"/></Link>
    </div>
  );
}

export default HomePage;
