import React from 'react'
import { useState, useEffect } from "react";
import './header.css'
import profile from "../../assets/logo.png"
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
        <a href="index.html" className="nav__logo">
          <img src={profile} alt="" className="nav__logo__pic" />
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={() => showMenu(!Toggle)}
              >
                <span className="nav__icon-div">
                  <i className="bx bx-home nav__icon"></i>
                </span>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <span className="nav__icon-div">
                  <i className="bx bx-user nav__icon"></i>
                </span>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <span className="nav__icon-div">
                  <i className="bx bx-file nav__icon"></i>
                </span>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <span className="nav__icon-div">
                  <i className="bx bx-briefcase-alt-2 nav__icon"></i>
                </span>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <span className="nav__icon-div">
                  <i className="bx bx-send nav__icon"></i>
                </span>
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a
                href="https://drive.google.com/file/d/1TcZ5J6ragfqIMWExOZztM_xQTZu6Ud9f/view?usp=share_link"
                target="_blank"
                className="nav__link"
                onClick={() => showMenu(!Toggle)}
              >
                <button
                  style={{
                    color: "white",
                    background: "#1746A2",
                    padding: "2px 10px",
                    borderRadius: ".3rem",
                  }}
                >
                  <span className="nav__icon-div">
                    <i className="bx bx-image-alt nav__icon"></i>
                  </span>
                  Resume
                </button>
              </a>
            </li>
          </ul>
          <span className="nav__icon-div">
            <i
              className="bx bx-x nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </span>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header