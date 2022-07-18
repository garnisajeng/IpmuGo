import React from "react";
import HeadingLineDec from '../../Assets/images/heading-line-dec.png';
import Author1 from '../../Assets/images/author1.jpg';
import Author2 from '../../Assets/images/author2.jpg';
import Author3 from '../../Assets/images/author3.jpg';
import Author4 from '../../Assets/images/author4.jpg';

const Services = () => {
    return(
        <>
       <div id="services" class="services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4>FEATURED <em> AUTHORS</em></h4>
            <img src={HeadingLineDec} alt=""/>
            <p>If you need the greatest collection of HTML templates for your business, please visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">TooCSS</a> Blog. If you need to have a contact form PHP script, go to <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more information.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
      <div class="col-lg-3">
          <div class="service-item second-service">
            <div></div>
            <img src={Author1} alt=""/>
            <h4 class='center'>Willy Wonka</h4>
            <p>Hello World.</p>
            <div class="text-button">
              <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item second-service">
            <div></div>
            <img src={Author2} alt=""/>
            <h4 class='center'>Willy Wonka</h4>
            <p>Hello World.</p>
            <div class="text-button">
              <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item third-service">
            <div></div>
            <img src={Author3} alt=""/>
            <h4 class='center'>Willy Wonka</h4>
            <p>Hello World.</p>
            <div class="text-button">
              <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item fourth-service">
            <div></div>
            <img src={Author4} alt=""/>
            <h4 class='center'>Willy Wonka</h4>
            <p>Hello World.</p>
            <div class="text-button">
              <a href="#">Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Services;