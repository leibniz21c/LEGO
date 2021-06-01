const Users = require('../models').Users

module.exports = async (req, res) => {
    if (req.session.email) {
        const user = await Users.findOne({
            where: {
                email: req.session.email
            }
        });
        res.render('mypage', {
            user
        });
    } else {
        res.redirect('/')
    }
}