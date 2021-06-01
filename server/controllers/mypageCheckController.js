const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const password = req.body.passoword
    
    const user = await Users.findOne({
        where : {
            email:req.session.email
        }
    })

    if (user) {
        bcrypt.compare(password, user.dataValues.password, (error, same) => {
            if (same) {
                req.session.mypageMode = true
                res.render('mypage_detail')
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