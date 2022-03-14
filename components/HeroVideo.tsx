import clsx from "clsx";
import { useState } from "react";
import ReactPlayer from "react-player";

const spinnerImage = "/images/spinner.svg";

function Spinner() {
  return (
    <img
      src={spinnerImage}
      className="w-1/5 object-contain"
      alt="loading"
    ></img>
  );
}

export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative aspect-video grow">
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div
        className={clsx(
          "h-full w-full transition-opacity duration-500",
          videoLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <ReactPlayer
          width="100%"
          height="100%"
          playing={videoLoaded}
          onReady={() => setVideoLoaded(true)}
          muted
          loop
          url="https://player.vimeo.com/video/511337889?background=1&autoplay=1&loop=1&byline=0&title=0"
        />
      </div>
    </div>
  );
}
