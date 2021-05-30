const models = require("../models")
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const {email, password} = req.body
    
    const user = await models.User.findOne({
        where : {
            email:email
        }
    })

    if (user) {
        bcrypt.compare(password, user.dataValues.password, (error, same) => {
            if (same) {
                // matched
                req.session.email = user.dataValues.email
                res.redirect('/games')
            } else {
                res.redirect('/')
            }
        })
    } else {
        // No user (email)
        res.redirect('/')
    }
}