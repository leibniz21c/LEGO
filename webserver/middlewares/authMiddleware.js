const Users = require("../models").Users

module.exports = async (req, res, next) => {
    var user = await Users.findOne({
        where: {
            userId: req.body.userId
        }
    })

    // Email already exist.
    if (user) {
        // Must change
        return res.redirect('/')
    }

    // Password confirming
    if (req.body.password !== req.body.confirm_password) {
        console.log('[DEBUG] : Password doesn\'t confirm.')

        // Must change
        return res.redirect('/')
    }
    next()
}