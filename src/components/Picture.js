import { useState } from "react";
import "./Picture.scss";

export default function Picture({ src, srcX2, alt, width, height }) {
  const [loaded, setLoaded] = useState(false);

  const srcSet = src + (srcX2 ? `, ${srcX2} 2x` : "");

  return (
    <div style={!loaded ? { backgroundColor: "#f4f4f4" } : {}}>
      <picture
        width={width}
        height={height}
      >
        <source srcSet={srcSet}></source>
        <img
          onLoad={() => setLoaded(true)}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </picture>
    </div>
  );
}
