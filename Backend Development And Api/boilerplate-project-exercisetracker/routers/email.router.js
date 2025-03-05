const express = require('express');
const { createEmail } = require('../controller/user.controller');

const Userrouter = express.Router();

Userrouter.post('/',createEmail)

module.exports = Userrouter;