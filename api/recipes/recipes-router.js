const express = require('express');
const helpers = require('./recipes-model');

const router = express.Router();

router.get('/recipes', (req, res, next) => {
  helpers.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
