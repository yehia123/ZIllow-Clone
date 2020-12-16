import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLanding from './landing/homeLanding.js';
import Login from './login/login.js'
import SignUp from './signup/signup.js'
import Home from './home/home.js'
import SaleList from './listing/saleList.js'
import RentList from './listing/rentList.js'
import AdminPage from './admin/adminPage.js'
import HandleOffer from './offer/handleOffers.js'
import LeaseApplication from './listing/leaseApplication';

class Routes extends React.Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLanding}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/salelist" component={SaleList}/>
          <Route exact path="/rentlist" component={RentList}/>
          <Route exact path="/adminpage" component={AdminPage}/>
          <Route exact path="/handleoffer" component={HandleOffer}/>
          <Route exact path="/leaseapplication" component={LeaseApplication}/>
        </Switch>
      </Router>
    )}

}

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
