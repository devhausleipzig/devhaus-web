import { useEffect } from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }, 250);
    });
    return () => {
      unlisten();
    };
  });

  return null;
});
