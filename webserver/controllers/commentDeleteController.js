const Comments = require("../models").Comments

module.exports = async (req, res) => {
    await Comments.destroy({
        where: {
            commentId: req.body.commentId
        }
    })

    res.redirect('/board/read/' + req.body.boardId)
}
