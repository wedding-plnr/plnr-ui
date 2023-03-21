import React from "react";
import "./css/App.css";
import './css/About.css'

function About() {
  return (
    <div className="AboutUsBlock">
        <h3>About Us</h3>
        <div className="infoBlock">
          <section className="WhoRwe">
            <h2>WHO ARE WE</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero iusto itaque asperiores vero quibusdam iure porro nam sed omnis voluptates?</p>
          </section>
          <section className="OurMission">
            <h2>OUR MISSSION</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero iusto itaque asperiores vero quibusdam iure porro nam sed omnis voluptates?</p>
        </section>
        <section className="Features">
            <h2>FEATURES</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero iusto itaque asperiores vero quibusdam iure porro nam sed omnis voluptates?</p>
        </section>
        <section className="Packs">
            <h2>PACKAGES</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero iusto itaque asperiores vero quibusdam iure porro nam sed omnis voluptates?</p>
          </section>
        </div>
    </div>
  );
}

export default About;
