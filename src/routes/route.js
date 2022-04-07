const express = require('express');
const logger = require('../logger/logger.js')
const helpar=require('../Util/helpar.js')
const format=require('../validator/formater.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('I am inside the first route handler')
    // console.log('The endpoint value is', logger.endpoint)
    // console.log('Calling log function')
    // logger.logging()
    logger.welcome();//function calling
   // console.log('Calling log function');
    // logger.logging();
    logger.welcome();// function caliling is here
    console.log(`Current Date `,helpar.today);
    console.log(`Current month`,helpar.month); 
    console.log("String is ",format.b);
    console.log("String is change into UpperseCase",format.x);
    console.log("String is change ",format.y);
    res.send(' I am Moulesh CHavna form FunctionUp')
});

router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason