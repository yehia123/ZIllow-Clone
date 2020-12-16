import React, { useState } from 'react';
import '../listing/addList.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container, Row, Col,
  InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label, Form, Button, Jumbotron
} from 'reactstrap';

import {Card, Modal} from 'react-bootstrap';

import Navigation from '../navigation/navigation.js';
import './home.css';

import Image1 from '../landing/1.jpg';

import axios from 'axios';
import { ROOT_URL } from '../config/config.js'

class Listing extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      openHouseDate: "",
      openHouseStartTime: "",
      openHouseEndTime: "",
      _id: "",
      name:"",
      email:"",
      creditScore:"",
      phone: "",
      applicationType: "",
      message: "",
      employmentInfo: "",
      reviewStatus: "UnderReview",
      listingId: "",
      data: []
    };
  }

  componentDidMount() {
    this.setState({data: this.props.value});
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };

  handleClose = (e) => {
    this.setState({show: false});
  };
  handleShow = (e)  => {
    this.setState({show: true});
  };


  handleCloseLease = (e) => {
    this.setState({show: false});
  };

  handleSubmitModal = e => {
    e.preventDefault();

    var user = {
      openHouseDate: this.state.openHouseDate,
      openHouseStartTime: this.state.openHouseStartTime,
      openHouseEndTime: this.state.openHouseEndTime,
      _id: this.state._id
    };

    console.log(user);

    axios.post(ROOT_URL + '/listing/update', user )
      .then(function (res) {
          console.log(res);
            // if (res.data.redirect == '/') {
            //     console.log("redirecting to home")
            //     window.location = "/home"
            //     //console.log(res.data);
            // }
            // else if (res.data.redirect == '/login'){
            //     console.log("invalid username/password")
            //     window.location = "/login"
            // }
        })
        .catch(function(error) {
            console.log(error)
            //window.location = "/login"
        })
  }

  handleSubmitLease = e => {
      e.preventDefault();

      var leaser = {
        name: this.state.name,
        userId: sessionStorage.getItem("userID"),
        listingId: this.state.listingId,
        email: this.state.email,
        creditScore: this.state.creditScore,
        phone: this.state.phone,
        applicationType: this.state.applicationType,
        message: this.state.message,
        employmentInfo: this.state.employmentInfo,
        reviewStatus: this.state.reviewStatus
      }
      console.log(leaser);

      axios.post(ROOT_URL + '/application/submitForRent', leaser )
        .then(function (res) {
            console.log(res);
              // if (res.data.redirect == '/') {
              //     console.log("redirecting to home")
              //     window.location = "/home"
              //     //console.log(res.data);
              // }
              // else if (res.data.redirect == '/login'){
              //     console.log("invalid username/password")
              //     window.location = "/login"
              // }
          })
          .catch(function(error) {
              console.log(error)
              //window.location = "/login"
          })

  }

  render()
  {
    const dataFlow = this.props.value;
    console.log(this.props.value.data);
    return(
      <div>
        <div className="ListingCard">
          {this.props.value.data.map(card =>
          <Card key={card._id}>
            <Card.Body>
              <Jumbotron>
                <h3>Listing: {card.addressLine}, {card.addressCity}, {card.addressState}, {card.addressCountry}, {card.addressZipcode}</h3>
                <h4>Listing Type: {card.listingType}</h4>
                <h5>Price: {card.price}</h5>
                <Container>
                  <Row>
                    <Col><h6>Bathrooms: {card.bathrooms}</h6></Col>
                    <Col><h6>Bedrooms: {card.bedrooms}</h6></Col>
                    <Col><h6>Parking Space: {card.parkingSpaces}</h6></Col>
                    <Col><h6>Parking Type: {card.parkingType}</h6></Col>
                  </Row>
                  <Row>
                    <Col><h6>Home Type: {card.homeType}</h6></Col>
                    <Col><h6>Pool: {card.pool}</h6></Col>
                    <Col><h6>Square Feet: {card.sqFT}</h6></Col>
                    <Col><a href={card.photos}>View Photos Here!</a></Col>
                  </Row>
                  <Row>
                    <Col><h6>Description: {card.description}</h6></Col>
                    <Col><h6>Amenities: {card.otherAmenities}</h6></Col>
                    { sessionStorage.getItem("role") == "Realtor" && sessionStorage.getItem("role") == "Seller" ?
                    <Col><h6>Open House Schedule Code: {card._id}</h6></Col>
                    :
                    <Col></Col>
                    }
                  </Row>
                  <Row>
                    { sessionStorage.getItem("role") == "Renter" ?
                    <Col><h6>Lease Application Code: {card._id}</h6></Col>
                    :
                    <Col></Col>
                    }
                  </Row>
                  <h5>Open House Availability</h5>
                  <Container>
                    <Row>
                      <Col><h6>Open House Date: {card.openHouseDate}</h6></Col>
                      <Col><h6>Open House Start Time: {card.openHouseStartTime}</h6></Col>
                      <Col><h6>Open House End Time:{card.openHouseEndTime}</h6></Col>
                    </Row>
                  </Container>
                  <Row>
                    <Col><Button color="warning">Save to Favorites</Button></Col>
                    { sessionStorage.getItem("role") == "Buyer" && sessionStorage.getItem("role") == "Realtor" ?
                    <Col><Button color="success">Send an Offer</Button></Col>
                    :
                    <Col><Button disabled color="success">You're aren't eligible to send purchase offers</Button></Col>
                    }
                    { sessionStorage.getItem("role") == "Renter" && card.listingType == "Rent" ?
                      <Col>
                        {/*<Button color="secondary">Send Lease Application</Button>*/}
                        <Button color="secondary"  onClick={this.handleShow}>Send Lease Application</Button>
                        {
                          //console.log("listing id "+ card._id)
                        }
                        <Modal show={this.state.show} onHide={this.handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Schedule Open House</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          <Form onSubmit={this.handleSubmitLease}>
                              <Input
                              value={this.state.listingId}
                              onChange={this.onChange}
                              id="listingId"
                              type="text"
                              placeholder="Enter your Lease Application code from the listing"
                              />
                              <Input
                              value={this.state.name}
                              onChange={this.onChange}
                              id="name"
                              type="text"
                              placeholder="name"
                              />
                              <Input
                              value={this.state.email}
                              onChange={this.onChange}
                              id="email"
                              type="text"
                              placeholder="email"
                              />
                              <Input
                              value={this.state.creditScore}
                              onChange={this.onChange}
                              id="creditScore"
                              type="text"
                              placeholder="credit score"
                              />
                              <Input
                              value={this.state.phone}
                              onChange={this.onChange}
                              id="phone"
                              type="text"
                              placeholder="phone number"
                              >
                              </Input>
                              <Input
                              value={this.state.applicationType}
                              onChange={this.onChange}
                              id="applicationType"
                              type="select"
                              className="inputBed"
                              >
                                <option>select</option>
                                <option>Rent</option>
                              </Input>
                              <Input
                              value={this.state.message}
                              onChange={this.onChange}
                              id="message"
                              type="text"
                              placeholder="Message to Realtor/Landlord"
                              />
                              <Input
                              value={this.state.employmentInfo}
                              onChange={this.onChange}
                              id="employmentInfo"
                              type="textarea"
                              placeholder="Employment information: where you work, occupation, industry"
                              />
                            <Button variant="secondary" onClick={this.handleCloseLease}>
                              Close
                            </Button>
                            <Button variant="success" onClick={sessionStorage.setItem("listingID", card.listingId)} type="submit">
                              Submit
                            </Button>
                            </Form>
                          </Modal.Body>
                        </Modal>

                      </Col>
                    :
                      <Col><Button disabled color="secondary">Send Lease Application</Button></Col>
                    }
                    { sessionStorage.getItem("role") == "Realtor" && sessionStorage.getItem("role") == "Seller" ?
                    <Col>
                    <div>
                        <Button color="info"  onClick={this.handleShow}>Schedule Open House</Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Schedule Open House</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          <Form onSubmit={this.handleSubmitModal}>
                             <Input
                             value={this.state.openHouseDate}
                             onChange={this.onChange}
                             id="openHouseDate"
                             type="text"
                             placeholder="Enter date in yyyy-dd-mm format"
                             />
                             <Input
                             value={this.state.openHouseStartTime}
                             onChange={this.onChange}
                             id="openHouseStartTime"
                             type="text"
                             placeholder="Enter start time in HH:MM AM/PM format"
                             />
                             <Input
                             value={this.state.openHouseEndTime}
                             onChange={this.onChange}
                             id="openHouseEndTime"
                             type="text"
                             placeholder="Enter end time in HH:MM AM/PM format"
                             />
                             <Input
                             value={this.state._id}
                             onChange={this.onChange}
                             id="_id"
                             type="text"
                             placeholder="Paste the schedule code from listing"
                             />
                            <Button variant="secondary" onClick={this.handleClose}>
                              Close
                            </Button>
                            <Button variant="success" onClick={this.handleClose} type="submit">
                              Schedule
                            </Button>
                            </Form>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </Col>
                    :
                    <Button color="info" disabled onClick={this.handleShow}>You're aren't eligible to schedule open houses</Button>
                    }
                  </Row>
                </Container>
                <h7>Click on the 'Favorite' button next to 'Search' Button to save the search.</h7>
              </Jumbotron>
            </Card.Body>
          </Card>
        )}
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      beds: "",
      baths: "",
      flooring: "",
      parking: "",
      pool: "",
      sqft: "",
      homeType: "",
      price: "",
      listingType: "",
      data: []
    };
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

  onFav = e => {
    console.log("fav clicked");
    e.preventDefault();
    console.log(this.state);

    var newFav = {
      addressLine: this.state.street,
      addressCity: this.state.city,
      addressState: this.state.state,
      addressCountry: this.state.country,
      addressZipcode: this.state.zipcode,
      sqFT: this.state.sqft,
      homeType: this.state.homeType,
      bedrooms: this.state.beds,
      bathrooms: this.state.baths,
      pool: this.state.pool,
      parkingType: this.state.parking,
      flooringType: this.state.flooring,
      listingType: this.state.listingType
    };

  };

  onSubmit = e => {
      e.preventDefault();

      var newSearch = {
        addressLine: this.state.street,
        addressCity: this.state.city,
        addressState: this.state.state,
        addressCountry: this.state.country,
        addressZipcode: this.state.zipcode,
        sqFT: this.state.sqft,
        homeType: this.state.homeType,
        bedrooms: this.state.beds,
        bathrooms: this.state.baths,
        pool: this.state.pool,
        parkingType: this.state.parking,
        flooringType: this.state.flooring,
        listingType: this.state.listingType
      };
      console.log(newSearch);

      axios.post(ROOT_URL + '/search', newSearch).then((res) => {
          console.log("inside Search on React side");
          console.log(res);
          this.setState({data: res.data.data});
          console.log(this.state.data);
          //this.setState({data: this.res.data.data})
              // if (res.data.success) {
              //     console.log("redirecting to signup")
              // }
              // else {
              //     console.log("unsuccessful signup")
              //     //window.location = "/signup"
              // }
          })
          .catch(function(error) {
              console.log(error)
              //window.location = "/signup"
          })

  };

  render()
  {
    const { data } = this.state;

    return(
      <div>
        <Navigation />
        <div>
        <Navbar color="light" light expand="md">
         <NavbarToggler />
         <Collapse navbar>
          <Form onSubmit={this.onSubmit}>
           <Nav className="mr-auto" navbar>
             <Input
             value={this.state.street}
             onChange={this.onChange}
             id="street"
             type="text"
             placeholder="Street Address"
             className="InputZIPStreet"
             />
             <Input
             value={this.state.city}
             onChange={this.onChange}
             id="city"
             type="text"
             placeholder="City"
             className="InputZIP"
             />
             <Input
             value={this.state.state}
             onChange={this.onChange}
             id="state"
             type="text"
             placeholder="State"
             className="InputZIP"
             />
             <Input
             value={this.state.country}
             onChange={this.onChange}
             id="country"
             type="text"
             placeholder="Country"
             className="InputZIPCountry"
             />
             <Input
             value={this.state.zipcode}
             onChange={this.onChange}
             id="zipcode"
             type="text"
             placeholder="ZipCode"
             className="InputZIP"
             />
             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Beds
               </DropdownToggle>
               <DropdownMenu value={this.state.beds} onChange={this.onChange} id="beds" right>
                 <Input
                 value={this.state.beds}
                 onChange={this.onChange}
                 id="beds"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option value="1">1+</option>
                   <option value="2">2+</option>
                   <option value="3">3+</option>
                   <option value="4">4+</option>
                   <option value="5">5+</option>
                 </Input>
                 {/*
                 <DropdownItem onChange={this.onChange}
                 value={this.state.beds}>
                   2+
                 </DropdownItem>*/}
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Baths
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.baths}
                 onChange={this.onChange}
                 id="baths"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option value="1">1+</option>
                   <option value="2">2+</option>
                   <option value="3">3+</option>
                   <option value="4">4+</option>
                   <option value="5">5+</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Flooring
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.flooring}
                 onChange={this.onChange}
                 id="flooring"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option>Carpet</option>
                   <option>Wooden</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Parking
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.parking}
                 onChange={this.onChange}
                 id="parking"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option>Open</option>
                   <option>Closed</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Pool
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.pool}
                 onChange={this.onChange}
                 id="pool"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option>Yes</option>
                   <option>No</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 SqFT
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.sqft}
                 onChange={this.onChange}
                 id="sqft"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option value="1000">1000+</option>
                   <option value="2000">2000+</option>
                   <option value="3000">3000+</option>
                   <option value="4000">4000+</option>
                   <option value="5000">5000+</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Home Type
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.homeType}
                 onChange={this.onChange}
                 id="homeType"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option>Attached Single Family</option>
                   <option>Detached Single Family</option>
                   <option>Apartment</option>
                   <option>Townhome</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Price
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.price}
                 onChange={this.onChange}
                 id="price"
                 type="select"
                 className="inputBed"
                 >
                   <option value="">select</option>
                   <option value="100000">100000+</option>
                   <option value="200000">200000+</option>
                   <option value="300000">300000+</option>
                   <option value="400000">400000+</option>
                   <option value="500000">500000+</option>
                   <option value="600000">600000+</option>
                   <option value="700000">700000+</option>
                   <option value="800000">800000+</option>
                   <option value="900000">900000+</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Listing Type
               </DropdownToggle>
               <DropdownMenu right>
                 <Input
                 value={this.state.listingType}
                 onChange={this.onChange}
                 id="listingType"
                 type="select"
                 className="inputBed"
                 >
                   <option>select</option>
                   <option>Sale</option>
                   <option>Rent</option>
                 </Input>
               </DropdownMenu>
             </UncontrolledDropdown>

             <Button type="submit">Search</Button>
             <Button color="warning" onClick={this.onFav}>Favorite</Button>
           </Nav>
           </Form>
           <NavbarText></NavbarText>
         </Collapse>
       </Navbar>
       <Listing value={this.state}/>
       </div>
       </div>
    )
  }
}

export default Home;
