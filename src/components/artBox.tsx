interface imageProps {
  imageName: string;
  artTitle: string;
  artDescription: string;
  style: string;
}

function ArtBox({ imageName, artTitle, artDescription, style }: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={style}>
      <img className={"Image"} src={imageName} alt="Test" />
      <div className="Text">
        <p>{artTitle} </p>
        <p>{artDescription}</p>
      </div>
    </div>
  );
}

export default ArtBox;
