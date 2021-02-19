import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const StyledNavLink = styled.a`
  font-family: -apple-system, "Segoe UI";
  font-size: 16px;
  color: #1c274a;
  line-height: 25.6px;
  margin-right: 20px;
`;
// const StyledNavItem = styled.div`
//   margin-right: 20px;
// `;
const StyledButton = styled.a`
  background: red;
  border-radius: 6px;
  display: block;
  color: #fff;
  font-weight: 500;
  padding: 7px 20px;
  white-space: nowrap;
`;
const HeaderNav = (props) => {
  const { navItems, navBtn } = props;
  return (
    <>
      <StyledNav>
        {navItems.map((navItem, index) => {
          return (
            <StyledNavLink key={"navItem_" + index} href={navItem.link}>
              {navItem.name}
            </StyledNavLink>
          );
        })}
      </StyledNav>
      <StyledButton href={navBtn.link}>{navBtn.name}</StyledButton>
    </>
  );
};

export default HeaderNav;
// .header__nav__item {
//   margin-right: 20px;
// }
// .header__btn {
//   background: #faac2c;
//   border-radius: 6px;
//   display: block;
//   color: #fff;
//   font-weight: 500;
//   padding: 7px 20px;
//   white-space: nowrap;
// }
