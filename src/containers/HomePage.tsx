import "../App.scss";
import { Link } from "react-router-dom";
function HomePage() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="HomePage">
       <Link to="/profilepictures">Profile Pictures</Link>
    </div>
  );
}

export default HomePage;
