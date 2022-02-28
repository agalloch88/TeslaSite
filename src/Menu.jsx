import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import CloseIcon from "@material-ui/icons/Close";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className="menu__wrapper"
      show={isMenuOpen}
      style={{
        transform: `${(props) =>
          props.show ? "translateX(0)" : "translateX(100%)"}`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="menu__close">
        <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <div className="menu">
        <MenuItem title="Existing Inventory" />
        <MenuItem title="Used Inventory" />
        <MenuItem title="Trade-In" />
        <MenuItem title="Test Drive" />
        <MenuItem title="Cybertruck" />
        <MenuItem title="Roadster" />
        <MenuItem title="Semi" />
        <MenuItem title="Charging" />
        <MenuItem title="Powerwall" />
        <MenuItem title="Commercial Energy" />
        <MenuItem title="Utilities" />
        <MenuItem title="Find Us" />
        <MenuItem title="Support" />
        <MenuItem title="Investor Relations" />
        <MenuItem title="United States" />
      </div>
    </div>
  );
}

export default Menu;
