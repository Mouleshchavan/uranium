const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
//1.............
const createUser = async function (abcd, xyz) {

  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    
    xyz.status(201).send({ msg: savedData });
  }
  catch (err) {
    res.status(500).send({ msg: "error", error: err.message })
  }
};

//2..........
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is not corerct",
      });
let token = jwt.sign(
      {
        userId: user._id.toString(),
        name: user.firstName
      },
      "Pushpa"
    );
  
    res.status(200).send({ status: true, data: token });
  } catch (err) { res.status(500).send({ msg: "error", error: err.message }) }
};



//3........................
const getUserData = async function (req, res) {
try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) { return res.status(400).send({ status: false, msg: "No such user exists" }) }

    res.status(200).send({ status: true, data: userDetails });
  } catch (err) { res.status(500).send({ msg: "error", error: err.message }) }
};


//4...........................
const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(200).send({ status: userData, data: updatedUser });
  } catch (err) { res.status(500).send({ msg: "error", error: err.message }) }
};

//5.............
const deletUser = async function (req, res) {

  try {
    let userId = req.params.userId;
    let deleteUs = await userModel.findOneAndUpdate(userId, { $set: { isDeleted: true } })
    res.status(200).send({ status: true, deleteAccount: deleteUs })
  } catch (err) { res.status(500).send({ msg: "error", error: err.message }) }
}




const postMessage = async function (req, res) {
   try {
    let message = req.body.post
    let userId = req.params.userId;
    let user = await userModel.findOne( {_id:userId});
    let updatedPosts = user.post
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { post: updatedPosts }, { new: true })

    //return the updated user document
    return res.status(200).send({ status: true, data: updatedUser })
  } catch (err) { res.status(500).send({ msg: "error", error: err.message }) }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletUser = deletUser;
module.exports.postMessage = postMessage;