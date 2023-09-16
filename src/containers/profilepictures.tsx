import "../App.scss";
import ArtBox from "../components/artBox";
import { Routes, Route, useNavigate } from "react-router-dom";

import React, { useState } from "react";

import ProfilePicSelector from "../components/profilepicselector";

import { profile } from "console";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/envelope-solid.svg";
import CommissionInfo from "./CommissionInfo";

const TammyConfused = require("../assets/profilepics/tammy.png");
const AsheSaris = require("../assets/profilepics/ashesaris.png");
const AyaFae = require("../assets/profilepics/AyaPfp.png");
const Sophia = require("../assets/profilepics/catgirl.jpeg");
const Catgirl = require("../assets/profilepics/yuki.png");
const chiprofilepic = require("../assets/profilepics/chiartlala.png");
const julian2 = require("../assets/profilepics/julian2ref.png");
const julian = require("../assets/profilepics/julianart.png");
const lala1 = require("../assets/profilepics/ChichiArt.png");
const lala2 = require("../assets/profilepics/lalapackrin.jpeg");
const lala3 = require("../assets/profilepics/lalapacksama.jpeg");
const lala4 = require("../assets/profilepics/lalapacksquat.jpeg");
const neeko = require("../assets/profilepics/alex.png");
const tami = require("../assets/profilepics/tami.png");
const willow = require("../assets/profilepics/willowpfp.png");
const moth = require("../assets/profilepics/moth.png");
const Castro = require("../assets/profilepics/Castro.png");
const Irvan = require("../assets/profilepics/Irvan.png");
const TamiOmori = require("../assets/profilepics/TamiOmori.png");
const Dion = require("../assets/IrvanDionTokenNoBG.png");
const Tolpa = require("../assets/Maid Token.png");

