import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./index.scss";

const LoadingIndicator = () => {
  return (
    <div className="mask-spiner">
      <div className="spin-content">
        <CircularProgress value={300000} color="secondary" />
      </div>
    </div>
  );
};

export default LoadingIndicator;
