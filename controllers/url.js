const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')
const Url = require('../models/URL')

const url = async (req, res) => {
    const { longUrl } = req.body
    const baseUrl = config.get('baseUrl')

    // Check base url
    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url')
    }

    // Create url code
    const urlCode = shortid.generate()

    // Check long url
    if(validUrl.isUri(longUrl)) {
        try {

        } catch (error) {

        }
    } else {

    }
}

module.exports = {
    url
}
