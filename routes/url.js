const express = require('express')
const router = express.Router()
const { url } = require('../controllers/url')

router.route('/shorten').get(url)

module.exports = router
