const router = require('express').Router();
const user = require('../models/user');
const log = require('../models/log');
const workout = require('../models/workout');

router.get('/', async (req, res) => {
  try {
    // const userdata = await user.findAll({
    //   include: [{ model: workout },{ model: log },{ model: user }]
    // });
    // const data = userdata.map((user) => user.get({ plain: true }));
    // console.log(data);
    res.render('homepage', { loggedIn: req.session.loggedIn });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    res.render('profile');
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;