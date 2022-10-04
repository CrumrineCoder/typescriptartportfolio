import "../App.scss";
import { Link } from "react-router-dom";
const TammyConfused = require("../assets/profilepics/tammy.png");

function HomePage() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="HomePage">
      <div className="homePageRedirectContainer">
        <img src={TammyConfused} className="homePageLinkImage" />
        <Link to="/profilepictures">
          <p>Profile Pictures</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
