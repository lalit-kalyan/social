import React from "react";
import { Link } from "react-router-dom";
import "./error.css"

const Error = () => {
  return (
    <div className="error" >
      <h1>404 PAGE NOT FOUND</h1>
      <h3>which page your are looking for is not a page this website</h3>
      <h4>Thank You</h4>
      <Link to="/" >
      <p>GO BACKE TO THE HOME PAGE </p>
      </Link>
    </div>
  );
};

export default Error;
