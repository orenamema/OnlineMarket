import React,{useState}from "react";
import {Navbar,Nav} from "react-bootstrap";
import "./style.css"

function topNav(){

  return(
   
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Online Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Cart">Your Cart</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>

    )

}
export default topNav