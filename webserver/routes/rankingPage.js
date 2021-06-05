const GameLogs = require('../models').GameLogs
const sequelize = require('../models').sequelize
const Games = require('../models').Games

module.exports = async (req, res) => {
    if (req.session.userId) {

        const game = await Games.findOne({
            where :{
                gameId: req.params.gameId
            }        
        })

        const gamelogs = await GameLogs.findAll({
            where: {
                gameId: game.gameId
            },
            order: [
                ['score', 'DESC'],
            ]
        })

        res.render('rankingPage', {
            gamelogs,
            game
        });
    
    } else {
        res.redirect('/')
    }
}