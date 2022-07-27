
 interface imageProps {
    imageName: string;
 }

function ArtBox({imageName}: imageProps) {
    // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
    // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
    return (
      <div className="App">
        The art box is showing!
        <img src ={(imageName)} alt="Test" />
      </div>
    );
  }

export default ArtBox;
