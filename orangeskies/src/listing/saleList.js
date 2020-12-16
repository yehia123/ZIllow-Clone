import './addList.css';
import React, { useState, Component } from 'react';
import Navigation from '../navigation/navigation.js'
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Input } from 'reactstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { ROOT_URL } from '../config/config.js'

// source: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82

class SaleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerId: "",
      addressLine:"",
      addressCity: "",
      addressState: "",
      addressCountry: "",
      addressZipcode: "",
      photos: "",
      description:"",
      price: "",
      sqFT: "",
      homeType: "",
      bedrooms: "",
      bathrooms: "",
      pool: "",
      parkingType: "",
      parkingSpaces: "",
      flooringType: "",
      listingType: "",
      isPurchaseComplete: "No",
      yearBuilt: "",
      otherAmenities: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
      e.preventDefault();

      var newSaleListing = {
        sellerId: sessionStorage.getItem("userID"),
        addressLine: this.state.addressLine,
        addressCity: this.state.addressCity,
        addressState: this.state.addressState,
        addressCountry: this.state.addressCountry,
        addressZipcode: this.state.addressZipcode,
        photos: this.state.photos,
        description: this.state.description,
        price: this.state.price,
        sqFT: this.state.sqFT,
        homeType: this.state.homeType,
        bedrooms: this.state.bedrooms,
        bathrooms: this.state.bathrooms,
        pool: this.state.pool,
        parkingType: this.state.parkingType,
        parkingSpaces: this.state.parkingSpaces,
        listingType: this.state.listingType,
        isPurchaseComplete: this.state.isPurchaseComplete,
        yearBuilt: this.state.yearBuilt,
        otherAmenities: this.state.otherAmenities
      };

      console.log(newSaleListing);

      axios.post(ROOT_URL + '/listing', newSaleListing).then(function (res) {
            console.log(res);
              // if (res.data.success) {
              //     console.log("successful")
              // }
              // else {
              //     console.log("unsuccessful")
              // }
          })
          .catch(function(error) {
              console.log(error)
      })
  };

  render() {
      return (
        <div >
          <Navigation/>
          <h2 class="header">Sale Listing</h2>
          <Form className="salelist" onSubmit={this.onSubmit}>
            <Form.Group size="lg" controlId="addressLine">
              <Form.Label>Address</Form.Label>
              <Input
              id="addressLine"
              value={this.state.addressLine}
              onChange={this.onChange}
              type="text"
              />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} size="lg" controlId="city">
                <Form.Label>City</Form.Label>
                <Input
                id="addressCity"
                value={this.state.addressCity}
                onChange={this.onChange}
                type="text"
                />
                </Form.Group>
                <Form.Group as={Col} size="lg" controlId="state">
                <Form.Label>State</Form.Label>
                <Input
                id="addressState"
                value={this.state.addressState}
                onChange={this.onChange}
                type="text"
                />
                </Form.Group>

                <Form.Group as={Col} size="lg" controlId="country">
                <Form.Label>Country</Form.Label>
                <Input
                id="addressCountry"
                value={this.state.addressCountry}
                onChange={this.onChange}
                type="text"
                />
                </Form.Group>

                <Form.Group as={Col} size="lg" controlId="zip">
                <Form.Label>ZIP code</Form.Label>
                <Input
                id="addressZipcode"
                value={this.state.addressZipcode}
                onChange={this.onChange}
                type="text"
                />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="homeType">
                <Form.Label>Home Type</Form.Label>
                <Input
                id="homeType"
                value={this.state.homeType}
                onChange={this.onChange}
                type="select"
                >
                <option>select</option>
                <option>Attached Single Family</option>
                <option>Detached Single Family</option>
                <option>Apartment</option>
                <option>Townhome</option>
                </Input>
                </Form.Group>

                <Form.Group as={Col} size="lg" controlId="bedroom">
                <Form.Label>Bedrooms</Form.Label>
                <Input
                id="bedrooms"
                value={this.state.bedrooms}
                onChange={this.onChange}
                type="select"
                >
                <option>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
                </Form.Group>
                <Form.Group as={Col} size="lg" controlId="bathroom">
                <Form.Label>Bathrooms</Form.Label>
                <Input
                id="bathrooms"
                value={this.state.bathrooms}
                onChange={this.onChange}
                type="select"
                >
                <option>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
                </Form.Group>
                <Form.Group as={Col} controlId="pool">
                <Form.Label>Pool</Form.Label>
                <Input
                id="pool"
                value={this.state.pool}
                onChange={this.onChange}
                type="select"
                >
                <option>select</option>
                <option>Yes</option>
                <option>No</option>
                </Input>
                </Form.Group>

            </Form.Row>
            <Form.Group size="lg" controlId="price">
              <Form.Label>Price</Form.Label>
              <Input
              id="price"
              value={this.state.price}
              onChange={this.onChange}
              type="text"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="yearBuilt">
              <Form.Label>Year Built</Form.Label>
              <Input
              id="yearBuilt"
              value={this.state.yearBuilt}
              onChange={this.onChange}
              type="text"
              placeholder="yyyy-mm-dd"
              />
            </Form.Group>
            <Form.Group as={Col} size="lg" controlId="parking">
            <Form.Label>Parking Type</Form.Label>
            <Input
            id="parkingType"
            value={this.state.parkingType}
            onChange={this.onChange}
            type="select"
            >
            <option>select</option>
            <option>Open</option>
            <option>Closed</option>
            </Input>
            </Form.Group>

            <Form.Group as={Col} size="lg" controlId="flooringType">
            <Form.Label>Flooring Type</Form.Label>
            <Input
            id="flooringType"
            value={this.state.flooringType}
            onChange={this.onChange}
            type="select"
            >
            <option>select</option>
            <option>Carpet</option>
            <option>Wooden Flooring</option>
            </Input>
            </Form.Group>

            <Form.Group as={Col} size="lg" controlId="parkingSpaces">
            <Form.Label>Parking Spaces</Form.Label>
            <Input
            id="parkingSpaces"
            value={this.state.parkingSpaces}
            onChange={this.onChange}
            type="select"
            >
            <option>select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </Input>
            </Form.Group>

            {sessionStorage.getItem("role") == "Realtor" || sessionStorage.getItem("role") == "Seller" || sessionStorage.getItem("role") == "Landlord" ?

            <Form.Group as={Col} size="lg" controlId="listingType">
            <Form.Label>Type of Listing</Form.Label>
            <Input
            id="listingType"
            value={this.state.listingType}
            onChange={this.onChange}
            type="select"
            >
            <option>select</option>
            {sessionStorage.getItem("role") == "Realtor" || sessionStorage.getItem("role") == "Seller" ?
             <option>Sale</option>
             :
             <option disabled>Sale (for Realtors/Sellers only)</option>
            }
            {sessionStorage.getItem("role") == "Realtor" || sessionStorage.getItem("role") == "Landlord" ?
             <option>Rent</option>
             :
             <option disabled>Rent (for Realtors/Landlords only)</option>
            }
            </Input>
            </Form.Group>
            :
            <Form.Group as={Col} size="lg" controlId="listingType">
            <Form.Label>Type of Listing (Only for Realtor/Landlord/Seller)</Form.Label>
            <Input disabled/>
            </Form.Group>
            }
            {/*
            <Form.Group as={Col} size="lg" controlId="bedroom">
            <Form.Label>Bedrooms</Form.Label>
            <Input
            value={this.state.bedrooms}
            onChange={this.onChange}
            type="select"
            >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input>
            </Form.Group>
            */}
            <Form.Group size="lg" controlId="sqFT">
              <Form.Label>Square Feet</Form.Label>
              <Input
              id="sqFT"
              value={this.state.sqFT}
              onChange={this.onChange}
              type="text"
              />
            </Form.Group>
            {/*
            <Form.Group controlId="type" controlId="exampleForm.ControlSelect1">
              <Form.Label>Home Type</Form.Label>
              <Input
              type="select"
              value={this.state.homeType}
              onChange={this.onChange}
              >
              <option>Attached Single Family</option>
              <option>Detached Single Family</option>
              <option>Apartment</option>
              <option>Townhome</option>
              </Input>
            </Form.Group> */}
            <Form.Group size="lg" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
              as="textarea"
              rows={3}
              value={this.state.description}
              onChange={this.onChange}
              id="description"
              type="text"/>
            </Form.Group>

            <Form.Group size="lg" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Amenities</Form.Label>
              <Form.Control
              as="textarea"
              rows={3}
              value={this.state.otherAmenities}
              onChange={this.onChange}
              id="otherAmenities"
              type="text"/>
            </Form.Group>

            <Form.Group size="lg" controlId="photos">
              <Input
              id="photos"
              value={this.state.photos}
              onChange={this.onChange}
              type="text"
              placeholder="Paste the link to your cloud photo storage (enable public sharing)"
              />
            </Form.Group>

            <Button block size="lg" type="submit">
              Submit Listing
            </Button>
          </Form>
        </div>
      )
  }
}

export default SaleList;
