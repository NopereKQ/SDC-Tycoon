const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();


router.get('/', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/save', authController.save, (req, res) => {
  res.render('save');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  // res.json(req.user);
  if( req.user ) {
    res.render('profile', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
})

module.exports = router;