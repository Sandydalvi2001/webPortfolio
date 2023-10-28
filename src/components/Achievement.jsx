import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import styled, { createGlobalStyle } from "styled-components";
import React, { useEffect } from "react";
import gsap from "gsap";
import { rs1 } from "../assets";
import { rs2 } from "../assets";
import { rs3 } from "../assets";
import { styles } from "../styles";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'FontOne';
  src: url('../Assets/Beatrice-Regular.otf');
}

@font-face {
  font-family: 'FontTwo';
  src: url('../Assets/ElgocAlt-Medium.otf');
}
  /* Import the Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap');
`;


const Achievement = () => {

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Timeline
    var tl = gsap.timeline();

    // Animation using the created timeline
    tl.to("#imgTwo", { rotateX: "0deg" })
      .to("#imgThree", { rotateX: "0deg" })
      .to(".resume", { marginTop: "50vh", scale: "0.8" }, 'sa')
      .to(".img", { filter: "grayscale(1)" }, 'sa')
      .to(".text", { marginTop: "-110vh", scale: "0.9" }, 'sa')
      .to(".overlay", { opacity: 1 }, 'sa');

    // ScrollTrigger
    ScrollTrigger.create({
      trigger: "#main",
      start: "30% 50%",
      end: "70% 90%",
      scrub: true,
      animation: tl,
    });
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts


  return (
    <>
      <Helmet>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
      </Helmet>
      <GlobalStyle/>
      <div
        id="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          
        }}
      >
        <p
          className={styles.sectionSubText}
          style={{
            width: "60%",
            //fontFamily: "Poppins, sans-serif",
            // color: "#fff",
            fontSize: "1vw",
            paddingTop: "20vh",
            paddingBottom: "10vh",
          }}
        >
          Long story short, I'm currently looking for a new project where I
          could step in on many different levels: Android app, Web app, , design, and more!
          <br />
          <br />
          You'd like to work with someone who's passionate, experienced,
          polyvalent, constantly learning, and who knows the internet like the
          back of his hand? 👋
          <br />
          <br />
          So here's a short glimpse of my resume
        </p>
        <div className="resume" style={{ width: "38%", height: "105vh" }}>
          <div
            id="imgOne"
            className="img"
            style={{ width: "100%", height: "37vh", transformOrigin: "top" }}
          >
            <img src={rs1} alt="" style={{ width: "100%" }} />
          </div>
          <div
            id="imgTwo"
            className="img"
            style={{
              transform: "perspective(1000px) rotateX(-90deg)",
              width: "100%",
              height: "36.5vh",
              transformOrigin: "top",
            }}
          >
            <img src={rs2} alt="" style={{ width: "100%" }} />
          </div>
          <div
            id="imgThree"
            className="img"
            style={{
              transform: "perspective(1000px) rotateX(-90deg)",
              width: "100%",
              height: "35vh",
              transformOrigin: "top",
            }}
          >
            <img src={rs3} alt="" style={{ width: "100%" }} />
          </div>
        </div>
        <div
          className="text"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            zIndex: 99,
          }}
        >
          <h1 className="text1" style={{
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage: `url('https://media.giphy.com/media/3ohhwgLQiCF365bIR2/giphy.gif')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              fontWeight: 400,
              fontSize: "5vw",
            }}>
            Created by <br />
            Sandy Dalvi
          </h1>
        </div>
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            backgroundColor: "#111111bf",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    </>
  );
};

export default Achievement;
