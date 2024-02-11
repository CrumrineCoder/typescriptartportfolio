import Zoom from "react-medium-image-zoom";
import YoutubeEmbed from "./YoutubeEmbed";
import YoutubeLogo from "../assets/Youtube_logo.png";

import Ko from "../assets/Ko.gif";
import Chess from "../assets/Ecumenical.png";
import Tolpa_Subway from "../assets/tolpa subway.gif";
import Yuyu from "../assets/Yuyu birthday drawing actually.png";
import irvan_doctor from "../assets/irvan doctor.gif";
import Nyla from "../assets/Nyla.gif";
import Ravv from "../assets/ravv.png";
import IrvanRedesign from "../assets/Irvan Dion.png";
import DayndalChosen from "../assets/Dayndal Wanderer.png";
import Ivy from "../assets/Ivy.png";
import Von from "../assets/Von_God.png";
import Karro from "../assets/Karro.gif";
import Blievois from "../assets/Blievois.gif";
import SilfaFull from "../assets/Silfa FF OC.png";

import PaulTokenStamp from "../assets/Paul Token.png";

import Isaakios from "../assets/Iskayois.png";

import Tolpacore from "../assets/Landscape Tolpa.gif";

import Boann from "../assets/Boann.gif";
import Paul from "../assets/Paul Finished.png";

import Robyn from "../assets/Robyn.png";
import Gloreya from "../assets/Gloreya.png";

import Qale from "../assets/Qale_Final.png";
import Fishermen from "../assets/fishermen.png";

import Maidcore from "../assets/Maidcore.png";

import Zemeradi from "../assets/zemeradi twilight.png";
import BaldursGate from "../assets/baldur's gate.png";

import TammyPixelArt from "../assets/tammypixelart.png";
import Malacruz from "../assets/TayroRegion.png";

import SamJones from "../assets/sam jones.png";
import Elroscian from "../assets/Elroscian.png";

import Nunn from "../assets/Nunn.png";
import Banner from "../assets/twitter banner.png";

import Bee from "../assets/beelady.png";

import BluesClues from "../assets/Columbo x Blues Clues.gif";

import wilsonPokemon from "../assets/Wilsonrealfuck.png";
import Travers from "../assets/traversart.png";

import carbuncle from "../assets/carbuncle.png";
import cherryBomb from "../assets/cherrybomb.png";
import chocobo from "../assets/chocobo.png";
import moogle from "../assets/moogle.png";
import pokeball from "../assets/pokeball.png";
import trophy from "../assets/trophy.png";

import beeGirl from "../assets/beegirlpngtuber.gif";

import Chriskua from "../assets/Carcaso/ChrisKuaFinalCarcaso.png";
import Dandelion from "../assets/Carcaso/NilesCarcasoFinal.png";
import Jinxie from "../assets/Carcaso/Jinxxie2.png";
import Kris from "../assets/Carcaso/ChrisJamesCarcaso.png";
import Peter from "../assets/Carcaso/PeterInCarcaso.png";
import Rat from "../assets/Carcaso/ratjacket.jpeg";
import Asa from "../assets/Carcaso/asacarcaso.png";
import Vampire from "../assets/Carcaso/vampire w turtleneck.png";

import combination from "../assets/Combination june 13 2023.png";
import twilightWizard from "../assets/twilight wizard.png";
import Starfinder1 from "../assets/Starfinder Sketch.png";

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
import React from "react";

interface GalleryItemProps {
  text: string;
  imageSrc?: string;
  youtubeLink?: string;
  linkText?: string;
  tags?: Array<String>;
}

