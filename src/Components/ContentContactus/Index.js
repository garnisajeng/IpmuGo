import React from "react";
import Csscontactus from '../../Assets/CSS/Contact.css';

const ContentContactus = () => {
    return(
        <>
        {/* <section className="contact-contactus">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PV1GOfQNHSoD2xbE+QkPxCAF1NEevoEH3S10sibVcOQVnN" crossOrigin="anonymous"></link>
        <link rel='stylesheet' type="text/css" href={Csscontactus}></link>
        <div className="content-contactus">
            <h2>Contact Us</h2>
            <p>Tell us what your complaint is, so we can provide the best solution for all of us,
you are satisfied we are happy.</p>
        </div>

        <div className="container-contactus">
            <div className="contactInfo-contactus">
                <div className="box-contactus">
                <div className="icon-contactus"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div className="text-contactus">
                    <h3>Address</h3>
                    <p>4567 Sugar Camp Road, <br>Owatonna, Minnesota, <br>665799</br></br></p>
                    </div>
                </div>
                <div className="box-contactus">
                <div className="icon-contactus"><i class="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text-contactus">
                    <h3>Phone</h3>
                    <p>08588971967</p>
                    </div>
                </div>
                <div className="box-contactus">
                <div className="icon-contactus"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                <div className="text-contactus">
                    <h3>email</h3>
                    <p>ipmugo@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contactform-contactus">
                <form>
                    <h2>
                        Send Message
                    </h2>
                    <div className="inputbox-contactus">
                        <input type="text" name="" required="required"/>
                        <span>Full Name</span>
                    </div>
                    <div className="inputbox-contactus">
                        <input type="text" name="" required="required"/>
                        <span>Email</span>
                    </div>
                    <div className="inputbox-contactus">
                        <textarea required="required"></textarea>
                        <span>Type your messages...</span>
                    </div>
                    <div className="inputbox-contactus">
                        <input type="Submit" name="" value="Send"></input>
                    </div>
                </form>
            </div>
        </div>
    </section>  */}


    <section className="contactus">
    <link rel='stylesheet' type="text/css" href={Csscontactus}></link>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0,maximum-scale=1.0" />
    <div className="container-contactus">
        <div className="contactbox-contactus">
            <div className="left-contactus"></div>
            <div className="right-contactus">
                <h2>Contact Us</h2>
                <input type="text" className="field-contactus" placeholder="Your Name" />
                <input type="email" className="field-contactus" placeholder="Your Email" />
                <input type="text" className="field-contactus" placeholder="Your Phone" />
                <textarea className="field-area-contactus" placeholder="Message" />
                <button className="button-contactus">Send</button>
            </div>
        </div>

    </div>
    </section>
        </>
    )
}

export default ContentContactus;