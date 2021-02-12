import "./HeroVideo.scss";
import fallbackImage from "images/home/teaser-cover.jpg";

export default function HeroVideo() {
  return (
    <div className="hero-video">
      <div className="video-background">
        <div className="video-holder">
          <img src={fallbackImage} alt="Devhaus Trailer"></img>
          <iframe
            src="https://player.vimeo.com/video/511337889?background=1&autoplay=1&loop=1&byline=0&title=0"
            title="Devhaus Leipzig"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
      <div className="hero-title">
        <h1>
          DEV
          <br />
          HAUS
          <br />
          LEIPZIG
        </h1>
      </div>
    </div>
  );
}
