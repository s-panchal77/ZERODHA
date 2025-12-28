import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-5 op">
        <h3>Zerodha Products</h3>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings
            <FontAwesomeIcon icon="arrow-right-long" className="ms-2" />{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
