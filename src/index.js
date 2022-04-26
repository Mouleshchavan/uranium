const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose=require("mongoose")


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Mouleshchavan:YpmtEPmAjBeUCOGG@cluster0.r5obc.mongodb.net/Mouleshchavan6-db",    {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
})

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
