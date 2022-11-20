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
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "10/19/2021",
  },
  {
    imageName: chiprofilepic,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "05/03/2021",
  },
  {
    imageName: julian2,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "06/11/2021",
  },
  {
    imageName: julian,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "05/09/2021",
  },
  {
    imageName: lala1,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
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
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "02/17/2021",
  },
  {
    imageName: willow,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "09/03/2021",
  },
  {
    imageName: tami,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
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

          <div className="ProfilePicSelectors">{imageList}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePictures;