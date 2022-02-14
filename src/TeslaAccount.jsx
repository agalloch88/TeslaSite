import React from 'react';
import './TeslaAccount.css';
import { Link, useHistory } from "react-router-dom";


function TeslaAccount() {
  return (
  <div className="teslaAccount">
      <div className="teslaAccount__header">
          <div className="teslaAccount__logo">
          <Link to="/">
          <img
            className="header__logoImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="Tesla styled logo"
          />
        </Link>
          </div>
      </div>
  </div>
  );
}

export default TeslaAccount;
