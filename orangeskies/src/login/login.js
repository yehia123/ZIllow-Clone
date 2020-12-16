import './login.css';
import React, { useState } from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navigation from '../navigation/navigation.js'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { ROOT_URL } from '../config/config.js'

//export default function Login() {

class Login extends React.Component{

 //const [email, setEmail] = useState("");
 //const [password, setPassword] = useState("");

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
  //function onChange(e) {
      this.setState({ [e.target.id]: e.target.value });
  };
  //
  //function validateForm() {
  validateForm() {
    return this.email.length > 0 && this.password.length > 0;
    //return email.length > 0 && password.length > 0;
  }

  handleSubmit = e => {
  //function handleSubmit(event){
    e.preventDefault();

    var user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(ROOT_URL + '/login-buyer', user )
      .then(function (res) {
          console.log(res);
            if (res.data.redirect == '/') {
                console.log("logging data into session storage")
                sessionStorage.setItem("userID", res.data.user._id);
                sessionStorage.setItem("email", res.data.user.email);
                sessionStorage.setItem("favorites", res.data.user.favorite);
                sessionStorage.setItem("name", res.data.user.name);
                sessionStorage.setItem("role", res.data.user.role);
                sessionStorage.setItem("registeredOn", res.data.user.registeredOn);
                sessionStorage.setItem("lastLoggedIn", res.data.user.lastLoggedIn);
                console.log("redirecting to home")
                window.location = "/home"
                //console.log(res.data);
            }
            else if (res.data.redirect == '/login'){
                console.log("invalid username/password")
                window.location = "/login"
            }
        })
        .catch(function(error) {
            console.log(error)
            window.location = "/login"
        })
  }
  render(){
  return (
    <div >
      <Navigation/>
      <Form className="login" onSubmit={this.handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
}

export default Login;

//onChange={(e) => setEmail(e.target.value)}
//onChange={this.onChange}
//value={this.state.email}
