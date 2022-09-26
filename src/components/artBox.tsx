import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface imageProps {
  imageName: string;
  artTitle: string;
  artDescription: string;
  style: string;
  date: string;
}

function ArtBox({
  imageName,
  artTitle,
  artDescription,
  style,
  date,
}: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={"artBox " + style}>
      <Zoom>
        <img
          className={"portfolioProfilePictureImage"}
          src={imageName}
          alt="Test"
        />
      </Zoom>
      <div className="portfolioProfilePictureTextbox">
        <div className="portfolioProfilePictureTextboxHeader">
          <span className="portfolioProfilePictureTitle">{artTitle} </span>
          <span className="portfolioProfilePictureDate">{date} </span>
        </div>
        <p className="portfolioProfilePictureDescription">{artDescription}</p>
      </div>
    </div>
  );
}

export default ArtBox;