const profilePicsMasterData = [
  {
    imageName: Tolpa,
    artTitle: "Cyberpunk Red Token",
    artDescription:
      "Here's the token for my Cyberpunk Red character! Tolpa is an absolute cutie and I want to get across her adorable tiredness - I initially had her squatting and giving middle fingers because of her rebellious streak, but I wanted more of a resting pose since it'd work better for a token in a tabletop game. The sketchiness of the border felt very fitting - I was thinking of putting more detail into it with more colour, but I feel like flats work great for this style and makes it readable when scaled down. Also thought about adding more of a cat theme to the border, but it wasn't working for me. Here's to more Tolpa art in the future~",
    style: "discord",
    date: "8/28/2023",
  },
  {
    imageName: Dion,
    artTitle: "Starfinder Token",
    artDescription:
      "I made this token for my roll20 Starfinder game! Irvan's a biohacker moth who alwyas has extra energy to stir up chaos. His eyes often peer into the ethereal space in between objects, and will rant about it absolutely anyone. The background squiggles represent this psychic affinity, and the border represents his botany one! His crazy and disheveled look was meant to go along with him holding a blowtorch or something, but I felt that would be too much noise. I deliberately chose a sketchy art style with flat shades so it would look great when scaled down, which it does.",
    style: "discord",
    date: "7/24/2023",
  },
  {
    imageName: moth,
    artTitle: "Christmas Moth",
    artDescription:
      "Moths have such a great aesthetic; I love their nobleness with their fur collars, wings, and crown-like antennae. I don't often draw stuff for myself, so I wanted to make myself a Christmas profile picture for Discord that went with the custom gif banners they were letting users enable during the event. I really enjoyed working with colours on this one; there's a lot of them but I feel like it all melds together well with the black fur & white skin. I'd like to develop my line thickness styling though, some parts aren't as stylized as I'd like. The design of the Moth I felt came out really nicely from its composition to expression to the outfit.",
    style: "discord",
    date: "12/12/2022",
  },
  {
    imageName: Castro,
    artTitle: "Castro",
    artDescription:
      "Castro was a character in one of my D&D campaigns I played in - he did a lot of fleshcrafting on his own body, but was still usually a sweet boy. I wanted to get across that kinda dicthomy by giving him two-faces, but nothing so obvious that it'd be an express motif of his. I thought I displayed a sorta interesting use of magic in just one image here - I would've like to spend more time rendering the blood and adjusting the arrangement to focus on it. It's always going to be a more boring arrangement when I'm figuring out the design of the character as I draw. Maybe I should adjust my workflow to sketch an outfit before doing these kinda pieces. I felt like the gelatin-like skin texture came out nicely; I don't usually use paint when drawing so this was a fun experiment.",
    style: "discord",
    date: "12/02/2022",
  },
  {
    imageName: Irvan,
    artTitle: "Irvan",
    artDescription:
      "Irvan is my Space Station 13 OC! I always loved goofing off as him in Botany, but I also tried to keep a chill vibe as I lubed up the hallways and watched with delight as people slipped out airlocks. It's one of my favourite games, and I felt like drawing something small for it. I'm starting to develop a style here where if the eyes aren't important, I draw them Mii-like, which I really like. The whites in eyes always sorta distract me so I don't like drawing them when I want the focus to be elsewhere. I really liked the colorization in this one; I'm always happy when I balance them with a wide palette. I'd say this image doesn't really work downscaled since there's no clear sillehoute so it's not a great avatar pic, but it's pleasant when viewed at normal resolution. I probably should've made it landscape in that case, but I still do like the arrangement of everything.",
    style: "discord",
    date: "11/08/2022",
  },
  {
    imageName: TammyConfused,
    artTitle: "Taming",
    artDescription:
      "I drew this one for myself! Well, for my FF14 OC. Whenever I do a Picrew of myself, I always go for the blood-on-face option. So naturally I added Danganronpa blood in the shape of 'ITS ALSO A PERSONAL STATEMENT ABOUT THE BAND ITSELF' from American Psycho. I also felt like giving myself a Lain hair-tie in the shape of the Yellow Sign from The King in Yellow, mostly because it's neat. I thought about giving her a menacing expression, but the dissonance between a neutral/confused one and the blood is more interesting to me. In an earlier version I had the blood more rummy red, but it looked like tribal tattoos so making it pink solved that.",
    style: "discord",
    date: "10/22/2021",
  },
  {
    imageName: AsheSaris,
    artTitle: "Ashe",
    artDescription:
      "This drawing was done for my friend, Ashe! They're a big fan of ironic 'Fish Fear Me, Women Love me' jokes, so one of the first things I did was design a trucker hat for their character. I actually ended up buying one myself after making this. I was also focused on learning my style with this one with experimenting with a hatch shading style, as well as using different ways of drawing the face like not using a different color to show a tooth. I also had a few variations of this drawing where I styled the hair differently, and I tried different pens for the outline. However, I think in my experimenting with my art style I didn't put as much time into representing Ashe's personality like their ironic over-coolness, or goblin energy. I would probably do it a bit more animated and colorful if I were to do it again with an active pose, or more focused on their interests like Touhou.",
    style: "discord",
    date: "08/18/2021",
  },
  {
    imageName: AyaFae,
    artTitle: "Aya",
    artDescription:
      "This is a drawing for my friend, Aya! I wanted to show their outwardly cute personality and perchance to wear punk clothing, but if I were to do this again I'd probably do a less flat angle. I was experimenting with using more sketchy lines and having them show through other layers, which I liked here. I would've drawn the horns differently though, and I've learned a lot about shading since this one. I did enjoy designing their outfit though, and I would've probably done bust-up instead of headshot for this one in the future to show more of it. Lastly I probably would've had their expression and pose be closer to adorably confused.",
    style: "discord",
    date: "05/02/2021",
  } /*
  {
    imageName: Sophia,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  }, */,
  {
    imageName: Catgirl,
    artTitle: "Yuki",
    artDescription:
      "This was a commission for a friend's friend! I spent a long time on this one in both planning and drawing, since I've never drawn anything suggestive before. The pose idea itself came pretty quickly, and a friend helped to review the anatomy. I gathered a lot of references for shading the tail, latex, hair and cat ears which helped with unrelated parts of my style like the face markings and eyes. Despite this not being my field of expertise, I'm proud of the piece and what I learned. I want to explore more when I can.",
    style: "discord",
    date: "10/19/2021",
  },
  {
    imageName: chiprofilepic,
    artTitle: "Chihaya",
    artDescription:
      "This was a drawning done for my friend, Chi! They asked for a yakuza aesthetic, so I filled in with a metal bat prop, the suit, and an oni mask to fit with their other aesthetic tastes. If I were to do this again, I might make her more menacing with an advanced pose with the bat, or more smug using different props like dice falling through her fingers. I'm happy with the shading and she looks intimidating enough, it's just I would commit more next time.",
    style: "discord",
    date: "05/03/2021",
  },
  {
    imageName: julian2,
    artTitle: "Julian - Outrunner",
    artDescription:
      "This was a quick drawing for my friend, Julian! They're really into the Outrunner and the rebel aesthetic, so I studied a bit of the aesthetic and threw this together. I like putting on music that a friend likes to get into their head for mood inspiration, so I had a lot of Drive's OST on. I really enjoy studying a different style and trying to build mine from it; the two color lighting and hard shading was really fun to work with. I'd like to build on this outrunner style but much cleaner.",
    style: "discord",
    date: "06/11/2021",
  },
  {
    imageName: julian,
    artTitle: "Julian - Sin City",
    artDescription:
      "This was a commision for my friend, Julian! We talked for a while and got on the subject of the Sin City aesthetic, and eventually this came out. They always enjoy presenting themselves as wealthy and professional, which is how we landed on this style and pose inspiration. I really like monotone shading for the ability to highlight pieces of the art; I might apply this to Carcaso (my fantasy setting I do drawing for) with being able to highlight the theme of Gold in it. I also like being able to highlight pure white here, like on his glasses. For this style, I probably should've cleaned up the lines more, and chosen a slightly different head pose and expression.",
    style: "discord",
    date: "05/09/2021",
  },
  {
    imageName: lala1,
    artTitle: "Chimi",
    artDescription:
      "This commission was for my friend, Chimi! I did it alongside the Chihaya one and wanted to nail a sense of superiority which I think came across from the smug expression. I'm very happy with how the Japanese feel came across with the umbrella, tree, attire, and color choice. The lines also came out really nice on the face, but in the future I'll do less soft lighting on the skin. The hair outline I'd also do differently with a harsher outline, and the horns I'd also style differently with a more clear texture. I didn't know Chimi as well since Chihaya commissioned me, but I think I still got across their personality; their only requested change was for me to make the glasses white instead of black. I want to do more profile pictures with backgrounds, even if they're simple like this. I always enjoy adding details when I can.",
    style: "discord",
    date: "05/10/2021",
  } /*
  {
    imageName: lala2,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "05/11/2021",
  },
  {
    imageName: lala3,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "05/11/2021",
  },
  {
    imageName: lala4,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "05/12/2021",
  }, */,
  {
    imageName: neeko,
    artTitle: "Neko",
    artDescription:
      "This was a drawing for my friend Alex's birthday! They had a profile pic they had made themselves which was a MS paint cat smiling which was pretty simple but charming. I wanted to expand on it for them; I started by making the cat realistic and adding parts from their favorite pokemon to it, Eevee. I also added a ribbon because of their online handle and to help tie together the design of the cat. They make music and often times we hung out till the middle of the night as they have an affinity for staying up late, so I added those elements too. I enjoyed making this abstract drawing and it made them and I pretty happy with how it came out. I want to make more drawings like this that aren't necessarily just someone making a cute expression at the viewer with a flat perspective.",
    style: "discord",
    date: "02/17/2021",
  },
  {
    imageName: willow,
    artTitle: "Willow",
    artDescription:
      "This was a commission for my friend Willow! This one came across really well; the colors in her eyes really pop, the hair shading was really fun to do although I think I could've done the ponytail a bit better, and the horn shading looks really nice. I really wanted to get across the innocent cuteness of my friend, and they really liked headpats so it was easy to put together. The only problem I have is the cat sweater isn't very clear, but I'm not sure how I would be able to show it more without changing the entire pose and drawing, which I'm a big fan of how it turned out. The addition of a second actor to do the headpat helped a lot I think.",
    style: "discord",
    date: "09/03/2021",
  },
  {
    imageName: TamiOmori,
    artTitle: "Tami",
    artDescription:
      "This was a quick sketch of my WoL for a gpose I wanted to do for them. I did this in under 40 minutes and was based on the Omori portraits. I found this to be suprisingly competent and got me to start trying to learn about other styles through studies.",
    style: "discord",
    date: "08/11/2022",
  },
  {
    imageName: tami,
    artTitle: "Tami",
    artDescription:
      "This was a quick sketch of my WoL back when I first started playing. I was messing around with unrealistic proportions for the sake of style, eg. the neck's thickness or lack thereof, and I don't think that's really my thing. Despite stuff I'd change style wise, I think this came out cute still and was a fun attempt at drawing something fast.",
    style: "discord",
    date: "02/04/2021",
  },
];

