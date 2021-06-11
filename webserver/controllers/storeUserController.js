const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        Users.create({
            userId: req.body.userId,
            age: req.body.age,
            password: hash,
        }, (error) => {
            if (error) {
                return res.redirect('/signup')
            }
        })
        
        res.redirect('/')
    })
}
