import React from "react";

function Header() {
  return (
    <header className="navbar navbar-light  bg-default">
      <div className="container">
        <div className=" navbar-brand">
          <img
            alt=""
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            width="60"
            height="60"
          />
          <span className="strong">{" Vnicorn Meme Maker"}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
