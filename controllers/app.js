const Url = require('../models/URL')

const app = async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code })

        if(url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No url found')
        }
    } catch (error) {
        console.error(error)
        res.status(500).json('Server error')
    }

}

module.exports = {
    app
}
