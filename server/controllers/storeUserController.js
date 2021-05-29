const models = require("../models")
const bcrypt = require('bcrypt')

module.exports = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        models.User.create({
            email: req.body.email,
            age: req.body.age,
            sex: req.body.sex,
            password: hash,
        },
        (error, user) => {
            if (error) {
                return res.redirect('/signup')
            }
        })
        next()
    })
}
