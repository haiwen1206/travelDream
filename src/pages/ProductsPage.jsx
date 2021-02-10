import React from "react";
import "../styles.css";
import formImg from "../img/asset5.png";
import authImg from "../img/asset6.png";
import gesImg from "../img/asset7.png";

export default function ProductsPage() {
  return (
    <div className="Products">
      {" "}
      <article className="articleProducts">
        <div className="ProductsTitle">
          Products
          <ul className="ulCore">
            <li className="liCore">
              <div className="liLeft">
                <img src={formImg} width="30px" alt="一張圖片" />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
            <li className="liCore">
              <div className="liLeft">
                <img src={authImg} width="30px" alt="一張圖片" />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
            <li className="liCore">
              <div className="liLeft">
                <img src={gesImg} width="30px" alt="一張圖片" />
              </div>
              <div className="liRight">Digital Product Development</div>
            </li>
          </ul>
        </div>

        <div className="pStyleProducts">
          <p className="pProducts">
            We’re your low-code solution for your next IT project.
          </p>
          <p className="pProductsContent">
            We develop various open-source solutions that can be used by
            developers and organizations around the world to solve problems. At
            the heart of Oursky is the art of software engineering: translating
            expertise and ideas into opportunities.
          </p>
        </div>
      </article>
    </div>
  );
}
