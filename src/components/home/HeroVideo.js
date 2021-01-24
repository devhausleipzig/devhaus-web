import "./HeroVideo.scss";

export default function HeroVideo() {
  return (
    <div className="hero-video">
      <video onClick={(event) => event.target.play()} autoPlay loop>
        <source src="devhaus-720p.webm" type="video/webm"></source>
      </video>
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
