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
          <div className="GalleryItem">
            <img className="GalleryImage" src={TammyPixelArt} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Malacruz} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Chriskua} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Dandelion} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Jinxie} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Kris} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Peter} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Rat} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Asa} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <img className="GalleryImage" src={Vampire} />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Gallery;
