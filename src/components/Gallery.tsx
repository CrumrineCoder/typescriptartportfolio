import Zoom from "react-medium-image-zoom";

const TammyPixelArt = require("../assets/tammypixelart.png");
const Malacruz = require("../assets/malacruz.jpeg");

const Chriskua = require("../assets/Carcaso/chriskua.jpeg");
const Dandelion = require("../assets/Carcaso/dandelion.jpeg");
const Jinxie = require("../assets/Carcaso/jinxie.jpeg");
const Kris = require("../assets/Carcaso/kris.jpeg");
const Peter = require("../assets/Carcaso/peter.jpeg");
const Rat = require("../assets/Carcaso/ratjacket.jpeg");
const Asa = require("../assets/Carcaso/spidermaidasa.jpeg");
const Vampire = require("../assets/Carcaso/vampireturtleneck.jpeg");

function Gallery() {
  return (
    <div className="Gallery">
      <div className="GalleryImagesContainer">
        <Zoom>
          <img className="GalleryImage" src={TammyPixelArt}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Malacruz}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Chriskua}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Dandelion}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Jinxie}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Kris}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Peter}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Rat}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Asa}></img>
        </Zoom>
        <Zoom>
          <img className="GalleryImage" src={Vampire}></img>
        </Zoom>
      </div>
    </div>
  );
}

export default Gallery;
