import "./App.css";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {});
    return () => {
      unlisten();
    };
  });

  return null;
});
