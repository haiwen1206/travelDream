import React from "react";
import HeaderPage from "./HeaderPage.jsx";
import IntroPage from "./IntroPage.jsx";
import AboutPage from "./AboutPage.jsx";
import CasePage from "./CasePage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import ProductsPage from "./ProductsPage.jsx";
import CompaniesPage from "./CompaniesPage.jsx";
import TalkPage from "./TalkPage.jsx";
import FooterPage from "./FooterPage.jsx";
import { StyledDiv } from "./HomePage.styled";

export default function HomePage() {
  return (
    <StyledDiv>
      <HeaderPage />
      <IntroPage />
      <AboutPage />
      <CasePage />
      <ServicesPage />
      <ProductsPage />
      <CompaniesPage />
      <TalkPage />
      <FooterPage />
    </StyledDiv>
  );
}
