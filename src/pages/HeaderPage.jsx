import React from "react";
import "../styles.css";

export default function HeaderPage() {
  return (
    <div className="logo nav">
      Oursky
      <nav>
        <ul className="ul">
          <li className="li">Products</li>
          <li className="li">Services</li>
          <li className="li">Resourses</li>
          <li className="li">About Us</li>
          <li className="li">Start your project</li>
        </ul>
      </nav>
    </div>
  );
}
