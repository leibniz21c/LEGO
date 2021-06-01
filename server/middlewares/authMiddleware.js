const Users = require("../models").Users

module.exports = async (req, res, next) => {
    var user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    // Email already exist.
    if (user) {
        // Must change
        return res.redirect('/')
    }

    // Password confirming
    if (req.password !== req.confirm_password) {
        console.log('[DEBUG] : Password doesn\'t confirm.')

        // Must change
        return res.redirect('/')
    }
    next()
}