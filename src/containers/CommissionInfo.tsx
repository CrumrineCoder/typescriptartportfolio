const TammyConfused = require("../assets/profilepics/tammy.png");

function CommissionInfo() {
  return (
    <div className="CommissionInfo">
      <div className="CommissionInfoHeader">Commissions Info</div>
      <div className="CommissionInfoSubHeader">Please review the pricing and terms below before sending a request to tamingthecarcasoan@gmail. Commission queue can be found here.</div>
      <div className="CommissionInfoApplicationContainer">
        <p className="CommissionInfoApplicationBody">
          Please send me an Email titled "COMMISSION - (Your name and Social
          Media Username if you want to be tagged) [E-mail:
          tamingthecarcasoan@gmail.com] With the below details. Alternatively,
          you can send this over Twitter DMs
        </p>
        <p className="CommissionInfoApplicationBody">
          I reserve the right to decline any commission request that I find
          inappropriate and/or that doesn’t match my terms, skills or time.
        </p>
        <p className="CommissionInfoApplicationBody">
          I cannot give an exact time estimate at the moment as I’m working on a
          lot of other things at the moment. If you want to know how many slots
          are taken before you, please check my orders page. I like to take my
          time with my commissions. I always try to get them done as soon as
          possible, but I don’t work with a set amount of time when drawing.
          Please be mindful that commissions further in the queue will take
          longer to get started and finished. Please be aware that personal art
          may happen between commissions.
        </p>
        <p className="CommissionInfoApplicationBody">
          If your illustration requires a due date, please specify. Rush orders
          will require a fee.
        </p>
        <p className="CommissionInfoApplicationBody">
          To avoid delays please respond within a timely manner. Let me know if
          you won't be available at any time so I know there will be a delayed
          response.
        </p>
        <p className="CommissionInfoApplicationBody">
          Form to fill out these details to the best of your ability to help me
          make the perfect art for you:
        </p>
        <ul className="CommissionInfoApplicationListContainer">
          <li className="CommissionInfoApplicationListItem">Commission Type</li>
          <li className="CommissionInfoApplicationListItem">Character Name</li>
          <li className="CommissionInfoApplicationListItem">Race</li>
          <li className="CommissionInfoApplicationListItem">
            Age (or the human equivalent for elves and elder races). Broad
            estimates are fine eg 20s, 30s
          </li>
          <li className="CommissionInfoApplicationListItem">
            Class if it's relevant to appearance or vibe (if fantasy)
          </li>
          <li className="CommissionInfoApplicationListItem">
            A concise summary of personality and desired expression. For me this
            is one of the most important things for deciding if and how to
            portray a character! A sentence or two is all that's needed. It's
            perfectly ok to ask for a neutral expression.
          </li>
          <li className="CommissionInfoApplicationListItem">
            You can add a little backstory if it helps you frame the mood, but
            no big paragraphs of text please!
          </li>
          <li className="CommissionInfoApplicationListItem">Skin colour</li>
          <li className="CommissionInfoApplicationListItem">Eye colour</li>
          <li className="CommissionInfoApplicationListItem">
            Hair colour and style
          </li>
          <li className="CommissionInfoApplicationListItem">Accessories</li>
          <li className="CommissionInfoApplicationListItem">Scars</li>
          <li className="CommissionInfoApplicationListItem">Outfit</li>
          <li className="CommissionInfoApplicationListItem">
            Pose (only for bigger pieces and illustrations). This can just be a
            general idea if no specific pose is in mind.
          </li>
        </ul>
        <div className="CommissionInfoApplicationSubHeader">References</div>
        <p className="CommissionInfoApplicationBody">
          These might include previous art you've commissioned, Pinterest
          images, screenshots of characters in-game, WoW dressing room links, or
          other art that inspired you (but don't ever use someone else's OC
          design as your own! It's a huge no-no to copy someone's character)
        </p>
        <p className="CommissionInfoApplicationBody">
          Note anything that might be difficult to see in references,
          particularly scars
        </p>
        <p className="CommissionInfoApplicationBody">
          In-game lighting in screenshots can alter the colour of everything
          drastically between different locations. Give your artist references
          with neutral lighting, or provide colour swatches for each feature
        </p>
        <p className="CommissionInfoApplicationBody">
          Faceclaims are extremely useful. These are photos of real people who
          resemble your character. The final art won't be exactly like the
          reference but gives an invaluable stepping off point in knowing how
          you visualize your character
        </p>
        <p className="CommissionInfoApplicationBody">
          Don't worry if you have no art yet or can't find the perfect matching
          picture. A reference does not have to match every aspect of the
          character! You might provide one picture for hair, another for eyes,
          another for face shape, another for expression and so on.
        </p>
        <p className="CommissionInfoApplicationBody">
          If you have a particular scene in mind for an illustration, MS paint
          doodles are perfect to show what you had in mind for pose and
          composition
        </p>
        <p className="CommissionInfoApplicationBody">
          For accurate colours (eg for eyes or skin) you can use hex colour
          codes, Pantone swatches, even screenshot a nice colour you found in
          Google
        </p>
        <p className="CommissionInfoApplicationBody">
          One of the best ways people have sent me refs is via Google drive or
          in Google docs. Put all the images in one character folder to make it
          easy to navigate and there's the option to add notes to any picture
          too. (Make sure to turn permissions on for viewing to save time, it
          lets me see the pictures without any delays)
        </p>
        <p className="CommissionInfoApplicationBody">
          A thumbnail sketch(es) based on the client's description will be done
          to determine general composition of the artwork.
        </p>
        <p className="CommissionInfoApplicationBody">
          Once it's approved, a detailed sketch will be created in order to seek
          conceptual approval for the final piece. Revisions cannot be made
          after final approval so please revise your commission carefully and
          let me know if I make any mistakes during the process. I will only
          accept up to 3 revisions once the initial sketch is made. I will
          provide at least 2 - 3 wips to let you see each step (sketch, lines,
          colours) and you can request for minor changes. After you approve it
          and start coloring, only minor changes (color, shadows, or highlights)
          will be accepted.
        </p>
        <p className="CommissionInfoApplicationBody">
          I will send you an Invoice through PayPal mail once the sketch is
          approved. I will cancel the Invoice if I don’t hear back within 48
          hours unless otherwise given notice
        </p>
        <p className="CommissionInfoApplicationBody">
          After the illustration is done, I will send you the thumbnail for the
          final check, and I will send the High Res Version if there's no slight
          adjustments to be made.
        </p>
        <p className="CommissionInfoApplicationBody">
          I will send a high-res version of the art through email when finished.
        </p>
        <div className="CommissionInfoApplicationHeader"></div>
      </div>

      <div className="CommissionInfoHeader">COMMISSION PRICING</div>
      <div className="CommissionInfoPricingContainer">
        <div className="CommissionInfoPricingLeftImageContainer">
          <img src={TammyConfused} className="CommissionInfoPricingImage"></img>
        </div>
        <div className="CommissionInfoPricingRightContainer">
          <p className="CommissionInfoPricingHeader">PROFILE PICTURES | $ 60</p>
          <p className="CommissionInfoPricingBody">
            Custom Made Profile Picture for you or OC. Pricing options will be
            expanded in the near future.
          </p>
        </div>
      </div>

      <div className="CommissionInfoHeader">Terms of Service</div>
      <div className="CommissionInfoTOSContainer">
        <p className="CommissionInfoTOSBody">
          The commissioned drawings are for personal use only (should not be
          used for financial gain in any form). For other uses, ask me first and
          will incur an additional cost.
        </p>
        <p className="CommissionInfoTOSBody">
          Payment will be done after the Sketch phase in full, which will
          account for paypal tax (4.4%+0.30). If you wish to cancel your
          commission and get a refund, contact me as soon as possible. I do not
          refund once I’ve started the sketch.
        </p>
        <p className="CommissionInfoTOSBody">
          I DO NOT accept any kind of cryptocurrency as payment. I only accept
          USD through Paypal Invoice.
        </p>
        <p className="CommissionInfoTOSBody">
          I retain the rights to all art that I produce
        </p>
        <p className="CommissionInfoTOSBody">
          I reserve the right to print and sell all my art pieces including
          personal and commissioned work
        </p>
        <p className="CommissionInfoTOSBody">
          Artwork will be published on social media as part of my portfolio
          (unless otherwise agreed beforehand)
        </p>
        <p className="CommissionInfoTOSBody">
          Artwork is for your personal use only, nothing commercial unless
          previously agreed. You may not resell it, edit it, remove my
          signature, use it for merchandise, sell as a NFT or for AI art
          manipulation, or claim it as your own.
        </p>
        <p className="CommissionInfoTOSBody">
          Whenever you post and share my work you should give me appropriate
          credit.
        </p>
        <p className="CommissionInfoTOSBody">
          By paying the PayPal invoice, you agree to these Terms of Service.
        </p>
      </div>
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
