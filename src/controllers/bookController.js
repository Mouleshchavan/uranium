// const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const publisherModel = require("../models/publishModel")
const { response } = require("express")
const { findOne } = require("../models/authorModel")

// 3rd.........................................
const createBook = async function (req, res) {
    let book = req.body
    let check = await AuthorModel.findOne({ _id: book.author_id })
    let check1 = await publisherModel.findOne({ _id: book.publisher_Id })
    if (book.author_id && book.publisher_Id) {
        if (check === null) {
            res.send("author is not persent")
        }
        else if (check1 === null) {
            res.send("publisher is not persent")
        }
        else {
            let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })
        }
    }
    else { res.send("detail is required") }
    // res.send({msg:check})
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_Id')
    res.send({ data: specificBook })

}
//2..............................................
const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({ data: authorCreated })
}

const getAuthorsData = async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({ data: authors })
}

//3..................................................
const createpublisher = async function (req, res) {
    let Publisher1 = req.body
    let publisherCreated = await publisherModel.create(Publisher1)
    res.send({ data: publisherCreated })
}
const updateBookData = async function (req, res) {  
    //let kd = publisher_id.name
    let check1 = await publisherModel.findOne({name: "Penguin"}).select('_id')
    let specificBook = await bookModel.updateMany({publisher_id : check1},{$set:{isHardCover:true }})
    res.send({ data: specificBook })

}

const updateBookPrice= async function(req,res){
    let check = await AuthorModel.find({rating:{$gt:3.5}}).select('_id')
    let bookdata=await bookModel.updateMany({author_id:check},{$inc:{price:10}})
    res.send({data:bookdata})
}


module.exports.updateBookData = updateBookData
module.exports.updateBookPrice = updateBookPrice
module.exports.getAuthorsData = getAuthorsData
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createpublisher = createpublisher
module.exports.createAuthor = createAuthor