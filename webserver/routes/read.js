const Boards = require('../models').Boards
const Comments = require('../models').Comments

module.exports = async (req,res) => {
    const board = await Boards.findOne({
        where :{
            boardId: req.params.boardId
        }        
    })
    board.viewCount ++;
    board.save();

    const comments = await Comments.findAll({
        where: {
            boardId: board.boardId
        }
    })

    const nowUserId = req.session.userId
    
    res.render('read', {
        board,
        comments,
        nowUserId,
    })
}