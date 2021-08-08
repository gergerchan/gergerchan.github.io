import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import "./Navbar-styling.scss"

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar dark className="navbar-styling sticky-top" expand="md">
                <Container>
                    <NavbarBrand href="#hello" className="title-styling">{`gerger\nchan`}</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#tech-stack">Tech Stack</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#project">Project</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar> 
        </>
    )
}

export default NavigationBar
