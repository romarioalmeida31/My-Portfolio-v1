import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history, children }) {
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);
// eslint-disable-next-line
  return <Fragment>{children}</Fragment>;
}
// eslint-disable-next-line
export default withRouter(ScrollToTop);
