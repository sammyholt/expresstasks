const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// About Route
router.get('/', (req, res) => {
    res.render('about');
})

module.exports = router;