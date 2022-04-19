const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batch Controller")
const developerController= require("../controllers/developerController");
const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBatch", batchController.createBatch )

router.post("/createDeveloper", developerController.createDeveloper )

router.post('/getDeveloperData', developerController.getDeveloperData)

router.post('/getDeveloperWithBatchDetails', developerController.getDeveloperWithBatchDetails)

module.exports = router;