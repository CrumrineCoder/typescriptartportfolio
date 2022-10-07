import "react-medium-image-zoom/dist/styles.css";

interface imageProps {
  imageName: string;
  changeImage: () => void;
}

function ProfilePicSelector({ imageName, changeImage }: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={"profilePicSelector"}>
      <img onClick={changeImage} className={"profilePicSelectorImage"} src={imageName} alt="Test" />
    </div>
  );
}

export default ProfilePicSelector;
