import React from "react";
import "./Header.css";

import IconButton from "@material-ui/core/IconButton";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";


function Header() {
  return (
    <header className="header">
      <IconButton className="header__button">
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://cdn2.iconfinder.com/data/icons/famous-logos-in-orange/512/logo_orange_tinder-92-512.png"
        alt="tinder-logo"
      />
      <IconButton className="header__button">
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </header>
  );
}

export default Header;
