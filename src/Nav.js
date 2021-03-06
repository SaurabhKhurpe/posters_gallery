import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://cdn1.iconfinder.com/data/icons/smashicons-movies-yellow/60/9_-Action-_Yellow-512.png"
          alt="Posters Gallery Logo"
        />

        <img
          className="nav__board"
          src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.0-9/18447564_464896380513931_2912333497307753553_n.jpg?_nc_cat=110&ccb=2&_nc_sid=dd9801&_nc_ohc=w4OqIcGvZJ8AX9B1mgp&_nc_ht=scontent.fpnq7-1.fna&oh=a13d0aa6e1c944b9e9245378dddffb3d&oe=604506C7"
          alt="Posters Gallery Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
