const Boards = require('../models')

module.exports = async (req, res) => {
    if (req.session.email) {
        const boards = await Boards.findAll();
        res.render('board', {
            boards
        });
    } else {
        res.redirect('/')
    }
}