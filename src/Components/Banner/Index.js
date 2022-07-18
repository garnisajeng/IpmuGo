import React from "react";
import SliderDec from '../../Assets/images/quote.png';
import Bannercss from '../../Assets/CSS/Banner.css';
import Search from '../../Assets/images/search-x.png';

const Banner = () => {
    return(
        <>
        
            <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>IPMUGO Digital Library</h2>
                    <p>Provides full-text of open access research articles in one go</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="white-button first-button scroll-to-section">
                      <a href="#contact">Example <i class="fab fa-apple"></i></a>
                    </div>
                    <div class="white-button scroll-to-section">
                      <a href="#contact">Example <i class="fab fa-google-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={SliderDec} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 



{/*
    <link rel='stylesheet' type="text/css" href={Bannercss}></link>
    <body>
      <div className="container-banner">
      <div className="content-banner">
      <h1>Learn Anything<br>You Want</br></h1>
          <div className="search-box">
            <input type="text" placeholder="search" />
            <button type="submit"><img src={Search}/></button>
          </div>
        </div>
      </div>
    </body> */}
        </>
    )
}

export default Banner;