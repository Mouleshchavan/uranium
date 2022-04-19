const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose=require("mongoose")


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Mouleshchavan:YpmtEPmAjBeUCOGG@cluster0.r5obc.mongodb.net/Mouleshchavan3-db",    {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
})
.then( () => console.log("Mongodb is connected"))
.catch( err => console.log(err))

app.use(
    function(req,res,next){
        let ar1=new Date().toLocaleString();
        let ar2=req.ip
        console.log(ar1,ar2,"/Moulesh")
        next()
    }
)


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});




