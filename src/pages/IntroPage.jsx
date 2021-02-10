import React from "react";
import "../styles.css";
import ourskyHero from "../img/oursky-hero.png";

export default function IntroPage() {
  return (
    <div className="Intro">
      <article className="articleIntro">
        <div>
          <p className="pIntro">
            We design and develop award-winning applications
          </p>
        </div>
        <img src={ourskyHero} width="50%" height="80%" alt="ourskyHero" />
      </article>
    </div>
  );
}
