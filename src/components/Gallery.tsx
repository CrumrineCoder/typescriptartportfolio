import Zoom from "react-medium-image-zoom";
import { lazy } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import YoutubeLogo from "../assets/Youtube_logo.png";

import yuyuWatch from "../assets/Yuyu_Watch_Final.png";

import Lucy from "../assets/lucille s.png";
import arcis from "../assets/arcisx.png";
import softGoth from "../assets/soft goth beach.png";
import anatomyPractice from "../assets/anatomy practice march 6.png";
import styleStudy from "../assets/sutyd march 7 .png";

import nidalee from "../assets/nidalee.png";
import rizzler from "../assets/rizzler.png";
import ChrisKuaLeague from "../assets/chris kua.png";
import IrvanTarot from "../assets/irvan.png";
import NeonWhite from "../assets/neon white vmeets ss13.png";
import Sable from "../assets/sab.png";
import Damnatio from "../assets/damnatio.png";
import Album from "../assets/Album.png";
import Overlay from "../assets/Overlay.png";

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

let tag_pixelart = "Pixel Art";
let tag_carcaso = "Carcaso";
let tag_twilight = "Twilight";
let tag_ff14 = "FF14";
let tag_yugioh = "Yugioh";
let tag_animated = "Animated";

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
      text: "Kingdom Hearts Watch Commission",
      imageSrc: yuyuWatch,
      tags: [tag_ff14],
    },
    {
      text: "Tolpa Returns",
      imageSrc: Album,
      youtubeLink:
        "https://www.youtube.com/watch?v=KGWw76t6qY8&",
      linkText: "Speedpaint",
      tags: [tag_pixelart],
    },
    {
      text: "Spotify Stream Overlay",
      imageSrc: Overlay,
      youtubeLink:
        "https://www.youtube.com/watch?v=KGWw76t6qY8&",
      linkText: "Speedpaint",
      tags: [tag_pixelart],
    },
    {
      text: "Damnatio Memoriae",
      imageSrc: Damnatio,
      tags: [tag_twilight],
    },
    {
      text: "Sable",
      imageSrc: Sable,
      tags: [],
    },
    {
      text: "Neon White",
      imageSrc: NeonWhite,
      tags: [],
    },
    {
      text: "Irvan Tarot",
      imageSrc: IrvanTarot,
      tags: [],
    },
    {
      text: "Chris Kua Appreciation",
      imageSrc: ChrisKuaLeague,
      tags: ["League"],
    },
    {
      text: "POV you're Rizzler's Arizona Tea",
      imageSrc: rizzler,
      tags: [],
    },
    {
      text: "Nidalee Pro Golfing",
      imageSrc: nidalee,
      tags: ["League"],
    },
    {
      text: "Lucille sketch",
      imageSrc: Lucy,
      tags: [tag_ff14],
    },
    {
      text: "Style Study",
      imageSrc: styleStudy,
      tags: ["Study"],
    },
    {
      text: "Anatomy Practice",
      imageSrc: anatomyPractice,
      tags: ["Study"],
    },
    {
      text: "Soft Goth anatomy study",
      imageSrc: softGoth,
      tags: ["Study", tag_ff14],
    },
    {
      text: "Arcis",
      imageSrc: arcis,
      tags: [tag_ff14],
    },
    {
      text: "Pixel art Ko",
      imageSrc: Ko,
      youtubeLink:
        "https://www.youtube.com/watch?v=-QMUnTS6tlk&ab_channel=Taming",
      linkText: "Speedpaint",
      tags: [tag_twilight, tag_pixelart, tag_animated],
    },
    { text: "Four Knights Game", imageSrc: Chess, tags: [tag_carcaso] },
    {
      text: "Graffiti of a forgotten heartbreak that never happened",
      youtubeLink: "CzWqI3g08TI",
      tags: [tag_animated],
    },
    { text: "Yuyu in Carcaso", imageSrc: Yuyu, tags: [tag_carcaso] },
    { text: "Irvan Animation", imageSrc: irvan_doctor, tags: [tag_animated] },
    {
      text: "Pixel art Nyla",
      imageSrc: Nyla,
      youtubeLink:
        "https://www.youtube.com/watch?v=Rrm3AzPYgPQ&ab_channel=Taming",
      linkText: "Speedpaint",
      tags: [tag_twilight, tag_pixelart, tag_animated],
    },
    {
      text: "Pixel art Ravv",
      imageSrc: Ravv,
      youtubeLink: "https://www.youtube.com/watch?v=esEzYmNSybc",
      linkText: "Speedpaint",
      tags: [tag_twilight, tag_pixelart],
    },
    { text: "Irvan Redesign", imageSrc: IrvanRedesign },
    { text: "Dayndal's Chosen", imageSrc: DayndalChosen, tags: [tag_twilight] },
    { text: "Ivy & Veda Commission", imageSrc: Ivy },
    {
      text: "Pixel art Dayndal",
      imageSrc: Von,
      tags: [tag_twilight, tag_pixelart],
    },
    {
      text: "Pixel art Karro",
      imageSrc: Karro,
      youtubeLink: "https://www.youtube.com/watch?v=T5NSXRj7wWU",
      linkText: "Speedpaint",
      tags: [tag_twilight, tag_pixelart, tag_animated],
    },
    {
      text: "Pixel art Blievois",
      imageSrc: Blievois,
      tags: [tag_twilight, tag_pixelart, tag_animated],
    },
    {
      text: "Silfa FF14 Full Commission",
      imageSrc: SilfaFull,
      tags: [tag_ff14],
    },
    { text: "Paul Token", imageSrc: PaulTokenStamp },
    { text: "EU4 Fanart", imageSrc: Isaakios },
    {
      text: "Tolpacore",
      // imageSrc: Tolpacore,
      youtubeLink: "aNY-jQEBajk",
      linkText: "Animated Music Video",
      tags: [tag_animated],
    },
    {
      text: "Pixel art Boann",
      imageSrc: Boann,
      tags: [tag_twilight, tag_pixelart, tag_animated],
    },
    { text: "Paul Servius Maximus V the greatest Mailman", imageSrc: Paul },
    /* { text: "Uncropped Robyn", imageSrc: Robyn }, */
    {
      text: "Pixel art Gloreya",
      imageSrc: Gloreya,
      tags: [tag_twilight, tag_pixelart],
    },
    {
      text: "Pixel art Qale",
      imageSrc: Qale,
      tags: [tag_twilight, tag_pixelart],
    },
    { text: "Memento Reelers", imageSrc: Fishermen, tags: [tag_twilight] },
    { text: "Cyberpunk Red Maid", imageSrc: Maidcore },
    { text: "Twilight Zemeradi", imageSrc: Zemeradi, tags: [tag_twilight] },
    { text: "Baldur's Gate Paladin", imageSrc: BaldursGate },
    { text: "Carcasoan Vitiligo", imageSrc: Elroscian, tags: [tag_carcaso] },
    { text: "Sam Jones", imageSrc: SamJones },
    { text: "Sayuu's PNGtuber", imageSrc: beeGirl, tags: [tag_animated] },
    { text: "Hatching practice", imageSrc: combination },
    { text: "Irvan the Shirren Moth", imageSrc: Starfinder1 },
    {
      text: "Twilight Wizards",
      imageSrc: twilightWizard,
      tags: [tag_twilight],
    },
    { text: "Nunn but Evangelion", imageSrc: Nunn, tags: [tag_ff14] },
    {
      text: "Columbo Meets Blue's Clues",
      imageSrc: BluesClues,
      tags: [tag_animated],
    },
    {
      text: "Tami in style of Fire Emblem",
      imageSrc: TammyPixelArt,
      tags: [tag_ff14, tag_pixelart],
    },
    { text: "City life in friend's pokemon world", imageSrc: Malacruz },
    {
      text: "Tami with my favourite Yu-Gi-Oh archetypes",
      imageSrc: Banner,
      tags: [tag_yugioh, tag_ff14],
    },

    { text: "Kua in Carcaso", imageSrc: Chriskua, tags: [tag_carcaso] },
    { text: "Steel Dandelion", imageSrc: Dandelion, tags: [tag_carcaso] },
    { text: "Jinxxie in Carcaso", imageSrc: Jinxie, tags: [tag_carcaso] },
    { text: "Chris in Carcaso", imageSrc: Kris, tags: [tag_carcaso] },
    { text: "Peter in Carcaso", imageSrc: Peter, tags: [tag_carcaso] },
    { text: "We Must Dissent", imageSrc: Rat, tags: [tag_carcaso] },
    { text: "Asa in Carcaso", imageSrc: Asa, tags: [tag_carcaso] },
    { text: "Vampire Turtleneck", imageSrc: Vampire, tags: [tag_carcaso] },
    { text: "Ajax", imageSrc: RatLamp, tags: [tag_carcaso] },
    { text: "Balthasar", imageSrc: Balthasar, tags: [tag_carcaso] },
    { text: "Bard", imageSrc: Bard, tags: [tag_carcaso] },
    { text: "Deus", imageSrc: Deus, tags: [tag_carcaso] },
    { text: "Ellysa", imageSrc: Ellysa, tags: [tag_carcaso] },
    { text: "Divine Order", imageSrc: Fighter, tags: [tag_carcaso] },
    { text: "Leo", imageSrc: Leo, tags: [tag_carcaso] },
    { text: "Saint Fenmes", imageSrc: Fenmes, tags: [tag_carcaso] },
    { text: "Gone Girl", imageSrc: gonegirl, tags: [tag_carcaso] },
    { text: "Cleansing", imageSrc: Vitriol, tags: [tag_carcaso] },
    { text: "Lala Carbuncle Badge", imageSrc: carbuncle, tags: [tag_ff14] },
    { text: "Lala Cherry Bomb Badge", imageSrc: cherryBomb, tags: [tag_ff14] },
    { text: "Lala Chocobo Badge", imageSrc: chocobo, tags: [tag_ff14] },
    { text: "Lala Moogle Badge", imageSrc: moogle, tags: [tag_ff14] },
    { text: "Lala Pokeball", imageSrc: pokeball, tags: [tag_ff14] },
    { text: "Lala Trophy", imageSrc: trophy, tags: [tag_ff14] },
    { text: "Travers' WoL", imageSrc: Travers, tags: [tag_ff14] },
    { text: "Wilson in Pokemon", imageSrc: wilsonPokemon },
    { text: "Bee", imageSrc: Bee, tags: [tag_yugioh] },
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
          onClick={() => setCurrentTag(tag_carcaso)}
          disabled={currentTag === tag_carcaso}
        >
          Carcaso
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag(tag_twilight)}
          disabled={currentTag === tag_twilight}
        >
          Twilight of the Idols
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag(tag_ff14)}
          disabled={currentTag === tag_ff14}
        >
          FF14
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag(tag_yugioh)}
          disabled={currentTag === tag_yugioh}
        >
          Yu-Gi-Oh!
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag(tag_animated)}
          disabled={currentTag === tag_animated}
        >
          Animated
        </button>
        <button
          className="GalleryButtons"
          onClick={() => setCurrentTag(tag_pixelart)}
          disabled={currentTag === tag_pixelart}
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
