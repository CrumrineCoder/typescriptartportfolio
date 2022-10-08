import "react-medium-image-zoom/dist/styles.css";

interface imageProps {
  imageName: string;
  changeImage: (arg0: string) => void;
}

function ProfilePicSelector({ imageName, changeImage }: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={"profilePicSelector"}>
      <img onClick={() => changeImage(imageName)} className={"profilePicSelectorImage"} src={imageName} alt="Test" />
    </div>
  );
}

export default ProfilePicSelector;
