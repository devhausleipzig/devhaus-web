import React from "react";
import { useCallback, useEffect } from "react";

let lastOffset = window.scrollY;
export function ScrollDetector({ children }) {
  const [scrollState, setScrollState] = React.useState("scroll-top");

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset <= 0) {
      lastOffset = offset;
      return setScrollState("scroll-top");
    }
    if (offset < window.innerHeight * 0.8) {
      lastOffset = offset;
      return setScrollState("scroll-down");
    } else {
      if (offset >= lastOffset) {
        if (offset - lastOffset > 100) {
          lastOffset = offset;
          return setScrollState("scroll-down");
        }
      } else {
        if (lastOffset - offset > 10) {
          lastOffset = offset;
          setScrollState("scroll-up");
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleScroll);
    };
  }, [handleScroll]);
  return <div className={scrollState}>{children}</div>;
}
