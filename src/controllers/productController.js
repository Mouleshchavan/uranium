const req = require("express/lib/request")
const ProductModel= require("../models/productsModel")

const createProduct= async function(req, res) {
    let user = req.body
    let create = await ProductModel.create(user)

  
    
  res.send({data: create})
}



module.exports.createProduct = createProduct