const { request } = require('express');
const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
   
       let data = req.body
       console.log(data)
       players.map((x) => {
           if (x.name == data.name) {
               return res.send("player already exist")
           }
   
       })
       players.push(data)
       res.send({ msg: "My NewPlayerList:" , Player : players })

   })
  
module.exports = router;