import React from "react";
import logo from "../../assets/elexishairlogo.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">About ElexisHairs</h1>
          <p className="about-subtitle">Affordable + Luxury Hair Brand</p>
          <p className="about-description">
            Founded in <strong>January 2023</strong>, ElexisHairs was born out of
            a simple dream — to make every woman feel confident, beautiful, and
            valued. We believe luxury doesn’t have to be overpriced. From
            <strong> students</strong> to <strong>working women</strong> and{" "}
            <strong>brides</strong>, our goal is to make sure everyone enjoys
            premium, long-lasting hair without breaking the bank.
          </p>

          <p className="about-description">
            Every strand in our collection is carefully selected for softness,
            shine, and durability. Whether you love <em>curly</em>,{" "}
            <em>straight</em>, or <em>bouncy</em> textures — we’ve got something
            perfect for you.
          </p>

          <p className="about-description">
            At ElexisHairs, we don’t just sell hair — we sell confidence. Our
            brand represents quality, class, and care for every woman who wants
            to express herself through her crown.
          </p>

          <div className="about-socials">
            <a
              href="https://www.instagram.com/elexishairs.ng"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@elexishairs.ng"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="about-image">
          <img
            src={logo}
            alt="ElexisHairs collection"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
