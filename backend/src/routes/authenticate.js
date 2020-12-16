const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session')
const path = require('path');
const fs = require('fs');
var session = require('express-session');
var cookieParser = require('cookie-parser');

const router = express.Router();

const isLoggedIn = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.sendStatus(401);
    }
  }


router.get('/', (req, res) =>  res.send('Home page!'))

router.get('/login-failed', (req, res) => res.send('You Failed to log in!'))
router.get('/login-succcess', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName}!`))

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login-failed' }),
  function (req, res) {
    res.redirect('/login-succcess');
  }
);

router.post('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})


module.exports = router;
