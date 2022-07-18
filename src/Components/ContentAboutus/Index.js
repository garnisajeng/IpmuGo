import React from "react";
import Css from '../../Assets/CSS/Aboutus.css';
import Author1 from '../../Assets/images/porto1.jpg';

const ContentAboutus = () => {
    return(
        <>
        <section class="about-us">
        <link rel='stylesheet' type="text/css" href={Css}></link>
        <link rel="preconncet" href="https://fonts.googleapis.com"></link>
        <link rel="preconncet" href="https://fonts.gstatic.com" crossOrigin=".."></link>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        
               <div class="main">
               <img src={Author1} alt=""/>
                <div class="about-text">
                    <h1>About Us</h1>
                    <h5>IPMUGO<span> Digital Library</span> </h5>
                    <p>The goal of the IPMUGO Online Library is to provide published scientific articles for open societies through online archiving. Through IPMUGO Online Library we want to provide a place for readers to get the full-text of open access articles they want quickly in one click. Achieving it will require the participation of open publishers, government officials, and technologists. If you are interested to suggest a journal to be included in our coverage.</p>
                    <button type="button">Let's Talk</button>
                </div></div>
            </section>
        </>
    )
}

export default ContentAboutus;