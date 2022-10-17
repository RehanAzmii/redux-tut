import React from "react";

const Header = (props) => {
  console.log("home", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="card.png" />
      </div>
    </div>
  );
};

export default Header;
