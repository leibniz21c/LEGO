const Boards = require('../models').Boards

module.exports = async (req, res) => {
    if (req.session.userId) {
        const boards = await Boards.findAll();
        res.render('board', {
            boards
        });
    } else {
        res.redirect('/')
    }
}