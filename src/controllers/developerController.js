const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerModel")

const createDeveloper= async function (req, res) {
    let book = req.body
    let bookCreated = await developerModel.create(book)
    res.send({data: bookCreated})      
}

const getDeveloperData= async function (req, res) {
    let developers = await developerModel.find({gender:"female", percentage:{$gte:79}})
    res.send({data: developers})
}

const getDeveloperWithBatchDetails= async function (req, res) {
    let batch=req.query.program

    let batchcreated=await batchModel.findOne({name:batch}).select({_id:1})
    let devlop=req.query.percentage
    let getDeveloperData=await developerModel.find({batch_id: batchcreated,percentage:{$gte:devlop}})
     res.send({data:getDeveloperData})

}

module.exports.createDeveloper= createDeveloper
module.exports.getDeveloperData= getDeveloperData
module.exports.getDeveloperWithBatchDetails= getDeveloperWithBatchDetails




















//     //3 a)
//     if(!authorId) {
//         return res.send({message: "Author id must be present in the book detials"})   
//     }

//     //3 b)
//     let author = await authorModel.findById(authorId)

//     if(!author) {
//         return res.send({message: "Not a valid author id"})
//     }

//     //3 c)
//     if(!publisherId) {
//         return res.send({message: "Publihser id must be present in the book details"})
//     }

//     //3 d)
//     let publisher = await publisherModel.findById(publisherId) 

//     if(!publisher) {
//         return res.send({message: "Not a valid publisher id"})
//     }

//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const fetchbooks = async function (req, res) {
    
//     let books = await bookModel.find().populate('author publisher')
//     res.send({data: books})
// }

// const updateBooks = async function (req, res) {
//     // update hardcover to true for few books
//     let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
//     let arrayOfPublishers = []
    
//     for (let i = 0; i < hardCOverPublishers.length; i++) {
//         let objId = hardCOverPublishers[i]._id 
//         arrayOfPublishers.push(objId)
//     }
    
//     let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

//     res.send({data: books})
// }

// module.exports.createBook= createBook
// module.exports.fetchbooks = fetchbooks
// module.exports.updateBooks = updateBooks

