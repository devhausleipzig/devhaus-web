import { useEffect } from "react";

export const ScrollToTop = function ScrollToTop() {
  useEffect(() => {
    const unlisten = () =>
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }, 250);
    return () => {
      unlisten();
    };
  });

  return null;
};
