import React from "react";

const Home = (props) => {
  console.log("props", props);
  return (
    <div>
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
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i phone 11" })
            }
          >
            Add To Cart
          </button>
          <button
            onClick={() => props.removeToCartHandler()}
            className="remove-cart-btn"
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
