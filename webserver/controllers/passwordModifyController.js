const Users = require("../models").Users
const Boards = require("../models").Boards
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const oldpassword = req.body.oldpassword
    const newpassword01 = req.body.newpassword1
    const newpassword02 = req.body.newpassword2

    const user = await Users.findOne({
        where : {
            userId:req.session.userId
        }
    })
    const boards = await Boards.findAll({
        where: {
            userId: req.session.userId
        }
    })

    // Compare newpassword1 and newpassword2
    if (newpassword01 == newpassword02) {
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
            // Go home! Are you hacker?!!?!?!
            res.redirect('/')
        }

    } else {
        // Password confirm error!
        res.render('mypage_detail', {
            user,
            boards,
            unconfirmed: true
        })
    }
}