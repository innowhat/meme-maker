import React from "react";

function Footer() {
  return (
    <div className="navbar navbar-light bg-dark ">
      <div className="container">
        <div className=" navbar-brand">
          <img
            alt=""
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            width="30"
            height="30"
          />
        </div>
      </div>

      <p className="text-primary">React Version {React.version}</p>
    </div>
  );
}

export default Footer;
