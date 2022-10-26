import "../App.scss";
import ArtBox from "../components/artBox";
import {Routes, Route, useNavigate} from 'react-router-dom';

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
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: AsheSaris,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: AyaFae,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
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
    date: "11/20/2020",
  },
  {
    imageName: chiprofilepic,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: julian2,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: julian,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: lala1,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  } /*
  {
    imageName: lala2,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: lala3,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: lala4,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  }, */,
  {
    imageName: neeko,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: willow,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
  {
    imageName: tami,
    artTitle: "Testing",
    artDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit.",
    style: "discord",
    date: "11/20/2020",
  },
];

function ProfilePictures() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  const [currentImage, setCurrentImage] = useState(TammyConfused);

  const imageList = profilePicsMasterData.map((items, i) => (
    <ProfilePicSelector
      imageName={items.imageName}
      changeImage={setCurrentImage}
      currentImage={currentImage}
    ></ProfilePicSelector>
  ));
  /*
    const imageList = profilePicsMasterData.map(function(item, i){
    console.log('test');
    return <li key={i}>Test</li>
  })
  */
  console.log(imageList);
  const navigate = useNavigate();
  /*
             <div className="ProfilePicturesLeftSideCommissionInfo">
          I'm expanding to do personal commissions in my free time. I'm most interested in drawing cute and/or spooky things, and nothing overtly NSFW. 
        </div>

        */

        const navigateCommissions = () => {
          // 👇️ navigate to /
          navigate('/commissions');
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

        
        

        <div onClick={navigateCommissions} className="ProfilePicturesLeftSideCTA">Order Yours</div>

        <div className="ProfilePicturesLeftSideFooter">
            <Twitter  onClick={()=> window.open("https://twitter.com/TamingOfCarcaso", "_blank")} className="ProfilePicturesLeftSideFooterTwitter" />
            <Gmail onClick={()=> window.open("mailto:tamingthecarcasoan@gmail.com", "_blank")} className="ProfilePicturesLeftSideFooterGmail"/>
        </div>
       
      </div>
      <div className="ProfilePicturesRightSide">
        <div className="ProfilePicturesRightWhiteBackground">
          <ArtBox
            imageName={currentImage}
            artTitle={"Testing"}
            artDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
            }
            style={"discord"}
            date={"11/20/2020"}
          ></ArtBox>

          <div className="ProfilePicSelectors">{imageList}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePictures;

/*
 
            */

/*


      <ArtBox
        imageName={AsheSaris}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={AyaFae}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={Sophia}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={Catgirl}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={chiprofilepic}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={julian}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={julian2}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={lala1}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={lala2}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={lala3}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={lala4}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={neeko}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={tami}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      <ArtBox
        imageName={willow}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
*/
