import "../App.scss";
import { Link } from "react-router-dom";
function NavBar() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className="NavBar">
      <Link to="/" className="leftSideHeader">
        Taming
      </Link>
      <div className="rightSideHeader">
        <Link to="/commissions">Commissions</Link>
      </div>
    </div>
  );
}

export default NavBar;
