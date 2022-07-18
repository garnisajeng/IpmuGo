import React from "react";
import Login from '../../Assets/CSS/Login.css';
import Logobg from '../../Assets/images/porto1.jpg';
import Facebook from '../../Assets/images/facebook.png';
import Twitter from '../../Assets/images/twitter.png';
import Instagram from '../../Assets/images/instagram.png';

const LoginBx = () => {
    return(
        <>
        <section className="section-login">
        <link rel='stylesheet' type="text/css" href={Login}></link>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <div className="img-login">
            <img class="img-bg" src={Logobg} alt="..." />
        </div>
        <div className="content-login">
            <div className="formBx">
                <h2>Login</h2>
                <form>
                    <div className="inputBx">
                        <span className="span-login">Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="inputBx">
                        <span className="span-login">Password</span>
                        <input type="password" name=""/>
                    </div>
                    <div className="remember-login">
                        <label><input type="checkbox" name="" /> Remember me</label>
                    </div>
                    <div className="inputBx">
                        <input type="submit" name="" />
                    </div>
                    <div className="inputBx">
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </div>
                </form>
                <h3>Login with</h3>
                <ul className="sosmed-login">
                    <li><img src={Facebook}/></li>
                    <li><img src={Twitter}/></li>
                    <li><img src={Instagram}/></li>
                </ul>
            </div>
        </div>
        </section>
        </>
    )
}

export default LoginBx;