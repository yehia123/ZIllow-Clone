import React, { useState } from 'react';
import './nagivation.css'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label
} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import axios from 'axios';
import { ROOT_URL } from '../config/config.js'

class Navigation extends React.Component {

  logout = (e) => {

    e.preventDefault();

    axios.post(ROOT_URL + '/logout')
      .then(function (res) {
          sessionStorage.clear();
          console.log(res);
          window.location="/"
        })
        .catch(function(error) {
            console.log(error)
        })
  }


  render(){
    return(
      <div>
        <Navbar color="light" light expand="md">
         <NavbarBrand href="/">DOME</NavbarBrand>
         <NavbarToggler />
         <Collapse navbar>
           <Nav className="ml-auto" navbar>

             <NavItem>
              <NavLink href="/home">Home</NavLink>
             </NavItem>

             <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
             </NavItem>

             <NavItem>
              <NavLink href="/login">Log In</NavLink>
             </NavItem>

             <UncontrolledDropdown nav inNavbar className = "NavBar-Options">
               <DropdownToggle nav caret>
                 Options
               </DropdownToggle>
               <DropdownMenu right>
                {sessionStorage.getItem("role") == "Realtor" || sessionStorage.getItem("role") == "Seller" || sessionStorage.getItem("role") == "Landlord" ?
                 <DropdownItem href="/salelist">
                   List Home for Sale/Rent
                 </DropdownItem>
                 :
                 <DropdownItem disabled>
                   List Home for Sale/Rent
                 </DropdownItem>
                }
                { sessionStorage.getItem("role") == "Admin" ?
                 <DropdownItem href="/adminpage">
                   Administration
                 </DropdownItem>
                 :
                 <DropdownItem disabled href="/adminpage">
                   Administration
                 </DropdownItem>
                }
                 <DropdownItem href="/handleoffer">
                   Offer to Buy
                 </DropdownItem>
                 <DropdownItem href="/leaseapplication">
                   Lease Application
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem onClick={this.logout}>
                   Logout
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
           </Nav>
           <NavbarText></NavbarText>
         </Collapse>
        </Navbar>
      </div>
      )
    }
}

export default Navigation;
