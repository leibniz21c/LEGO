const Boards = require("../models").Boards;

module.exports = async (req, res) => {
    const board = await Boards.findOne({
        where: {
            boardId: req.body.boardId
        }
    })

    res.render('update', {
        board
    });
}