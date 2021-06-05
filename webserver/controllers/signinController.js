const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const {userId, password} = req.body
    
    const user = await Users.findOne({
        where : {
            userId: userId
        }
    })
    if (user) {
        bcrypt.compare(password, user.password, (error, same) => {
            if (same) {
                req.session.userId = user.userId
                res.redirect('/games')
            } else {
                res.redirect('/')
            }
        })
    } else {
        res.redirect('/')
    }
}