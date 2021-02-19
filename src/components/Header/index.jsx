import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
//import Container from "./components/Container";
import Logo from "../../images/Logo";
import Nav from "./HeaderNav";
import { BREAKPOINTS } from "../../util";

// data
const logo = {
  id: "logo",
  link: "#",
  type: "header__logo__img",
  name: ""
};
const headerNavItems = [
  { id: "item1", link: "#", type: "header__nav__item", name: "Intro" },
  {
    id: "item2",
    link: "#",
    type: "header__nav__item",
    name: "Transport"
  },
  { id: "item3", link: "#", type: "header__nav__item", name: "Hotel" },
  { id: "item4", link: "#", type: "header__nav__item", name: "Food" }
];
const headerBtn = {
  id: "btn",
  link: "#",
  type: "header__btn",
  name: "Start your plan"
};
// styled
const ResponsiveBar = styled.div``;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const StyledHeaderLogo = styled.div`
  max-width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    width: 100%;
  }
`;
const StyledHeaderLogoLink = styled.a`
  width: 300px;
  height: 50px;
`;
const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    display: none;
    flex-direction: column;
    justify-items: center;
    width: 70vw;
    padding: 15px 5px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    /*     z-index:3; */
    position: absolute;
    top: 0;
  }
`;
const StyledHeader = styled.header`
  height: 73px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 20;
`;
const StyledResponsiveIcon = styled.i`
  border-radius: 20%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  display: none;
  color: #000;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// main
const Header = () => {
  return (
    <StyledHeader>
      <ResponsiveBar />
      <Container>
        <StyledContent>
          <StyledHeaderLogo>
            <StyledHeaderLogoLink href={logo.link}>
              <Logo />
            </StyledHeaderLogoLink>
            <StyledResponsiveIcon className="fas fa-bars" />
          </StyledHeaderLogo>
          <StyledMenu>
            <Nav navItems={headerNavItems} navBtn={headerBtn} />
          </StyledMenu>
        </StyledContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
