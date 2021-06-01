const Comments = require("../models").Comments

module.exports = async (req, res) => {
    await Comments.create({
        email: req.session.email,
        body: req.body.body,
        boardId: req.body.boardId,
    })

    res.redirect('/board/read/' + req.body.boardId);
}
