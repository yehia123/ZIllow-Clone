import React from "react";
//import { Link } from "react-router-dom";
// reactstrap components

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal,
  Label,
  ModalBody,
  Button,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Input,
  FormText,
} from "reactstrap";
import TablePage from '/Users/katy/Study/20 Fall/202/project/fa20-cmpe-202-sec-03-team-project-orangeskies.git/fa20-cmpe-202-sec-03-team-project-orangeskies/orangeskies/src/admin/adminPage.js';
import { BrowserRouter as  Route} from 'react-router-dom';

function NavBar() {
  const [navbarColor, setNavbarColor]         = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen]       = React.useState(false);
  const [modal1, setModal1]                   = React.useState(false);
  const [modal2, setModal2]                   = React.useState(false);
  React.useEffect(()                          => {
    const updateNavbarColor                   = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id                                  ="bodyClick"
          onClick                             ={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className                       ={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className     ="button-dropdown">
            <DropdownToggle
              caret
              data-toggle                     ="dropdown"
              href                            ="#pablo"
              id                              ="navbarDropdown"
              tag                             ="a"
              onClick                         ={(e) => e.preventDefault()}
            >
              <span className                 ="button-bar"></span>
              <span className                 ="button-bar"></span>
              <span className                 ="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby     ="navbarDropdown">
              <DropdownItem href              ="#pablo" onClick={(e) => e.preventDefault()}>
                Buy
              </DropdownItem>
              <DropdownItem href              ="#pablo" onClick={(e) => e.preventDefault()}>
                Sell
              </DropdownItem>
              <DropdownItem href              ="#pablo" onClick={(e) => e.preventDefault()}>
                Rent
              </DropdownItem>
              <DropdownItem divider></DropdownItem>

              <DropdownItem divider></DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
          <div className                      ="navbar-translate">
            <NavbarBrand
              href                            =""
              target                          ="_blank"
              id                              ="navbar-brand"
            >
              Dome
            </NavbarBrand>
            <UncontrolledTooltip target       ="#navbar-brand">
              Present by Orangeskies.
            </UncontrolledTooltip>

          </div>
          <Collapse
            className                         ="justify-content-end"
            isOpen                            ={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
<<<<<<< HEAD
                <NavLink onClick={() => setModal1(true) } 
=======
                <NavLink onClick              ={() => setModal1(true)}
>>>>>>> 28304c6b8a5ca2cdfab61a300caa7f95ebeba7ff
                >
                    Sign Up
                </NavLink>
                <Modal isOpen                 ={modal1} toggle={() => setModal1(false)}>
                  <div className              ="modal-header justify-content-center">
                    <button
                      className               ="close"
                      type                    ="button"
                      onClick                 ={() => setModal1(false)}
                    >
                      <i className            ="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className             ="title title-up">Sign Up</h4>
                  </div>
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <label htmlFor        ="exampleInputEmail1">Email address</label>
                        <Input
                          aria-describedby    ="emailHelp"
                          id                  ="exampleInputEmail1"
                          placeholder         ="Enter email"
                          type                ="email"
                        ></Input>
                        <FormText className   ="text-muted" color="default" id="emailHelp">
                          We'll never share your email with anyone else.
                        </FormText>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor        ="exampleInputPassword1">Password</label>
                        <Input
                          id                  ="exampleInputPassword1"
                          placeholder         ="Password"
                          type                ="password"
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor        ="Name">Name</label>
                        <Input
                          type                ="text"
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">Type of User</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Renter</option>
                          <option>Landlord</option>
                          <option>Buyer</option>
                          <option>Seller</option>
                        </Input>
                      </FormGroup>
                  </Form>
                  </ModalBody>
                  <div className              ="modal-footer">
                    <Button color             ="primary" type="submit">
                      Submit
                    </Button>
                    <Button
                      color                   ="danger"
                      type                    ="button"
                      onClick                 ={() => setModal1(false)}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </NavItem>
              <NavItem>
                <NavLink onClick              ={() => setModal2(true)}>
                    Log In
                </NavLink>
                <Modal isOpen                 ={modal2} toggle={() => setModal2(false)}>
                  <div className              ="modal-header justify-content-center">
                    <button
                      className               ="close"
                      type                    ="button"
                      onClick                 ={() => setModal2(false)}
                    >
                      <i className            ="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className             ="title title-up">Log In</h4>
                  </div>
                  <ModalBody>
                    <Form>
                        <FormGroup>
                          <label htmlFor      ="exampleInputEmail1">Email address</label>
                          <Input
                            aria-describedby  ="emailHelp"
                            id                ="exampleInputEmail1"
                            placeholder       ="Enter email"
                            type              ="email"
                          ></Input>
                          <FormText className ="text-muted" color="default" id="emailHelp">
                            We'll never share your email with anyone else.
                          </FormText>
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor      ="exampleInputPassword1">Password</label>
                          <Input
                            id                ="exampleInputPassword1"
                            placeholder       ="Password"
                            type              ="password"
                          ></Input>
                        </FormGroup>
                    </Form>
                  </ModalBody>
                  <div className              ="modal-footer">
                    <Button color             ="default" type="button" onclick="/home">
                      Submit
                    </Button>
                    <Button
                      color                   ="danger"
                      type                    ="button"
                      onClick                 ={() => setModal2(false)}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
              </NavItem>
              <NavItem>
                <NavLink to="/adminPage" >Admin</NavLink>
                <Route to="/adminPage" component ={TablePage}/>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
