import React from "react";
import Css from '../../Assets/CSS/NavbarAboutus.css';
import logo from '../../Assets/images/logo-white.png';

const NavbarAboutus = () => {
    return(
        <>
        <section class="aboutus-navbar">
        <link rel='stylesheet' type="text/css" href={Css}></link>
        <link rel="preconncet" href="https://fonts.gstatic.com" crossOrigin=".."></link>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet"></link>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
	    {/* <!-- My CSS --> */}
        <link href='https://fonts.googleaois.com/icon?family=Material+Icons+Sharp' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        
               <div class="hero">
                <nav>
                <img className="navbar-logo" src={logo} alt="ipmu" />
                <form action="#">
				    <div class="form-input">
					    <input type="search" placeholder="Search..." />
					    <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				    </div>
                </form>
                    <ul>
                        <li><a href="#">Journals</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <td>
                    <button type="button" className="button1">Log in</button>
                    <button type="button" className="button2">Register</button>
                    </td>
                </nav>
                </div>
            </section>
        </>
    )
}

export default NavbarAboutus;