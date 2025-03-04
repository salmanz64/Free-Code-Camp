const express = require("express")
//obtain all the controllers from controller.js
const {CreateUrl,GetUrl} = require("../controllers/shorturl.controller")
//router is needed
const router = express.Router()

//the app.use directly comes here
router.post('/',CreateUrl)

//to get the param url
router.get('/:url',GetUrl)

module.exports = router;