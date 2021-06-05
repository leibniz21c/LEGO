const Users = require('../models').Users
const Boards = require('../models').Boards

module.exports = async (req, res) => {
    if (req.session.userId && req.session.mypageMode) {
        const user = await Users.findOne({
            where: {
                userId: req.session.userId
            }
        });
        const boards = await Boards.findAll({
            where: {
                userId: req.session.userId
            }
        })
        res.render('mypage_detail', {
            user,
            boards
        });
    } else {
        res.redirect('/')
    }
}