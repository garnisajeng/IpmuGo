import Banner from "../../Components/Banner/Index";
import React from "react";
import Services from "../../Components/Services/Index";
import About from "../../Components/About/Index";
import Clients from "../../Components/Clients/Index";
import Pricing from "../../Components/Pricing/Index";
import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Index";

const Home = () => {
    return(
        <>
        <Header />
        <Banner/> 
        <Services />
        <Pricing />
        <Clients />
        <About />
        <Footer />
          
        </>
    )
}

export default Home;