import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" alt="Hero Img" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Versity
            <FontAwesomeIcon icon="arrow-right-long" className="ms-2" />{" "}
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            TradingQ&A
            <FontAwesomeIcon icon="arrow-right-long" className="ms-2" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Education;
