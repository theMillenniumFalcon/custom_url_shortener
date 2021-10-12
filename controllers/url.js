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
            // checking if the url is in the database
            let url = await Url.findOne({ longUrl })

            if(url) {
                res.json(url)
            } else {
                const shortUrl = baseUrl + '/' + urlCode
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.error(error)
            res.status(500).json('Server error')
        }
    } else {
        res.status(404).json('Invalid long url')
    }
}

module.exports = {
    url
}
