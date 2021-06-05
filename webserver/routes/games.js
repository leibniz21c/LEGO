const Games = require('../models').Games

module.exports = async(req, res) => {
    if (req.session.userId) {
        const games = await Games.findAll();

        res.render('games', {
            games
        });
    } else {
        res.redirect('/')
    }
}