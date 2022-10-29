import "react-medium-image-zoom/dist/styles.css";

interface imageProps {
  imageName: string;
  changeImage: (arg0: string) => void;
  currentImage: string;
  index: number;
  setIndex: (arg0: number) => void;
}

function ProfilePicSelector({
  imageName,
  changeImage,
  currentImage,
  setIndex,
  index
}: imageProps) {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  return (
    <div className={"profilePicSelector"}>
      <img
        onClick={() => {changeImage(imageName); setIndex(index)}}
        className={
          currentImage == imageName
            ? "activeSelector profilePicSelectorImage"
            : "profilePicSelectorImage"
        }
        src={imageName}
        alt="Test"
      />
    </div>
  );
}

export default ProfilePicSelector;
