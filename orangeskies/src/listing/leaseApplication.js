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

class LeaseApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      creditScore:"",
      phone: "",
      applicationType: "",
      message: "",
      employmentInfo: "",
      reviewStatus: "UnderReview"
    };
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();

      var newLeaseApplication = {
        names: this.state.name,
        email: this.state.email,
        creditScore: this.state.creditScore,
        phone: this.state.phone,
        applicationType: this.state.applicationType,
        message: this.state.message,
        employmentInfo: this.state.employmentInfo,
        reviewStatus: this.state.reviewStatus
      };
      console.log(newLeaseApplication);

      axios.post(ROOT_URL + '/application/submitForRent', newLeaseApplication).then((res) => {
          console.log("inside Search on React side");
          console.log(res);
          if (res.data.success) {
              console.log("redirecting to home")
              window.location = "/home"
          }
          //this.setState({data: res.data.data});
          //console.log(this.state.data);
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

  render() {
      const { errors } = this.state;
      return (
        <div >
          <Navigation/>
          <h2 class="header">Leasing Application</h2>
          <Form className="leaseapplication" onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} size="lg" controlId="name">
                <Form.Label>Name</Form.Label>
                <Input
                value={this.state.name}
                onChange={this.onChange}
                id="name"
                type="text"
                />
              </Form.Group>

              <Form.Group as={Col} size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Input
                value={this.state.email}
                onChange={this.onChange}
                id="email"
                type="text"
                />
              </Form.Group>

                <Form.Group as={Col} size="lg" controlId="creditScore">
                <Form.Label>Credit Score</Form.Label>
                <Input
                value={this.state.creditScore}
                onChange={this.onChange}
                id="creditScore"
                type="text"
                />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Input
                value={this.state.phone}
                onChange={this.onChange}
                id="phone"
                type="text"
                >
                </Input>
                </Form.Group>

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

                <Form.Group as={Col} controlId="message">
                <Form.Label>Message to Realtor/Landlord</Form.Label>
                <Input
                value={this.state.message}
                onChange={this.onChange}
                id="message"
                type="text"
                />
                </Form.Group>

            </Form.Row>
            <Form.Group size="lg" controlId="employmentInfo">
              <Form.Label>Employment Info</Form.Label>
              <Input
              value={this.state.employmentInfo}
              onChange={this.onChange}
              id="employmentInfo"
              type="textarea"
              placeholder="employment information: where you work, occupation, industry"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="creditScore">
              <Form.Label>Credit Score</Form.Label>
              <Form.Control
              value={this.state.creditScore}
              onChange={this.onChange}
              id="creditScore"
              type="text"/>
            </Form.Group>

            <Button block size="lg" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )
  }
}

export default LeaseApplication;
