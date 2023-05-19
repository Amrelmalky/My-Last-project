import React from "react";

import { NavLink, Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={`${classes["hide-when-mobile"]} ${classes.Mizo} `}>
        <h1>
          <Link to="/"> Learing React 2023 </Link>
        </h1>

        <ul class="flex">
          <li class="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul class="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </li>
          <li class="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul class="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li class="mini-projects">
                <a href="">mini projects + </a>
                <ul class="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul class="sub-ul sub-of-js">
              <li>
                <a href="">coming soon&#128293;</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <header style={{ backgroundColor: "red" }} className={classes["show-when-mobile"]}>
        <h1> Learning React</h1>
        <label className="absolute" htmlFor="burger">
          <i class="fas fa-bars"></i>
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i class="fas fa-plus"></i>
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i class="fas fa-plus"></i>
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i class="fas fa-plus"></i>
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i class="fas fa-plus"></i>
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon&#128293;</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
