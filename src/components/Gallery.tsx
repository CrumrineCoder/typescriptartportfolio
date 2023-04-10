import Zoom from "react-medium-image-zoom";

import TammyPixelArt from "../assets/tammypixelart.png";
import Malacruz from "../assets/malacruz.jpeg";

import Nunn from "../assets/Nunn.png";
import Banner from "../assets/twitter banner.png";

import Bee from "../assets/beelady.png";
import wilsonPokemon from "../assets/wilson.png";
import Travers from "../assets/travers.jpeg";

import Chriskua from "../assets/Carcaso/chriskua.jpeg";
import Dandelion from "../assets/Carcaso/dandelion.jpeg";
import Jinxie from "../assets/Carcaso/jinxie.jpeg";
import Kris from "../assets/Carcaso/kris.jpeg";
import Peter from "../assets/Carcaso/peter.jpeg";
import Rat from "../assets/Carcaso/ratjacket.jpeg";
import Asa from "../assets/Carcaso/spidermaidasa.jpeg";
import Vampire from "../assets/Carcaso/vampireturtleneck.jpeg";

import RatLamp from "../assets/Carcaso/Ajax of Carcaso.png";
import Balthasar from "../assets/Carcaso/Balthasar.png";
import Bard from "../assets/Carcaso/BardCarcaso.png";
import Deus from "../assets/Carcaso/Deus.png";
import Ellysa from "../assets/Carcaso/Ellysa.png";
import Fighter from "../assets/Carcaso/FighterCarcaso.png";
import Leo from "../assets/Carcaso/LeoCarcaso.png";
import Fenmes from "../assets/Carcaso/Fenmes.png";
import Vitriol from "../assets/Carcaso/Vitriol.png";

interface GalleryItemProps {
  text: string;
  imageSrc: string;
}

function GalleryItem(props: GalleryItemProps) {
  return (
    <Zoom>
      <div className="GalleryItem">
        <span className="GalleryText">{props.text}</span>
        <img className="GalleryImage" src={props.imageSrc} />
      </div>
    </Zoom>
  );
}

function Gallery() {
  const items: GalleryItemProps[] = [
    { text: "Nunn but Evangelion", imageSrc: Nunn },
    { text: "Tami with my favourite Yu-Gi-Oh archetypes", imageSrc: Banner },
    { text: "Tami in style of Fire Emblem", imageSrc: TammyPixelArt },
    { text: "City life in friend's pokemon world", imageSrc: Malacruz },
    { text: "Kua in Carcaso", imageSrc: Chriskua },
    { text: "Steel Dandelion", imageSrc: Dandelion },
    { text: "Jinxxie in Carcaso", imageSrc: Jinxie },
    { text: "Chris in Carcaso", imageSrc: Kris },
    { text: "Peter in Carcaso", imageSrc: Peter },
    { text: "We Must Dissent", imageSrc: Rat },
    { text: "Asa in Carcaso", imageSrc: Asa },
    { text: "Vampire Turtleneck", imageSrc: Vampire },
    { text: "Ajax", imageSrc: RatLamp },
    { text: "Balthasar", imageSrc: Balthasar },
    { text: "Bard", imageSrc: Bard },
    { text: "Deus", imageSrc: Deus },
    { text: "Ellysa", imageSrc: Ellysa },
    { text: "Fighter", imageSrc: Fighter },
    { text: "Leo", imageSrc: Leo },
    { text: "Fenmes", imageSrc: Fenmes },
    { text: "Vitriol", imageSrc: Vitriol },
    { text: "Bee", imageSrc: Bee },
  ];
  return (
    <div className="Gallery">
        <div className="GalleryImagesContainer">
      {items.map((item, index) => (
        <GalleryItem key={index} text={item.text} imageSrc={item.imageSrc} />
      ))}
    </div>
    </div>
  );
}

export default Gallery;
