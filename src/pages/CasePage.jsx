import React from "react";
import "../styles.css";
import ASOSImg from "../img/asset18.png";
import JamnImg from "../img/asset19.png";
import WilsonImg from "../img/asset20.gif";

export default function CasePage() {
  return (
    <div className="Case">
      {" "}
      <article className="articleCase">
        <div className="sectionCase_top">
          <div
            style={{
              width: "30%",
              height: "350px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
              width: "70%",
              color: "#273043",
              margin: "auto",
              fontSize: "20",
              padding: "0 auto",
              backgroundSize: "contain",
              backgroundImage: `url(${ASOSImg})`
            }}
          >
            <p>case study</p>
          </div>
          <div
            style={{
              width: "30%",
              height: "350px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
              width: "70%",
              color: "#273043",
              margin: "auto",
              fontSize: "20",
              padding: "0 auto",
              backgroundSize: "contain",
              backgroundImage: `url(${WilsonImg})`
            }}
          >
            <p>case study</p>
          </div>
          <div
            style={{
              width: "30%",
              height: "350px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
              width: "70%",
              color: "#273043",
              margin: "auto",
              fontSize: "20",
              padding: "0 auto",
              backgroundSize: "contain",
              backgroundImage: `url(${JamnImg})`
            }}
          >
            <p>case study</p>
          </div>
        </div>
        <div className="sectionCase_down">
          <p>Explore more of our work</p>
        </div>
      </article>
    </div>
  );
}
