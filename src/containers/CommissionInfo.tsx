const TammyConfused = require("../assets/profilepics/tammy.png");
const moth = require("../assets/profilepics/moth.png");

function CommissionInfo() {
  return (
    <div className="CommissionInfo">
      <div className="CommissionInfoStatus">
        <div className="CommissionInfoStatusPrefix">Commission Status:</div>
        <div
          className="CommissionInfoStatusShowmanship blinking"
          onClick={() =>
            window.open(
              "https://docs.google.com/spreadsheets/d/1HSfBZtmOESgWcwhaE5_Bk29YV1lpTPfRlGNTNIi7UHo/edit?usp=sharing",
              "_blank"
            )
          }
        >
          Open
        </div>
      </div>
      <div className="CommissionInfoSubHeader">
        Please review the pricing and terms below before sending a request to
        tamingthecarcasoan@gmail. Commission queue can be found{" "}
        <div
          className="inlineLink"
          onClick={() =>
            window.open(
              "https://docs.google.com/spreadsheets/d/1HSfBZtmOESgWcwhaE5_Bk29YV1lpTPfRlGNTNIi7UHo/edit?usp=sharing",
              "_blank"
            )
          }
        >
          here.
        </div>
      </div>
      <div className="CommissionInfoApplicationContainer">
        <p className="CommissionInfoApplicationSubHeader">
          Commission Process:
        </p>
        <ol className="CommissionInfoApplicationListContainer">
          <li className="CommissionInfoApplicationBody">
            After reading and agreeing to the Terms of Service, please send me
            an Email titled "COMMISSION - (Your name and Social Media Username
            if you want to be tagged) [E-mail: tamingthecarcasoan@gmail.com]
            With the below details. Alternatively, you can send this over
            Twitter DMs.
          </li>

          <p className="CommissionInfoApplicationBody">
            Time estimates on when I can respond to commission requests cannot
            be given at the moment. Commissions will take as long as I feel is
            required to do my best on each one. I will give frequent updates
            during each one, and will never disappear from contact while I am
            working on one. If your illustration requires a due date, please
            specify. Rush orders will require a fee, and I won't always be able
            to agree to one. You can see how many slots are taken before you on
            my orders page, and commissions further in the queue will take
            longer to get started. My personal life, art, and mental health
            comes before starting a new commission.
          </p>
          <p className="CommissionInfoApplicationBody">
            To avoid delays please respond within a timely manner. Let me know
            if you won't be available at any time so I know there will be a
            delayed response.
          </p>

          <p className="CommissionInfoApplicationBodyItalics">
            Please include the following written details in your commission:
          </p>
          <ul className="CommissionInfoApplicationListContainer">
            <li className="CommissionInfoApplicationListItem">
              Commission Type
            </li>
            <li className="CommissionInfoApplicationListItem">
              A concise summary of personality and desired expression. You don't
              have to write more than 1-2 sentences, but I work best by
              understanding what your end goal is and working backwards. It's
              perfectly okay if you think a neutral expression would be best!
            </li>
            <li className="CommissionInfoApplicationListItem">
              Pose (only for bigger pieces and illustrations). This can just be
              a general idea if no specific pose is in mind.
            </li>
            <li className="CommissionInfoApplicationListItem">
              Character Name
            </li>
          </ul>
          <p className="CommissionInfoApplicationBodyItalics">
            Please include visual references according to the guidelines below:
          </p>
          <ul className="CommissionInfoApplicationListContainer">
            <li className="CommissionInfoApplicationListItem">
              These might include previous art you've commissioned, Pinterest
              images, screenshots of characters in-game, Final Fantasy 14
              gposes, or other art that inspired you (but don't ever use someone
              else's OC design as your own without express permission!)
            </li>
            <li className="CommissionInfoApplicationListItem">
              Note anything that might be difficult to see in references,
              particularly scars, accessories, and the outfit you desire. Please
              try to be as detailed in your request and references as possible.
              I will not be spending forever editing things in that you didn't
              include in your initial request or in your reference. Make sure
              your reference is accurate.
            </li>
            <li className="CommissionInfoApplicationListItem">
              In-game lighting in screenshots can alter the colour of everything
              drastically between different locations. Give me references with
              neutral lighting, or provide colour swatches for each feature
              (Skin, eye, and hair colour).
            </li>
            <li className="CommissionInfoApplicationListItem">
              Faceclaims are extremely useful. These are photos of real people
              who resemble your character. The final art won't be exactly like
              the reference but gives an invaluable stepping off point in
              knowing how you visualize your character. Try to give different
              angles of the hair you're using if you can.
            </li>
            <li className="CommissionInfoApplicationListItem">
              Don't worry if you have no art yet or can't find the perfect
              matching picture. A reference does not have to match every aspect
              of the character! You might provide one picture for hair, another
              for eyes, another for face shape, another for expression and so
              on.
            </li>
            <li className="CommissionInfoApplicationListItem">
              If you have a particular scene in mind for an illustration, MS
              paint doodles are perfect to show what you had in mind for pose
              and composition
            </li>
            <li className="CommissionInfoApplicationListItem">
              One of the best ways people have sent me refs is via Google drive
              or in Google docs. Put all the images in one character folder to
              make it easy to navigate and there's the option to add notes to
              any picture too. (Make sure to turn permissions on for viewing to
              save time, it lets me see the pictures without any delays)
            </li>
          </ul>
          <li className="CommissionInfoApplicationBody">
            The concept of the artwork will be discussed, as well as the price
            quote. Upon confirmation of price, I will send you an invoice via
            Paypal. All payment is done 100% upfront. I will NOT send an invoice
            unless you've agreed with the price. I will cancel the Invoice if I
            don’t hear back within 48 hours unless otherwise given notice.
          </li>
          <li className="CommissionInfoApplicationBody">
            A thumbnail sketch(es) based on the client's description will be
            done to determine general composition of the artwork.
          </li>
          <li className="CommissionInfoApplicationBody">
            Once the thumbnail is approved, a detailed sketch will be created in
            order to seek conceptual approval for the final piece. Revisions
            cannot be made after final approval so please revise your commission
            carefully and let me know if I make any mistakes during the process.
            I will only accept up to 3 revisions once this sketch is made
            (unless it was an error on my part!).
          </li>
          <li className="CommissionInfoApplicationBody">
            After the illustration is done, I will send you the thumbnail for
            the final check.
          </li>
          <li className="CommissionInfoApplicationBody">
            If approved, I will send a high-res version of the art through email
            when finished.
          </li>
        </ol>
        <p className="CommissionInfoApplicationDisclaimer">
          By commissioning me, you agree with my terms of service (please read
          carefully below.)
        </p>
        <div className="CommissionInfoApplicationSubHeader">
          Terms of Service
        </div>
        <ul className="CommissionInfoTOSContainer">
          <li className="CommissionInfoApplicationBody">
            The commissioned drawings are for personal use only (should not be
            used for financial gain in any form). You may not resell it, edit
            it, remove my signature, use it for merchandise, sell as a NFT or
            for AI art manipulation, or claim it as your own. For other uses,
            ask me first and will incur an additional cost.
          </li>
          <li className="CommissionInfoApplicationBody">
            Payment will be done in full after confirmation to start work on the
            commission, which will account for paypal tax (4.4%+0.30). If you
            wish to cancel your commission and get a refund, contact me as soon
            as possible. I do not refund once I’ve started the sketch.
          </li>
          <li className="CommissionInfoApplicationBody">
            I DO NOT accept any kind of cryptocurrency as payment. I only accept
            USD through Paypal Invoice.
          </li>
          <li className="CommissionInfoApplicationBody">
            I retain the rights to all art that I produce
          </li>
          <li className="CommissionInfoApplicationBody">
            I reserve the right to print and sell all my art pieces including
            personal and commissioned work
          </li>
          <li className="CommissionInfoApplicationBody">
            Artwork will be published on social media as part of my portfolio
            (unless otherwise agreed beforehand)
          </li>
          <li className="CommissionInfoApplicationBody">
            Whenever you post and share my work you should give me appropriate
            credit.
          </li>
          <li className="CommissionInfoApplicationBody">
            Prices listed below are base prices.
          </li>
          <li className="CommissionInfoApplicationBody">
            The client will receive the full resolution digital file. No
            physical item will be delivered.
          </li>
          <li className="CommissionInfoApplicationBody">
            I reserve the right to decline any commission request that I find
            inappropriate and/or that doesn’t match my terms, skills or time.
          </li>
        </ul>

        <p className="CommissionInfoApplicationSubHeader">DOs / DONTs</p>
        <ul className="CommissionInfoApplicationListContainer DosContainer">
          <p className="CommissionInfoApplicationListSubHeader">
            I am comfortable drawing:
          </p>
          <li className="CommissionInfoApplicationBody">
            Male or Female Humans including your OC & fanart
          </li>
          <li className="CommissionInfoApplicationBody">
            Light/simple Mecha/Armour
          </li>
          <li className="CommissionInfoApplicationBody">
            Mild demonstration of violence (blood, scrapes)
          </li>
          <li className="CommissionInfoApplicationBody">
            Slight suggestiveness
          </li>
          <li className="CommissionInfoApplicationBody">
            Fantasy & Sci-Fi
          </li>
          <li className="CommissionInfoApplicationBody">
            Detailed props and backgrounds
          </li>
        </ul>
        <ul className="CommissionInfoApplicationListContainer DontsContainer">
          <p className="CommissionInfoApplicationListSubHeader">
            I will not draw:
          </p>
          <li className="CommissionInfoApplicationBody">
            Furry/Anthro
          </li>
          <li className="CommissionInfoApplicationBody">
            Porn/Fetishes/Explicit NSFW
          </li>
          <li className="CommissionInfoApplicationBody">
            Realism & complex Mecha / High Tech
          </li>
          <li className="CommissionInfoApplicationBody">
            Extreme Gore 
          </li>
          <li className="CommissionInfoApplicationBody">
            Related in any way to hate or just weird shit you wouldn’t tell your
            mother about.
          </li>
        </ul>
        <p className="CommissionInfoApplicationBody">
          I’m willing to try other styles or complex things that I want to learn
          like: designs, backgrounds, armour, and tattoos. Just ask!
        </p>
      </div>

      <div className="CommissionInfoHeader">COMMISSION PRICING</div>
      <div className="CommissionInfoPricingContainer">
        <div className="CommissionInfoPricingLeftImageContainer">
          <img src={moth} className="CommissionInfoPricingImage"></img>
        </div>
        <div className="CommissionInfoPricingRightContainer">
          <p className="CommissionInfoPricingHeader">PROFILE PICTURES</p>
          <p className="CommissionInfoPricingBodyPriceNumbers">
            Colored Headshot: $60 USD
          </p>
          <p className="CommissionInfoPricingBodyPriceNumbers">
            Bust Up: +$10 USD
          </p>
          <p className="CommissionInfoPricingBody">
            Custom Made Profile Picture for you or OC. These will have simple or
            no background.
          </p>
        </div>
      </div>
      <p className="CommissionInfoApplicationBody">
        Pricing options to be expanded in the near future to include complex
        backgrounds, paintings, Pixel art, sci-fi technology, and different fandoms. 
      </p>
      <p className="CommissionInfoApplicationBody">
        Thank you for your interest and taking the time to read my TOS, it's
        greatly appreciated!
      </p>
    </div>
  );
}

export default CommissionInfo;

/*
 <div className="CommissionInfo">
            <div className="CommissionInfoHeader">Pricelist</div>
            <p className="CommissionInfoBody">Character Illustration</p>
            <div className="CommissionInfoHeader">What to Request</div>
            <div className="CommissionInfoHeader">How to Request</div>
            <div className="CommissionInfoHeader">Terms of Service</div>
            <p className="CommissionInfoTOSBody">I DO NOT accept any kind of cryptocurrency as payment.</p>
            */
