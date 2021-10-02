import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="pt-3">
      <Container>
        <div>
          <Navbar expand="md" light>
            <NavbarBrand href="/">
              <img src="./img/logo/logo.svg" alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="ms-auto">
                <NavItem>
                  <NavLink href="/components/">about us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#">learning the vaccine</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#">apps</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#">service</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#">blog</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};

export default HeaderSection;
