module.exports = (req,res) => {

    return res.render('games/' + req.session.gameId)
}