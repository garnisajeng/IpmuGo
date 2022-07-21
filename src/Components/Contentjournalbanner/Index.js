import React from "react";
import Css from "../../Assets/CSS/Pagejournal.css";
import logo from "../../Assets/images/logo-blue.png";
import Profile from "../../Assets/images/people.png";
import background from "../../Assets/images/t1.jpg";

const Contentjournalbanner = () => {
  return (
    <>
      <section class="jurnal" style={{ background: "#FCFCFC" }}>
        <link
          rel="preconncet"
          href="https://fonts.gstatic.com"
          crossOrigin=".."
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleaois.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        <div
          className="bg-article"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            width: "2000px",
            height: "160px",
            boxShadow: "1px 2px 9px #b1b1b1",
            backgroundSize: "cover",
            display: "grid",
            gridTemplateColumns: "500px 1fr",
            gridTemplateRows: "50px 1fr",
            border: "5px dotted $color4",
          }}
        >
          <div
            className="bg2-article"
            style={{
              background: "#fff",
              backgroundRepeat: "no-repeat",
              width: "900px",
              height: "167px",
              boxShadow: "1px 2px 9px #b1b1b1",
              backgroundSize: "cover",
              alignItems: "center",
              gridArea: "2/2/2/2",
              opacity: 1,
              border: "3px dotted $color4",
              borderRadius: "22px",
              textAlign: "center",
            }}
          >
            <h4 style={{ marginTop: "20px" }}>IPMUGO Digital Library</h4>
            <p>provides full-text of open access research articles in one go</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "36px",
                width: "500px",
                marginLeft: "200px",
              }}
            >
              <input
                type="search"
                placeholder="Search..."
                style={{
                  flexGrow: 1,
                  padding: "0 16px",
                  height: "100%",
                  border: "none",
                  background: "#eee",
                  borderRadius: "36px 0 0 36px",
                  outline: "none",
                  width: "100%",
                  color: "#342E37",
                }}
              />
              <button
                type="submit"
                class="search-btn"
                style={{
                  width: "80px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#3C91E6",
                  color: "#F9F9F9",
                  fontSize: "18px",
                  border: "none",
                  outline: "none",
                  borderRadius: "0 36px 36px 0",
                  cursor: "pointer",
                }}
              >
                <i class="bx bx-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contentjournalbanner;
