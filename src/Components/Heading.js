import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { AddUser } from './AddUser'

export const Heading = () => {
    return (

        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand>My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/adduser" element={<AddUser/>} className="btn btn-primary">Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
        // <div style={{ backgroundColor: 'black', width: '30%' }}>
        //     <span style={{color:'red'}}>My team</span>{''}
        //     <Link to='/adduser'>  <button>addd user </button></Link>
        // </div>
    )
}
