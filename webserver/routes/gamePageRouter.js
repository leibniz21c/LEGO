const Games = require('../models').Games

module.exports = (req,res) => {
    req.session.gameId = req.body.gameId
    res.redirect('/games/' + req.body.gameId)
}