import './addList.css';
import React, { useState, Component } from 'react';
import Navigation from '../navigation/navigation.js'
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Input } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';

// source: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82

class RentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address:"",
      zipcode:"",
      description:"",
      hometype: "",
      bedroom: "",
      bathroom:"",
      sqft: "",
      price:"",
      image:"",
      errors: {}
    };
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
  const newRentListing = {
        address: this.state.address,
        city: this.state.city,
        sate: this.state.state,
        zipcode: this.state.zipcode,
        description: this.state.description,
        hometype: this.state.hometype,
        bedroom: this.state.bedroom,
        bathroom: this.state.bathroom,
        sqft: this.state.sqft,
        price: this.state.price,
        image: this.state.image
      };
  console.log(newRentListing);
    };
  render() {
      const { errors } = this.state;
      return (
        <div >
          <Navigation/>
          <h2 class="header">Rental Listing</h2>
          <Form className="rentlist" onSubmit={this.onSubmit}>

            <Form.Group size="lg" controlId="address">
              <Form.Label>Address</Form.Label>
              <Input
              onChange={this.onChange}
              value={this.state.address}
              error={errors.address}
              id="address"
              type="text"
              placeholder="1234 Main St"
              />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} size="lg" controlId="city">
                <Form.Label>City</Form.Label>
                <Input
                onChange={this.onChange}
                value={this.state.city}
                error={errors.city}
                id="city"
                type="text"
                />
                </Form.Group>
                <Form.Group as={Col} size="lg" controlId="state">
                <Form.Label>State</Form.Label>
                <Input
                onChange={this.onChange}
                value={this.state.state}
                error={errors.state}
                id="state"
                type="text"
                />
                </Form.Group>

                <Form.Group as={Col} size="lg" controlId="zip">
                <Form.Label>ZIP code</Form.Label>
                <Input
                onChange={this.onChange}
                value={this.state.zipcode}
                error={errors.zipcode}
                id="zip"
                type="text"
                />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="hometype" controlId="exampleForm.ControlSelect1">
                <Form.Label>Home Type</Form.Label>
                <Input
                onChange={this.onChange}
                value={this.state.hometype}
                error={errors.hometype}
                id="hometype"
                type="select"
                >
                <option>House</option>
                <option>Condo / co-op</option>
                <option>Apartment</option>
                <option>Townhouse</option>
                </Input>
                </Form.Group>

                <Form.Group as={Col} size="lg" controlId="bedroom">
                <Form.Label>Bedrooms</Form.Label>
                <Input
                onChange={this.onChange}
                value={this.state.bedroom}
                error={errors.bedroom}
                id="bedroom"
                type="text"
                />
                </Form.Group>
                <Form.Group as={Col} size="lg" controlId="bathroom">
                <Form.Label>Bathrooms</Form.Label>
                <Input
                onChange={this.onChange}
                value={this.state.bathroom}
                error={errors.bathroom}
                id="bathroom"
                type="text"
                />
                </Form.Group>
            </Form.Row>
            <Form.Group size="lg" controlId="price">
              <Form.Label>Price</Form.Label>
              <Input
              onChange={this.onChange}
              value={this.state.price}
              error={errors.price}
              id="price"
              type="text"
              />
            </Form.Group>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Upload Images" />
            </Form.Group>

            <Button block size="lg" type="submit">
              <Link to="/home">
              Submit Listing
              </Link>
            </Button>
          </Form>
        </div>
      )
  }
}

export default RentList;
