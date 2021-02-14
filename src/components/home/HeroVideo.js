import "./HeroVideo.scss";
import fallbackImage from "images/home/teaser-cover.jpg";
import { useRef, useEffect, useState } from "react";
import spinnerImage from "images/spinner.svg";

function Spinner() {
  return <img src={spinnerImage} alt="loading"></img>;
}

export default function HeroVideo() {
  const fallbackImageRef = useRef(null);
  const videoIframeRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setImageLoaded(true);
  //     setVideoLoaded(true);
  //   }, 2000000);
  // }, []);
  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
    const el = fallbackImageRef.current;
    if (el) {
      el.addEventListener("load", handleImageLoad);
      return () => {
        el.removeEventListener("load", handleImageLoad);
      };
    }
  }, [fallbackImageRef]);

  useEffect(() => {
    const handleLoad = () => {
      setVideoLoaded(true);
    };
    const el = videoIframeRef.current;
    if (el) {
      el.addEventListener("load", handleLoad);
      return () => {
        el.removeEventListener("load", handleLoad);
      };
    }
  }, [videoIframeRef]);

  return (
    <div className={"hero-video"}>
      <div className="video-background">
        <div className="video-holder">
          <img
            className={imageLoaded ? "loaded" : ""}
            ref={fallbackImageRef}
            src={fallbackImage}
            alt="Devhaus Trailer"
          ></img>
          <iframe
            className={videoLoaded ? "loaded" : ""}
            ref={videoIframeRef}
            src="https://player.vimeo.com/video/511337889?background=1&autoplay=1&loop=1&byline=0&title=0"
            title="Devhaus Leipzig"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
      {!imageLoaded && (
        <div className="loading-screen">
          <Spinner></Spinner>
        </div>
      )}
      <div className={"hero-title" + (imageLoaded ? " loaded" : "")}>
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
