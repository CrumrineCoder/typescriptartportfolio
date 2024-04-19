import "../App.scss";
import ArtBox from "../components/artBox";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import YoutubeEmbed from "../components/YoutubeEmbed";

import { Suspense, useState } from "react";
import { lazy } from "react";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/envelope-solid.svg";
import { ReactComponent as Twitch } from "../assets/Twitch.svg";

const ProfilePicSelector = lazy(
  () => import("../components/profilepicselector")
);

const Moff = require("../assets/moff.png");

const PixelTami = require("../assets/Tami.png");
const TraptrixSera = require("../assets/profilepics/traptrix garden.png");
const GarlicJester = require("../assets/profilepics/Tami Garlic.png");
const MothMash2023 = require("../assets/profilepics/dec 2023 pfp.png");
const Silfa = require("../assets/profilepics/silfa.png");
const Allomerus = require("../assets/profilepics/Traptrix Halloween.png");
const Robyn = require("../assets/Robyn.png");
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
const Zuzu = require("../assets/Zuzu.png");

const profilePicsMasterData = [
  {
    imageName: Zuzu,
    artTitle: "Zuzu Pixel Art Study",
    artDescription:
      "I drew my friend! His Twitch bio is a bit lacking in character, so wanted to give him a small surprise for being a great person. I'm trying to learn how I wanted to texture and shade in pixel art - so there's a bit of experimentation with hue shifting, anti aliasing, and dithering. I'm finding dithering hard to manage - he has a five o' clock shadow, but it wasn't coming out without removing his baby face so I reframed from adding any indication of it. I'll definitely keep at it!!",
    style: "discord",
    date: "04/18/2024",
  },
  {
    imageName: PixelTami,
    artTitle: "Tami Pixel Art",
    artDescription:
      "I do pixel art streams on my Twitch but I don't have a pixel art picture for it, so here we are. I find that changing my profile pic after a major event helps me to compress what happened and suggest that it happened to a different version of me. So, making this helped me move on, and I put some personal feelings about it into this work. I wouldn't be able to explain the specifics to you, I just hope you feel what I do.",
    style: "discord",
    date: "03/23/2024",
  },
  {
    imageName: TraptrixSera,
    artTitle: "Traptrix Sera",
    artDescription:
      "Traptrix monsters are my favourite archetype in Yu-Gi-Oh, and I love practicing on them. I experimented with a shading technique where you clip a layer above the colours and erase the mask in order to give highlights, rathe than painting on shadows to an already bright image. I also messed around with Gradients (and wanted to try gradient mapping but I don't think I set up my image right) and masks. I was also going to try foreshortening with the arm closest to us, and the flowers, but it didn't look right and didn't fit the character. I had a really fun time interpreting the card and trying to build a design out of it.",
    style: "discord",
    date: "02/06/2024",
  },
  {
    imageName: GarlicJester,
    artTitle: "Garlic Jester",
    artDescription:
      "Garlic Jester will forever be associated with my first friend in FF14, and I've been wanting to draw my character holding it for a year or so now. I also put them in my favourite location - the Snail in Iddylshire, which is also associated with that first friend. I considered putting them on a ledge with a complete profile shot for the both of them, but decided to change it a bit for a more personal look. As for the colours and composition, I wanted to make it feel homely. I want to do more painting, I enjoy how the sunflowers came out in this piece, as well as Tami's hair.",
    style: "discord",
    date: "01/12/2024",
  },
  {
    imageName: MothMash2023,
    artTitle: "Mothmas 2023",
    artDescription:
      "Another year, another Moth drawing! I wanted this years to feel Roman/Greek to celebrate Io Saturnalia, so I made the main colour scheme yellow & harsh black outlines to represent the ancient Greek pottery we have. I added a pastel background though to keep it feeling soft and safe so that it wouldn't lean too hard into a Tarot or occult aesthetic. I wanted the pose to represent how in Winter I bunker down and do tons of work to get through the seasonal depression - hence why I'm holding a stylus. I debated making it a side profile like those 24/7 Lofi music channels, but I thought that'd be too memey when I wanted this to be a cozy simple doodle, which I adored creating.",
    style: "discord",
    date: "12/02/2023",
  },
  {
    imageName: Silfa,
    artTitle: "Silfa",
    artDescription:
      "This is a commission for my friend Silfa who plays FF14! They initially said their character had a 'bratty spunky tomboyish vibe', but after discussing the piece they told me to make her nervous and have vibes similar to Bocchi from Bocchi the Rock and Kobanei from Chainsaw Man. They also told me their favourite emote was /deride, so I included it - you can see it in the gallery titled, 'Silfa FF14 Full Commission'. We chose my hatching style as it fit their taste the closest, which meant I got to focus on line weight and expression. I always love hatching when I get to, so this piece was extremely fun. Their references were Gposes (screenshots taken in FF14) which all had the Moogle mask in it, so I included it in this commission, and they said they loved the Newfound adventurer set, which is the outfit on the right. I did adjustments to the hair so it'd be more defined in this art style, and I added the collar to mess with them but they ended up loving it.",
    style: "discord",
    date: "11/28/2023",
  },
  {
    imageName: Allomerus,
    artTitle: "Traptrix Allomerus",
    artDescription:
      "I needed a new spooky profile for Halloween, and Traptrix don't get enough scary fanart given they're venomous venus fly trap monsters. Which is a shame, they're my favourite Archetype (You can see it in the Yugioh Banner I did in the Gallery). Been looking forward to this for a few months now - I think it came out really nicely. I feel like I accidentally made the lines look like it was done with a ball point pen, which amuses me and I want to use in the future.  I don't have a lot to say for the decisions on this one, I just kinda drew for a bit and then I had it. Call it divine inspiration :p ",
    style: "discord",
    date: "10/03/2023",
  },
  {
    imageName: Robyn,
    artTitle: "Robyn",
    artDescription:
      "A friend of mine passed, and I wanted to draw something for them. Robyn was a big fan of Persona, so I drew with its limited colour palette found in its splash screens, but replaced red with their favourite colour. Other details about the design are a bit personal to write here, but they were taken into account. I also wrote them as a NPC in my fantasy world so a part of them will be around forever. Rest well, friend.",
    style: "discord",
    date: "9/29/2023",
  },
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
            <Suspense fallback={<div>Loading!</div>}>
              <div className="ProfilePicSelectors">{imageList}</div>
            </Suspense>
          </div>
        </div>
      </div>
      <div className="TwitchLink">
        <div className="TwitchHeader">I also Stream!</div>
        <div className="TwitchVideo">
          <YoutubeEmbed embedId="T5NSXRj7wWU" />
        </div>
        <div className="TwitchDescription">
          Every Saturday I draw a God from my fantasy world. <br />
          Come distract me in chat.
        </div>
        <div className="TwitchButtonContainer">
          <div
            className="TwitchButton"
            onClick={() =>
              window.open("https://twitch.com/tamingofspyro", "_blank")
            }
          >
            <Twitch className="TwitchLinkSVG" /> Watch Live
          </div>
          <Link to="/gallery">
            <div className="TwitchButton">
              <img src={Moff}></img>View Gallery
            </div>
          </Link>
        </div>
        <div className="TwitchDescription">
          Pixel art, fantasy art with backgrounds, comics, animations, etc. go
          in my Gallery! <br /> I worked hard on them please validate me :)
        </div>
      </div>

      <div className="AboutMe">
        <div className="AboutMeHeader">
          <>Literally who?</>
        </div>
        <div className="AboutMeBody">
          <p>
            I'm Taming, and I'm a hobbyist artist. I love drawing for my friends
            - I've made plenty of profile pictures for them, and for their
            birthdays I've designed a NPC based on them in my fantasy worlds.
            You can find those in my Gallery - I've been expanding on those
            worlds through my art. Currently I run two campaign settings -
            Twilight of the Idols & Carcaso, both of which I've been working on
            for 5+ years. I love running duet campaigns - a tabletop game
            between myself and my one player. In everything I do, I try to learn
            the most about my friends so I can make them happy.
          </p>
          <p>
            I really enjoy meeting as many people as I can and learning what
            they like. I've been enjoying Final Fantasy XIV to do so - I play
            White & Black mage. I'm also a fan of Yu-Gi-Oh, Space Station 13,
            Europa Universalis IV, League, and I hope to draw more art to
            express my love for it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePictures;
