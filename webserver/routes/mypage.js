const Users = require('../models').Users

module.exports = async (req, res) => {
    if (req.session.userId) {
        const user = await Users.findOne({
            where: {
                userId: req.session.userId
            }
        });
        res.render('mypage', {
            user
        });
    } else {
        res.redirect('/')
    }
}