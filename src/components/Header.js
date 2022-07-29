import React from 'react'
import { Navbar, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/NewMealForm.css"



function Header() {
  return (
    <Navbar className="header">
        <Container>
            <Link to={"/"}>
                <Navbar.Brand>Belafonte-Food-Hub
</Navbar.Brand>
            </Link>

            <Link to={"/meals"}>
                <Navbar.Text>Our Meals</Navbar.Text>
            </Link>

            <Link to={"/Add your Meal"}>
                <Button className="btn-custom" > Create meal </Button>
            </Link>
        </Container>
    </Navbar>
  )
}

export default Header