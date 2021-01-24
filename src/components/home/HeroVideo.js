import "./HeroVideo.scss";
import fallbackImage from "images/graduates1.jpg";

export default function HeroVideo() {
  return (
    <div
      className="hero-video"
      style={{ backgroundImage: `url(${fallbackImage})` }}
    >
      <div class="video-background">
        <iframe
          src="https://player.vimeo.com/video/504125086?background=1&autoplay=1&loop=1&byline=0&title=0"
          title="Devhaus Leipzig"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
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
