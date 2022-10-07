import "../App.scss";
import ArtBox from "../components/artBox";

import React, {useState} from 'react';

import ProfilePicSelector from "../components/profilepicselector";

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
const tammy = require("../assets/profilepics/tammy.png");
const willow = require("../assets/profilepics/willowheadpat.jpeg");

function ProfilePictures() {
  // <CarcasoPortfolioBox imageName="test.jpg"></CarcasoPortfolioBox>
  // <CarcasoPortfolioBox imageName = {"./assets/tammy.png"} />
  const [currentImage, setCurrentImage] = useState(TammyConfused);

  return (
    <div className="ProfilePictures">
          {currentImage}
      <ArtBox
        imageName={currentImage}
        artTitle={"Testing"}
        artDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper luctus mi, ut ornare leo suscipit non. Suspendisse fermentum tellus eget nulla blandit, sit amet pulvinar urna malesuada. Cras ac purus et tellus mollis sodales eget vel justo. Cras posuere tincidunt luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis mi et dapibus laoreet. Integer placerat lacus fringilla, suscipit dolor nec, porttitor leo. Nam in lobortis nisl. Aliquam erat volutpat. Praesent dapibus porttitor libero et suscipit."
        }
        style={"discord"}
        date={"11/20/2020"}
      ></ArtBox>
      
      <ProfilePicSelector
        imageName={AsheSaris}
        changeImage={setCurrentImage}
      ></ProfilePicSelector>
    </div>
  );
}

export default ProfilePictures;

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