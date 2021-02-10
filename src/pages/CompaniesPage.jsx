import React from "react";
import "../styles.css";
import asosImg from "../img/asset 8.svg";
import thomsonImg from "../img/asset 9.svg";
import standImg from "../img/asset 10.svg";
import homgImg from "../img/asset 11.svg";
import axiaImg from "../img/asset 12.svg";
import wilsonImg from "../img/asset 13.svg";
import cimicImg from "../img/asset 14.svg";
import hktImg from "../img/asset 15.svg";

export default function CompaniesPage() {
  return (
    <div className="Companies">
      <article className="articleCompanies">
        <div className="pCompanies">
          <p className="pCompaniesContent">
            We help companies around the world bring their ideas to life.
          </p>
        </div>

        <div className="pCompaniesIcon">
          <ul className="ulIcon">
            <li className="liIcon">
              <img src={asosImg} width="100px" alt="一張圖片" />
            </li>
            <li className="liIcon">
              <img src={thomsonImg} width="100px" alt="一張圖片" />
            </li>
            <li className="liIcon">
              <img src={standImg} width="100px" alt="一張圖片" />
            </li>
            <li className="liIcon">
              <img src={homgImg} width="100px" alt="一張圖片" />
            </li>
          </ul>
          <ul className="ulIcon">
            <li className="liIcon">
              <img src={axiaImg} width="100px" alt="一張圖片" />
            </li>
            <li className="liIcon">
              <img src={wilsonImg} width="100px" alt="一張圖片" />
            </li>
            <li className="liIcon">
              <img src={cimicImg} width="100px" alt="一張圖片" />
            </li>
            <li className="liIcon">
              <img src={hktImg} width="100px" alt="一張圖片" />
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
