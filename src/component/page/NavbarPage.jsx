import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function NavbarPage() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto p-2">
                <NavLink to="/">Home</NavLink>\
                <NavLink to="/about">About</NavLink>
            </Nav>
        </Navbar>
    )
}
export default NavbarPage;