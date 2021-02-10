import React from "react";
import "../styles.css";
import devImg from "../img/icon-dev.svg";
import skylabImg from "../img/icon-skylab.svg";
import uxuiImg from "../img/asset4.png";
import microImg from "../img/icon-micro.svg";

export default function ServicesPage() {
  return (
    <div className="Services">
      {" "}
      <article className="articleServices">
        <div className="pStyleServices">
          <p className="pServices">
            Digital transformation powered by ingenuity
          </p>
          <p className="pServicescontent">
            We don’t just build apps. Oursky creates digital experiences that
            help our partners succeed in today’s fast-paced business landscape.
            We work with founders in creating their blueprints for success —
            from minimum viable products (MVPs) to interactive prototypes.
            Oursky uses an iterative approach to help startups launch faster,
            scale quickly, and deliver great user experience. Oursky partners
            with enterprises to fast-track their digital transformation, helping
            them adopt and transition to cloud-native technologies and
            microservices.
          </p>
        </div>
        <div className="core">
          Core Services
          <ul className="ulCore">
            <li className="liCore">
              <div className="liLeft">
                <img src={devImg} width="100%" height="100%" alt="一張圖片" />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
            <li className="liCore">
              <div className="liLeft">
                <img
                  src={skylabImg}
                  width="30px"
                  height="30px"
                  alt="一張圖片"
                />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
            <li className="liCore">
              <div className="liLeft">
                <img src={uxuiImg} width="30px" height="30px" alt="一張圖片" />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
            <li className="liCore">
              <div className="liLeft">
                <img src={microImg} width="100%" height="100%" alt="一張圖片" />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
