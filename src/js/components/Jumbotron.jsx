import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="text-white mb-5"
      style={{
        backgroundImage: "url('https://picsum.photos/1600/600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh", // vertical height — tweak as needed
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Welcome to the Jumbotron</h1>
        <p className="lead col-lg-8 mx-auto">
          This full-width, full-height hero section is fully responsive and flush with the cards below.
        </p>
        <button className="btn btn-primary btn-lg mt-3">Learn More</button>
      </div>
    </div>
  );
};

export default Jumbotron;


