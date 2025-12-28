import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div
      className="container d-flex justify-content-center align-items-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center p-4">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <a href={learnMore} className="btn btn-primary mt-3">
            Learn More
          </a>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
