import React from "react";
import "../styles.css";

export default function FooterPage() {
  return (
    <div className="footer">
      {" "}
      <div style={{ width: "30%" }}>Oursky</div>
      <ul className="ulFooter">
        Product
        <li className="li">Authgear</li>
        <li className="li">FormX.ai</li>
        <li className="li">Gesprek</li>
      </ul>
      <ul className="ulFooter">
        Services
        <li className="li">Digital Product Development</li>
        <li className="li">Mobile App Development</li>
        <li className="li">Web App Development</li>
        <li className="li">UI/UX and Digital Product Design</li>
        <li className="li">Machine Learning Solutions (Skylab.ai)</li>
        <li className="li">Microservices and Containerization</li>
      </ul>
      <ul className="ulFooter">
        Know More
        <li className="li">About Us</li>
        <li className="li">Tech Stack</li>
        <li className="li">Case Studies</li>
        <li className="li">Oursky Blog</li>
        <li className="li">Engineering Blog</li>
        <li className="li">Open-Source Projects</li>
      </ul>
      <ul className="ulFooter">
        Connect
        <li className="li">Facebook</li>
        <li className="li">Linkedin</li>
        <li className="li">Twitter</li>
        <li className="li">Service Enquiry</li>
        <li className="li">Find Us</li>
        <li className="li">Join Us</li>
      </ul>
    </div>
  );
}
