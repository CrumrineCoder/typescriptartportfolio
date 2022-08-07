
 interface imageProps {
    imageName: string;
    artTitle: string;
    artDescription: string; 
    style: string; 
 }

function ArtBox({imageName, artTitle, artDescription, style}: imageProps) {
    // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
    // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
    return (
      <div className="App">
        <img className={style + "Image"} src ={(imageName)} alt="Test" />
        <h1>{artTitle} </h1>
        <p>{artDescription}</p>
      </div>
    );
  }

export default ArtBox;
