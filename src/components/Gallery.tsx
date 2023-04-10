import Zoom from "react-medium-image-zoom";

const TammyPixelArt = require("../assets/tammypixelart.png");
const Malacruz = require("../assets/malacruz.jpeg");

const Nunn = require("../assets/Nunn.png");
const Banner = require("../assets/twitter banner.png");

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
            <span className="GalleryText">Nunn but Evangelion</span>
            <img className="GalleryImage" src={Nunn} />
          </div>
        </Zoom>
        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Tami with my favourite Yu-Gi-Oh archetypes</span>
            <img className="GalleryImage" src={Banner} />
          </div>
        </Zoom>
        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Tami in style of Fire Emblem</span>
            <img className="GalleryImage" src={TammyPixelArt} />
          </div>
        </Zoom>
        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">
              City life in friend's pokemon world
            </span>
            <img className="GalleryImage" src={Malacruz} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Kua in Carcaso</span>
            <img className="GalleryImage" src={Chriskua} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Steel Dandelion</span>
            <img className="GalleryImage" src={Dandelion} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Jinxxie in Carcaso</span>
            <img className="GalleryImage" src={Jinxie} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Chris in Carcaso</span>
            <img className="GalleryImage" src={Kris} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Peter in Carcaso</span>
            <img className="GalleryImage" src={Peter} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">We Must Dissent</span>
            <img className="GalleryImage" src={Rat} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Asa in Carcaso</span>
            <img className="GalleryImage" src={Asa} />
          </div>
        </Zoom>

        <Zoom>
          <div className="GalleryItem">
            <span className="GalleryText">Vampire Turtleneck</span>
            <img className="GalleryImage" src={Vampire} />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Gallery;
