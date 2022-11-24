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
const AsheSaris = require("../assets/profilepics/ashesaris.jpeg");
const AyaFae = require("../assets/profilepics/aya.jpeg");
const Sophia = require("../assets/profilepics/catgirl.jpeg");
const Catgirl = require("../assets/profilepics/catgirlcommission.jpeg");
const chiprofilepic = require("../assets/profilepics/chiprofilepic.jpeg");
const julian2 = require("../assets/profilepics/julianprofilepic2.jpeg");
const julian = require("../assets/profilepics/julianprofilepicture.jpeg");
const lala1 = require("../assets/profilepics/lalapackpenguin.jpeg");
const lala2 = require("../assets/profilepics/lalapackrin.jpeg");
const lala3 = require("../assets/profilepics/lalapacksama.jpeg");
const lala4 = require("../assets/profilepics/lalapacksquat.jpeg");
const neeko = require("../assets/profilepics/neeko.jpeg");
const tami = require("../assets/profilepics/tami.png");
const willow = require("../assets/profilepics/willowheadpat.jpeg");

const profilePicsMasterData = [
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
      "This drawing was done for my friend, Ashe! They're a big fan of those 'Fish Fear Me, Women Love me' jokes, so one of the first things I did was design a hat for their character. I was also focused on learning my style with this one with experimenting with a hatch shading style, as well as using different ways of drawing the face like not using a different color to show a tooth. I also had a few variations of this drawing where I styled the hair differently, and I tried different pens for the outline. However, I think in my experimenting with my art style I didn't put as much time into representing Ashe's personality like their ironic over-coolness, or goblin energy. I would probably do it a bit more animated and colorful if I were to do it again with an active pose, or more focused on their interests like Touhou.",
    style: "discord",
    date: "8/18/2021",
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
      "This was a commission for a friend's friend! I spent a long time on this one in both planning and drawing, since I've never drawn anything suggestive before. The pose idea itself came pretty quickly, and a friend helped to review the anatomy. I gathered a lot of references for shading the tail, hair and catears, and latex which helped with unrelated parts of my style like the face markings and eyes. Despite this not being my field of expertise, I'm proud of the piece and what I learned. I want to explore more when I can.",
    style: "discord",
    date: "10/19/2021",
  },
  {
    imageName: chiprofilepic,
    artTitle: "Chihaya",
    artDescription:
      "This was a drawning done for my friend, Chi! They asked for a yakuza aesthetic, so I filled in with a metal bat prop, the suit, and an oni mask to fit with their other aesthetic tastes. If I were to do this again, I might make her more menacing with an advanced pose with the bat, or more smug using different props like dice falling through her fingers. I'm happy with the shading and she looks intimidating enough, it's just I would commit further in direction more than another now that I know more.",
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
      "This was a drawing for my friend Alex's birthday! They had a profile pic they had made themselves which was of a MS paint cat smiling which was pretty simple but charming. I wanted to expand on it for them; I started by making the cat realistic and adding parts from their favorite pokemon to it, Eevee. I also added a ribbon because of their online handle and to help tie together the design of the cat. They make music and often times we hung out till the middle of the night as they have an affinity for staying up late, so I added those elements too. I enjoyed making this abstract drawing and it made them and I pretty happy with how it came out. I want to make more drawings like this that aren't necessarilly just someone making a cute expression at the viewer with a flat perspective.",
    style: "discord",
    date: "02/17/2021",
  },
  {
    imageName: willow,
    artTitle: "Willow",
    artDescription:
      "This was a commission for my friend Willow! This one came across really well; the colors in her eyes really pop, the hair shading was really fun to do although I think I could've done the ponytail a bit better, and the horn sading looks really nice. I really wanted to get across the innocent cuteness of my friend, and they really liked headpats so it was easy to put together. The only thing is it that the cat sweater isn't very clear, but I'm not sure how I would be able to show it more without changing the entire pose and drawing. I am not sure what I'd do differently about this one now actually. The addition of a second actor to do the headpat helped a lot I think.",
    style: "discord",
    date: "09/03/2021",
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
  const [currentImage, setCurrentImage] = useState(TammyConfused);

  const [index, setIndex] = useState(0);

  const imageList = profilePicsMasterData.map((items, i) => (
    <ProfilePicSelector
      imageName={items.imageName}
      changeImage={setCurrentImage}
      currentImage={currentImage}
      index = {i}
      setIndex={setIndex}
    ></ProfilePicSelector>
  ));

  const navigate = useNavigate();

  const navigateCommissions = () => {
    navigate("/commissions");
  };

  return (
    <div className="ProfilePictures">
      <div className="ProfilePicturesLeftSide">
        <div className="ProfilePicturesLeftSideHeader">
          Hi I'm Taming, but you knew that already
        </div>
        <div className="ProfilePicturesLeftSideSubHeader">
          I make Profile Pictures to help friends show others how they want to
          be seen. Each was made carefully to the friend's taste and
          personality.
        </div>

        <div
          onClick={navigateCommissions}
          className="ProfilePicturesLeftSideCTA"
        >
          Order Yours
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
            artDescription={
             profilePicsMasterData[index].artDescription
            }
            style={profilePicsMasterData[index].style}
            date={profilePicsMasterData[index].date}
          ></ArtBox>
          <p className="ProfilePicturesRightSideText">Click on the Image Above to View Full Screen!</p>
          <div className="ProfilePicSelectors">{imageList}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePictures;