import './signup.css';
import React, { useState, Component } from 'react';
import Navigation from '../navigation/navigation.js'
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Input } from 'reactstrap';
import axios from 'axios';
import { ROOT_URL } from '../config/config.js'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: ""
    };
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
      e.preventDefault();

      var newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      }
      console.log(newUser.name);
      console.log(newUser.email);
      console.log(newUser.role);
      console.log(newUser.password);

      axios.post(ROOT_URL + '/register-buyer', newUser).then(function (res) {
            console.log(res);
              if (res.data.success) {
                  console.log("redirecting to signup")
                  window.location = "/login"
              }
              else {
                  console.log("unsuccessful signup")
                  //window.location = "/signup"
              }
          })
          .catch(function(error) {
              console.log(error)
              //window.location = "/signup"
          })
  }

  render() {
      //const { errors } = this.state;
      return (
        <div >
          <Navigation/>
          <Form className="login" onSubmit={this.onSubmit}>
            <Form.Group size="lg" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group controlId="type" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Type</Form.Label>
              <Input
              id="role"
              type="select"
              value={this.state.role}
              onChange={this.onChange}
              >
              <option>Select</option>
              <option>Renter</option>
              <option>Landlord</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Realtor</option>
              <option>Admin</option>
              </Input>
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit" >
              Sign Up
            </Button>
          </Form>
        </div>
      )
  }
}

export default SignUp;

{/*}
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div >
      <Navigation/>
      <Register/>
      <Form className="login" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="type" controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Type</Form.Label>
          <Form.Control as="select"
          autoFocus
          type="type"
          value={type}
          onChange={(e) => setType(e.target.value)}>
            <option>Renter</option>
            <option>Landlord</option>
            <option>Buyer</option>
            <option>Seller</option>
            <option>Realtor</option>
            <option>Admin</option>
          </Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button href="/home" block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

<Input
onChange={this.onChange}
value={this.state.name}
id="name"
type="text"
/>

{/*
class SignUp extends React.Component{



  render(){
    return(
      <div className="signup">
        <Navigation/>
        {this.Sign()}
      </div>
    )
  }
}

export default SignUp;

*/}
