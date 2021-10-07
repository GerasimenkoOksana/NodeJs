import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
export default function NaviBar(){
    return(
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><img src="/images/logo8.png" className="img-logo"/> MyTrello</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/boards">Boards</Link> </Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="mx-2"> Log In </Button>
                    <Button variant="primary" className="mx-2">Log Out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}