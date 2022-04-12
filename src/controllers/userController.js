const UserModel= require("../models/userModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createNewBook= createNewBook
module.exports.getBookList= getBookList