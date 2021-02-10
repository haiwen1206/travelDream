import React from "react";
import "../styles.css";
import AboutImg from "../img/img2.jpg";

export default function AboutPage() {
  return (
    <div className="About">
      <article className="articleAbout">
        <div className="pStyleAbout">
          <p className="pAbout">
            Oursky is a team of talented developers, designers, data scientists,
            product and project managers and QA engineers working from Hong
            Kong, London, and Taipei. Using cutting-edge technologies, we are an
            end-to-end digital product, web, and mobile app development
            consultancy whose creations have garnered millions of downloads and
            awards from the Apple App Store and Asia Smart Apps Awards.
          </p>
        </div>
        <div className="imgAbout">
          <img src={AboutImg} width="100%" alt="一張圖片" />
        </div>
      </article>
    </div>
  );
}
