import React from 'react'
import { useState, useEffect } from "react";
import './header.css'
import profile from "../../assets/logo.png"
import CV from "../../assets/Gagan_Jindal_Resume.pdf";
import { Flex } from '@chakra-ui/react';
const Header = () => {
 const [Toggle, showMenu] = useState(false)
 const [font, setFont] = useState("var(--body-color)");
 const [navColor, setnavColor] = useState("transparent");
 const listenScrollEvent = () => {
   if(window.scrollY > 50){
      setnavColor("#FFFFFF");
      setFont("var(--title-color-light")
   }else{
      setnavColor("transparent");
      setFont("var(--body-color)");
   }
 };
 useEffect(() => {
   window.addEventListener("scroll", listenScrollEvent);
   return () => {
     window.removeEventListener("scroll", listenScrollEvent);
   };
 }, []);
  return (
    <header
      className={"header"}
      style={{ backgroundColor: navColor, color: font }}
    >
      <nav className="nav container">
        <Flex alignItems={"center"} gap={2}>
          <a href="index.html" className="nav__logo">
            <img src={profile} alt="" className="nav__logo__pic" />
          </a>
        </Flex>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <a
                download=""
                href={CV}
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <i className="uil uil-scenery nav__icon"></i>Resume
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header