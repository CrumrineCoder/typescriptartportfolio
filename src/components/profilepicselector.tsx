import "react-medium-image-zoom/dist/styles.css";

interface imageProps {
  imageName: string;
  changeImage: (arg0: string) => void;
  currentImage: string; 
}

function ProfilePicSelector({ imageName, changeImage, currentImage }: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={"profilePicSelector"}>
      <img onClick={() => changeImage(imageName)} className={(currentImage == imageName) ? "activeSelector profilePicSelectorImage" : "profilePicSelectorImage"} src={imageName} alt="Test" />
    </div>
  );
}

export default ProfilePicSelector;
