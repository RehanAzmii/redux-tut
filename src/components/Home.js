import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img src="card.png" />
      </div>
      <h1>Home components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="apple.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price:$1000.00</span>
        </div>
        <div className="btn-wrapper button item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
