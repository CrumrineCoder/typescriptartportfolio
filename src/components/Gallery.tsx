import Zoom from "react-medium-image-zoom";

import TammyPixelArt from "../assets/tammypixelart.png";
import Malacruz from "../assets/TayroRegion.png";

import Nunn from "../assets/Nunn.png";
import Banner from "../assets/twitter banner.png";

import Bee from "../assets/beelady.png";

import wilsonPokemon from "../assets/Wilsonrealfuck.png";
import Travers from "../assets/traversart.png";


import Chriskua from "../assets/Carcaso/ChrisKuaFinalCarcaso.png";
import Dandelion from "../assets/Carcaso/NilesCarcasoFinal.png";
import Jinxie from "../assets/Carcaso/Jinxxie2.png";
import Kris from "../assets/Carcaso/ChrisJamesCarcaso.png";
import Peter from "../assets/Carcaso/PeterInCarcaso.png";
import Rat from "../assets/Carcaso/rat w jacket redone.png";
import Asa from "../assets/Carcaso/asacarcaso.png";
import Vampire from "../assets/Carcaso/vampire w turtleneck.png";

import RatLamp from "../assets/Carcaso/Ajax of Carcaso.png";
import Balthasar from "../assets/Carcaso/Balthasar.png";
import Bard from "../assets/Carcaso/BardCarcaso.png";
import Deus from "../assets/Carcaso/Deus.png";
import Ellysa from "../assets/Carcaso/Ellysa.png";
import Fighter from "../assets/Carcaso/FighterCarcaso.png";
import Leo from "../assets/Carcaso/LeoCarcaso.png";
import Fenmes from "../assets/Carcaso/Fenmes.png";
import Vitriol from "../assets/Carcaso/Vitriol.png";
import gonegirl from "../assets/Carcaso/gonegirl.png";

interface GalleryItemProps {
  text: string;
  imageSrc: string;
}

function GalleryItem(props: GalleryItemProps) {
  return (
    <Zoom>
      <div className="GalleryItem">
        <span className="GalleryText">{props.text}</span>
        <img className="GalleryImage" src={props.imageSrc} alt={props.imageSrc} />
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
    { text: "Divine Order", imageSrc: Fighter },
    { text: "Leo", imageSrc: Leo },
    { text: "Saint Fenmes", imageSrc: Fenmes },
    { text: "Gone Girl", imageSrc: gonegirl},
    { text: "Cleansing", imageSrc: Vitriol },
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
