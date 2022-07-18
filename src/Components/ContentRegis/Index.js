import React from "react";
import Register from '../../Assets/CSS/Regis.css';
import Logobg from '../../Assets/images/porto1.jpg';
import Facebook from '../../Assets/images/facebook.png';
import Twitter from '../../Assets/images/twitter.png';
import Instagram from '../../Assets/images/instagram.png';

const ContentRegis = () => {
    return(
        <>
        <section className="section-regis">
        <link rel='stylesheet' type="text/css" href={Register}></link>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <div className="img-regis">
            <img class="img-bg-regis" src={Logobg} alt="..." />
        </div>
        <div className="content-regis">
            <div className="form-regis">
                <h2>Register</h2>
                <p>Let’s get you all set up so you can verify your personal account and begging setting up your profile.</p>
                <ul className="sosmed-regis">
                    <li><img src={Facebook}/></li>
                    <li><img src={Twitter}/></li>
                    <li><img src={Instagram}/></li>
                </ul>
                <form>
                    <div className="form-row">
                    
                    <div className="input-regis">
                        <span className="span-login">Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="input-regis">
                        <span className="span-login">Password</span>
                        <input type="password" name=""/>
                    </div>
                    <div className="input-regis">
                        <span className="span-login">Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="input-regis">
                        <span className="span-login">Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="input-regis">
                        <span className="span-login">Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="input-regis">
                        <span className="span-login">Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className="remember-regis">
                        <label><input type="checkbox" name="" />  Yes, I want to receive IpmuGo email</label>
                    </div>
                    <div className="remember-regis">
                        <label><input type="checkbox" name="" />  I agree to all the <a href="#">Term</a>, <a href="#">Privacy Policy</a>, and <a href="#">Fees</a></label>
                    </div>
                    <div className="input-regis">
                        <input type="submit" value="Create Account" name=""/>
                    </div>
                    <div className="input-regis">
                        <p>Already have an account? <a href="#">Sign In</a></p>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        </section>
        </>
    )
}

export default ContentRegis;