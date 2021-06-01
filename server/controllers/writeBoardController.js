const Boards = require("../models").Boards

module.exports = async (req, res) => {

    await Boards.create({
        email: req.session.email,
        title: req.body.title,
        body: req.body.body,
        viewCount: 0,
    })

    res.redirect('/board');
}
