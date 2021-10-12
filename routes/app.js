const express = require('express')
const router = express.Router()
const { app } = require('../controllers/app')

router.route('/:code').get(app)


module.exports = router