function GalleryItem(props: GalleryItemProps) {
  //${props.text}
  return (
    <span
      className={`GalleryItemContainer`}
      id={props.text.replace(/\s+/g, "")}
    >
      <Zoom>
        <div className="GalleryItem">
          <span className="GalleryText">{props.text}</span>
          {props.imageSrc && (
            <img
              className="GalleryImage"
              src={props.imageSrc}
              alt={props.imageSrc}
            />
          )}
          {props.youtubeLink && (!props.linkText || !props.imageSrc) && (
            <YoutubeEmbed
              className="GalleryVideo"
              embedId={props.youtubeLink}
            />
          )}
          {props.youtubeLink && props.imageSrc && (
            <a
              href={encodeURI(props.youtubeLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="GalleryLink"
            >
              <img src={YoutubeLogo}></img>
              {props.linkText}
            </a>
          )}
        </div>
      </Zoom>
    </span>
  );
}
function Gallery() {
  const items: GalleryItemProps[] = [
    {
      text: "Pixel art Ko",
      imageSrc: Ko,
      youtubeLink:
        "https://www.youtube.com/watch?v=-QMUnTS6tlk&ab_channel=Taming",
      linkText: "Speedpaint",
      tags: ["Twilight", "Pixel Art", "Animated"],
    },
    { text: "Four Knights Game", imageSrc: Chess, tags: ["Carcaso"] },
    {
      text: "Graffiti of a forgotten heartbreak that never happened",
      youtubeLink: "CzWqI3g08TI",
      tags: ["Animated"],
    },
    { text: "Yuyu in Carcaso", imageSrc: Yuyu, tags: ["Carcaso"] },
    { text: "Irvan Animation", imageSrc: irvan_doctor, tags: ["Animated"] },
    {
      text: "Pixel art Nyla",
      imageSrc: Nyla,
      youtubeLink:
        "https://www.youtube.com/watch?v=Rrm3AzPYgPQ&ab_channel=Taming",
      linkText: "Speedpaint",
      tags: ["Twilight", "Pixel Art", "Animated"],
    },
    {
      text: "Pixel art Ravv",
      imageSrc: Ravv,
      youtubeLink: "https://www.youtube.com/watch?v=esEzYmNSybc",
      linkText: "Speedpaint",
      tags: ["Twilight", "Pixel Art"],
    },
    { text: "Irvan Redesign", imageSrc: IrvanRedesign },
    { text: "Dayndal's Chosen", imageSrc: DayndalChosen, tags: ["Twilight"] },
    { text: "Ivy & Veda Commission", imageSrc: Ivy },
    {
      text: "Pixel art Dayndal",
      imageSrc: Von,
      tags: ["Twilight", "Pixel Art"],
    },
    {
      text: "Pixel art Karro",
      imageSrc: Karro,
      youtubeLink: "https://www.youtube.com/watch?v=T5NSXRj7wWU",
      linkText: "Speedpaint",
      tags: ["Twilight", "Pixel Art", "Animated"],
    },
    {
      text: "Pixel art Blievois",
      imageSrc: Blievois,
      tags: ["Twilight", "Pixel Art", "Animated"],
    },
    { text: "Silfa FF14 Full Commission", imageSrc: SilfaFull, tags: ["FF14"] },
    { text: "Paul Token", imageSrc: PaulTokenStamp },
    { text: "EU4 Fanart", imageSrc: Isaakios },
    {
      text: "Tolpacore",
      // imageSrc: Tolpacore,
      youtubeLink: "aNY-jQEBajk",
      linkText: "Animated Music Video",
      tags: ["Animated"],
    },
    {
      text: "Pixel art Boann",
      imageSrc: Boann,
      tags: ["Twilight", "Pixel Art", "Animated"],
    },
    { text: "Paul Servius Maximus V the greatest Mailman", imageSrc: Paul },
    { text: "Uncropped Robyn", imageSrc: Robyn },
    {
      text: "Pixel art Gloreya",
      imageSrc: Gloreya,
      tags: ["Twilight", "Pixel Art"],
    },
    { text: "Pixel art Qale", imageSrc: Qale, tags: ["Twilight", "Pixel Art"] },
    { text: "Memento Reelers", imageSrc: Fishermen, tags: ["Twilight"] },
    { text: "Cyberpunk Red Maid", imageSrc: Maidcore },
    { text: "Twilight Zemeradi", imageSrc: Zemeradi, tags: ["Twilight"] },
    { text: "Baldur's Gate Paladin", imageSrc: BaldursGate },
    { text: "Carcasoan Vitiligo", imageSrc: Elroscian, tags: ["Carcaso"] },
    { text: "Sam Jones", imageSrc: SamJones },
    { text: "Sayuu's PNGtuber", imageSrc: beeGirl, tags: ["Animated"] },
    { text: "Hatching practice", imageSrc: combination },
    { text: "Irvan the Shirren Moth", imageSrc: Starfinder1 },
    { text: "Twilight Wizards", imageSrc: twilightWizard, tags: ["Twilight"] },
    { text: "Nunn but Evangelion", imageSrc: Nunn, tags: ["FF14"] },
    {
      text: "Columbo Meets Blue's Clues",
      imageSrc: BluesClues,
      tags: ["Animated"],
    },
    {
      text: "Tami in style of Fire Emblem",
      imageSrc: TammyPixelArt,
      tags: ["FF14", "Pixel Art"],
    },
    { text: "City life in friend's pokemon world", imageSrc: Malacruz },
    {
      text: "Tami with my favourite Yu-Gi-Oh archetypes",
      imageSrc: Banner,
      tags: ["Yugioh", "FF14"],
    },

    { text: "Kua in Carcaso", imageSrc: Chriskua, tags: ["Carcaso"] },
    { text: "Steel Dandelion", imageSrc: Dandelion, tags: ["Carcaso"] },
    { text: "Jinxxie in Carcaso", imageSrc: Jinxie, tags: ["Carcaso"] },
    { text: "Chris in Carcaso", imageSrc: Kris, tags: ["Carcaso"] },
    { text: "Peter in Carcaso", imageSrc: Peter, tags: ["Carcaso"] },
    { text: "We Must Dissent", imageSrc: Rat, tags: ["Carcaso"] },
    { text: "Asa in Carcaso", imageSrc: Asa, tags: ["Carcaso"] },
    { text: "Vampire Turtleneck", imageSrc: Vampire, tags: ["Carcaso"] },
    { text: "Ajax", imageSrc: RatLamp, tags: ["Carcaso"] },
    { text: "Balthasar", imageSrc: Balthasar, tags: ["Carcaso"] },
    { text: "Bard", imageSrc: Bard, tags: ["Carcaso"] },
    { text: "Deus", imageSrc: Deus, tags: ["Carcaso"] },
    { text: "Ellysa", imageSrc: Ellysa, tags: ["Carcaso"] },
    { text: "Divine Order", imageSrc: Fighter, tags: ["Carcaso"] },
    { text: "Leo", imageSrc: Leo, tags: ["Carcaso"] },
    { text: "Saint Fenmes", imageSrc: Fenmes, tags: ["Carcaso"] },
    { text: "Gone Girl", imageSrc: gonegirl, tags: ["Carcaso"] },
    { text: "Cleansing", imageSrc: Vitriol, tags: ["Carcaso"] },
    { text: "Lala Carbuncle Badge", imageSrc: carbuncle, tags: ["FF14"] },
    { text: "Lala Cherry Bomb Badge", imageSrc: cherryBomb, tags: ["FF14"] },
    { text: "Lala Chocobo Badge", imageSrc: chocobo, tags: ["FF14"] },
    { text: "Lala Moogle Badge", imageSrc: moogle, tags: ["FF14"] },
    { text: "Lala Pokeball", imageSrc: pokeball, tags: ["FF14"] },
    { text: "Lala Trophy", imageSrc: trophy, tags: ["FF14"] },
    { text: "Travers' WoL", imageSrc: Travers, tags: ["FF14"] },
    { text: "Wilson in Pokemon", imageSrc: wilsonPokemon },
    { text: "Bee", imageSrc: Bee, tags: ["Yugioh"] },
  ];
  const [currentTag, setCurrentTag] = React.useState("");
  function filterByTag(galleryItem: GalleryItemProps) {
    if (currentTag === "") {
      return galleryItem;
    }
    if (galleryItem.tags) {
      return galleryItem.tags.includes(currentTag);
    }
  }
  const filteredItems = items.filter(filterByTag);

  return (
    <div className="Gallery">
      <span className="GalleryButtonsContainer">
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("")}
          disabled={currentTag === ""}
        >
          All
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("Carcaso")}
          disabled={currentTag === "Carcaso"}
        >
          Carcaso
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("Twilight")}
          disabled={currentTag === "Twilight"}
        >
          Twilight of the Idols
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("FF14")}
          disabled={currentTag === "FF14"}
        >
          FF14
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("Yugioh")}
          disabled={currentTag === "Yugioh"}
        >
          Yu-Gi-Oh!
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("Animated")}
          disabled={currentTag === "Animated"}
        >
          Animated
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag("Pixel Art")}
          disabled={currentTag === "Pixel Art"}
        >
          Pixel Art
        </button>
      </span>
      <div className="GalleryImagesContainer">
        {filteredItems.map((item, index) => (
          <GalleryItem
            key={index}
            text={item.text}
            imageSrc={item.imageSrc}
            youtubeLink={item.youtubeLink}
            linkText={item.linkText}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
