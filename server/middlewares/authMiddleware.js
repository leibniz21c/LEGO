const models = require("../models")

module.exports = async (req, res, next) => {
    var user = await models.User.findOne({
        where: {
            email: req.body.email
        }
    })

    console.log('email : ' + req.body.email)

    // Email already exist.
    if (user) {
        console.log('[DEBUG] : Email already exist.')

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

// module.exports = (req, res, next) => {    
//     User.findById(req.session.userId, (error, user ) =>{
//       if(error || !user ) 
//         return res.redirect('/')
      
//       next()
//     })
// }