import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="heading">
        <h1>Page Not Found</h1>
      </div>
      <div className="link-div">
        <Link to="/" className="link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
