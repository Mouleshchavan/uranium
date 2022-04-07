const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    let a=[2,4,6,8,9,11,22]
    res.send('My first ever api!',a)
});

module.exports = router;
// ## GET /all-candidates
// Write a get api that returns a list of candidate names