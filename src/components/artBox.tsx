
 interface imageProps {
    imageName: string;
    artTitle: string;
    artDescription: string; 
 }

function ArtBox({imageName, artTitle, artDescription}: imageProps) {
    // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
    // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
    return (
      <div className="App">
        <img src ={(imageName)} alt="Test" />
        <h1>{artTitle} </h1>
        <p>{artDescription}</p>
      </div>
    );
  }

export default ArtBox;
