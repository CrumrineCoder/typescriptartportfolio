interface imageProps {
  imageName: string;
  artTitle: string;
  artDescription: string;
  style: string;
  date: string; 
}

function ArtBox({ imageName, artTitle, artDescription, style, date }: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={style}>
      <img className={"portfolioProfilePictureImage"} src={imageName} alt="Test" />
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
