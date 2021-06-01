const Boards = require("../models").Boards;

module.exports = async (req, res) => {
    // Select
    const board = await Boards.findOne({
        where: {
            boardId: req.body.boardId
        }
    })

    // Update
    board.title = req.body.title
    board.body = req.body.body
    board.modidate = new Date().toUTCString()
    
    // Save
    await board.save()

    res.redirect('/board')
}