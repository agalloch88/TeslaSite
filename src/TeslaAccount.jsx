import React from "react";
import "./TeslaAccount.css";
import { Link, useHistory } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function TeslaAccount({isMenuOpen, setIsMenuOpen}) {
    const user = useSelector(selectUser)
    const logoutOfApp = () => {

    }

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
        <div className="teslaAccount__links">
          <Link to="/tesla-account">Model S</Link>
          <Link to="/tesla-account">Model 3</Link>
          <Link to="/tesla-account">Model X</Link>
          <Link to="/tesla-account">Model Y</Link>
          <Link to="/tesla-account">Solar Roof</Link>
          <Link to="/tesla-account">Solar Panels</Link>
          <Link to="/tesla-account">Shop</Link>
          <Link to="/tesla-account">Account</Link>
          <Link onClick={logoutOfApp}>Log Out</Link>
          <div className="teslaAccount__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : "Menu"}

          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
          <div className="teslaAccount__person">
              <h4>{user?.displayName + "'s Tesla"}</h4>
          </div>
          <div className="teslaAccount__infoRight">
              <Link>Home</Link>
              <Link>Account</Link>
              <Link>History</Link>
              <Link onClick={logoutOfApp}>Log Out</Link>
          </div>
      </div>
      <div className="teslaAccount__car">
          
      </div>
    </div>
  );
}

export default TeslaAccount;
