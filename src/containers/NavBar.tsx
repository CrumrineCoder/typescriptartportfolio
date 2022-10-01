import "../App.scss";
import { Link } from "react-router-dom";
function NavBar() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="HomePage">
        <Link to="/">Home</Link>
       <Link to="/profilepictures">Profile Pictures</Link>
    </div>
  );
}

export default NavBar;
