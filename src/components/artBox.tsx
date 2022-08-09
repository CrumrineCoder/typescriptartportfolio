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
        <h1>{artTitle} </h1>
        <p>{artDescription}</p>
      </div>
    </div>
  );
}

export default ArtBox;