function ProfilePictures() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  const [currentImage, setCurrentImage] = useState(
    profilePicsMasterData[0].imageName
  );

  const [index, setIndex] = useState(0);

  const imageList = profilePicsMasterData.map((items, i) => (
    <ProfilePicSelector
      imageName={items.imageName}
      changeImage={setCurrentImage}
      currentImage={currentImage}
      index={i}
      setIndex={setIndex}
    ></ProfilePicSelector>
  ));

  const navigate = useNavigate();

  const navigateCommissions = () => {
    navigate("/commissions");
  };

  return (
    <div className="HomePage">
      <div className="ProfilePictures">
        <div className="ProfilePicturesLeftSide">
          <div className="ProfilePicturesLeftSideText">
            <div className="ProfilePicturesLeftSideHeader">
              Hi I'm Taming, but you knew that already
            </div>
            <div className="ProfilePicturesLeftSideSubHeader">
              I make Profile Pictures to help friends show others how they want
              to be seen. Each was made carefully to the friend's taste and
              personality.
            </div>
          </div>
          <div
            onClick={navigateCommissions}
            className="ProfilePicturesLeftSideCTA"
          >
            Commissions Open
          </div>

          <div className="ProfilePicturesLeftSideFooter">
            <Twitter
              onClick={() =>
                window.open("https://twitter.com/TamingOfCarcaso", "_blank")
              }
              className="ProfilePicturesLeftSideFooterTwitter"
            />
            <Gmail
              onClick={() =>
                window.open("mailto:tamingthecarcasoan@gmail.com", "_blank")
              }
              className="ProfilePicturesLeftSideFooterGmail"
            />
          </div>
        </div>
        <div className="ProfilePicturesRightSide">
          <div className="ProfilePicturesRightWhiteBackground">
            <ArtBox
              imageName={currentImage}
              artTitle={profilePicsMasterData[index].artTitle}
              artDescription={profilePicsMasterData[index].artDescription}
              style={profilePicsMasterData[index].style}
              date={profilePicsMasterData[index].date}
            ></ArtBox>
            <p className="ProfilePicturesRightSideText">
              Click on the Image Above to View Full Screen!
            </p>
            <div className="ProfilePicSelectors">{imageList}</div>
          </div>
        </div>
      </div>
      <div className="AboutMe">
        <div className="AboutMeHeader"><>Literally who?</></div>
        <div className="AboutMeBody">I enjoy Yu-Gi-Oh. </div>
      </div>
    </div>
  );
}

export default ProfilePictures;
