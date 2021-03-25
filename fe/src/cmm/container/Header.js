import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../component/Header.css";

const popupnav = document.querySelector(".nav__menu");

const headerChange = document.querySelector(".header");
const changeColora = document.querySelectorAll(".header__menu-nav li a");
const changeImg = document.querySelector(".header__menu-icon img");
const changeIcon = document.querySelector(".header__menu-nav-btn i");

const handleOpenSubmenu = () => {
  popupnav.style.display = "block";
};

const handleCloseSubmenu = () => {
  popupnav.style.display = "none";
};

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log("changeColora.length", changeColora.length);
    headerChange.style.backgroundColor = "#fff";
    headerChange.style.borderBottom = "2px solid black";
    changeImg.style.backgroundColor = "blue";
    for (let i = 0; i < changeColora.length; i++) {
      changeColora[i].style.color = "black";
    }
  } else {
    headerChange.style.backgroundColor = "#151726";
    changeImg.style.backgroundColor = "";
    for (let i = 0; i < changeColora.length; i++) {
      changeColora[i].style.color = "white";
    }
  }
};

const Header = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="header__menu">
          <div className="header__menu-icon">
            <Link to="/">
              {" "}
              <img src={require("../../images/logo.png").default} />
            </Link>
          </div>
          <nav className="header__menu-nav">
            <ul>
              <li>
                <a>Beat Camp</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <Link to="/intro" className="header__submenu-a">
                        Bit Camp Introduction
                      </Link>
                    </li>
                    <li>
                      <Link to="/direction" className="header__submenu-a">
                        Directions
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a>Curriculum</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <Link to="/curriculum" className="header__submenu-a">
                        Government funding process
                      </Link>
                    </li>
                    <li>
                      <Link to="/curriculum" className="header__submenu-a">
                        Incumbent Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/curriculum" className="header__submenu-a">
                        Basic lecture
                      </Link>
                    </li>
                    <li>
                      <Link to="/curriculum" className="header__submenu-a">
                        General Course
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a>Employment and Startup Support Center</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <Link to="/employ" className="header__submenu-a">
                        Employment and Startup
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="header__submenu-a">
                        Support Center
                      </Link>
                    </li>
                    <li>
                      <Link to="/recruitment" className="header__submenu-a">
                        Recruitment Announcement
                      </Link>
                    </li>
                    <li>
                      <Link to="/overseas" className="header__submenu-a">
                        Overseas employment{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/startup" className="header__submenu-a">
                        Start up
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a>Blog</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <Link to="/blog" className="header__submenu-a">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a>Mentoring</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <Link to="/mentoring" className="header__submenu-a">
                        Mentoring
                      </Link>
                    </li>
                    <li>
                      <Link to="/find" className="header__submenu-a">
                        Find a Mentor
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
          <div className="header__menu-nav-btn">
            <i className="fas fa-align-justify" onClick={handleOpenSubmenu} />
          </div>
        </div>
      </header>
      {/* menu nav when hover */}
      <section className="nav__menu">
        <div className="nav__menu-title">
          <h5>All Menu</h5>
          <i
            className="fas fa-times"
            id="closesubmenu"
            onClick={handleCloseSubmenu}
          />
        </div>
        <hr />
        <div className="nav__menu-btn">
          <div className="language">
            <button>Ko</button>
          </div>
          <div className="language">
            <button>En</button>
          </div>
          <div className="singup">
            <button>Sign Up</button>
          </div>
          <div className="login">
            <button>Login</button>
          </div>
        </div>
        <div className="nav__menu-link">
          <div className="item1">
            <h5>Beat Camp</h5>
            <ul>
              <li>
                <a>Bit Camp Introduction</a>
              </li>
              <li>
                <a>Directions</a>
              </li>
            </ul>
          </div>
          <div className="item2">
            <h5>Curriculum</h5>
            <ul>
              <li>
                <a>Government funding process</a>
              </li>
              <li>
                <a>Incumbent Course</a>
              </li>
              <li>
                <a>Basic lecture</a>
              </li>
              <li>
                <a>General Course</a>
              </li>
            </ul>
          </div>
          <div className="item3">
            <h5>Employment and Startup Support Center</h5>
            <ul>
              <li>
                <a>Employment and Startup Support Center</a>
              </li>
              <li>
                <a>Recruitment Announcement</a>
              </li>
              <li>
                <a>Overseas employment and start-up</a>
              </li>
            </ul>
          </div>
          <div className="item4">
            <h5>blog</h5>
            <ul>
              <li>
                <a>blog</a>
              </li>
            </ul>
          </div>
          <div className="item5">
            <h5>Mentoring</h5>
            <ul>
              <li>
                <a>Mentoring</a>
              </li>
              <li>
                <a>Find a Mentor</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactus">
          <h5>
            <a>CONTACT US</a>
          </h5>
        </div>
      </section>
      {/* END HEADER */}
    </div>
  );
};

export default Header;
