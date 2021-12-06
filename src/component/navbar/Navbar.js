import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <i>{"<KHN&LION/>"}</i> <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="https://github.com/kaanarslan1990">Github</MenuLink>
        <MenuLink to="/login">Logout</MenuLink>

      </Menu>
    </Nav>
  );
};

export default Navbar;
