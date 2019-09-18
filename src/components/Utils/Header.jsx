import React from "react";
import "./Styles/Header.scss";
import LogoRimac from "../../assets/logo-rimac.png"

const Header = () => {
    return (<div className="header"><img  className="margin-logo" src={LogoRimac}></img></div>)

}

export default Header;