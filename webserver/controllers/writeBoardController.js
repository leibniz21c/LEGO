const Boards = require("../models").Boards

module.exports = async (req, res) => {

    await Boards.create({
        userId: req.session.userId,
        title: req.body.title,
        body: req.body.body,
        viewCount: 0,
    })

    res.redirect('/board');
}
