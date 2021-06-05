const Comments = require("../models").Comments

module.exports = async (req, res) => {
    await Comments.create({
        userId: req.session.userId,
        body: req.body.body,
        boardId: req.body.boardId,
    })

    res.redirect('/board/read/' + req.body.boardId);
}
