const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const {oldpassword, newpassword01, newpassword02} = req.body
    const user = await Users.findOne({
        where : {
            userId:req.session.userId
        }
    })

    // Compare newpassword1 and newpassword2
    if (newpassword01 === newpassword02) {
        if (user) {
            bcrypt.compare(oldpassword, user.password, (error, same) => {
                if (same) {
                    bcrypt.hash(newpassword01, 10, (error, hash) => {
                        user.password = hash
                        user.save()
                        res.redirect('/')
                    })
                } else {
                    // Incorrect old password
                    res.redirect('/mypage')
                }
            })
        } else {
            // Go home! Who are U?
            res.redirect('/')
        }

    } else {
        // Password confirm error!

    }
}