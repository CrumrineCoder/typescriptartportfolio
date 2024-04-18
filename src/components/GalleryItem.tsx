import YoutubeEmbed from "./YoutubeEmbed";
import YoutubeLogo from "../assets/Youtube_logo.png";
import Zoom from "react-medium-image-zoom";

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
export default GalleryItem;