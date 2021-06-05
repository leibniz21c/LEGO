const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const password = req.body.password
    
    const user = await Users.findOne({
        where : {
            userId:req.session.userId
        }
    })

    if (user) {
        bcrypt.compare(password, user.dataValues.password, (error, same) => {
            if (same) {
                req.session.mypageMode = true
                res.redirect('/mypage/detail')
            } else {
                // Incorrect
                res.redirect('/mypage')
            }
        })
    } else {
        // Go home
        res.redirect('/')
    }
}