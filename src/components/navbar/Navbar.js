import React, { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <i>{"<Khan>"}</i> <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink
          to={{ pathname: "https://github.com/kaanarslan1990" }}
          target="_blank"
          rel = "noopener noreferrer"
        >
          GitHub
        </MenuLink>
        <MenuLink to="login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
