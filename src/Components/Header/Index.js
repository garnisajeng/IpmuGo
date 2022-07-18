import React from "react";
import logo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header
        class="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                {/* <!-- * Logo Start * --> */}
                <a href="index.html" class="logo">
                  <img src={logo} alt="Chain App Dev"></img>
                </a>
                {/* <!-- * Logo End * -->
            <!-- * Menu Start * --> */}
                <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="#services">Journals</a>
                  </li>
                  <li class="scroll-to-section">
                    <Link to={"/dashboarduser"}>testing</Link>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#about">Articles</a>
                  </li>
                  {/* <li class="scroll-to-section"><a href="#pricing">About</a></li> */}
                  <li class="scroll-to-section">
                    <Link to={"/about-us"}>About</Link>
                  </li>
                  {/* <li class="scroll-to-section"><a href="#newsletter">Contact</a></li> */}
                  <li class="scroll-to-section">
                    <Link to={"/contact-us"}>Contact</Link>
                  </li>
                  <li>
                    <div class="gradient-button">
                      <Link to={"/login"}>Sign In</Link>
                    </div>
                  </li>
                  <li>
                    <div class="gradient-button">
                      <Link to={"/regis"}>Sign Up</Link>
                    </div>
                  </li>
                  <li class="scroll-to-section">
                    <Link to={"/pagejournal"}>testing2</Link>
                  </li>
                </ul>
                <a class="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- * Menu End * --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
