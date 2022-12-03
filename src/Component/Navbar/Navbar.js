import React from "react";
import NavbarBg from "../../Resources/Images/navbar60.png";
import FooterBg from "../../Resources/Images/footer61.png";
import SvgTest from "../../Resources/Images/1.svg";
import styled from "styled-components";

const NavbarBgtwo = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  text-align: center;
`;

const CompanyImg = styled.img``;

const FooterBgtwo = styled.img`
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  height: 61px;
`;

const Navbar = () => {
  return (
    <>
      <NavbarBgtwo src={NavbarBg}></NavbarBgtwo>

      <FooterBgtwo src={FooterBg}></FooterBgtwo>
    </>
  );
};

export default Navbar;
