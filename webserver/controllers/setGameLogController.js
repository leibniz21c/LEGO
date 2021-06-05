const Users = require("../models").Users
const Games = require("../models").Games
const GameLogs = require("../models").GameLogs

module.exports = async (req, res) => {
    const user = await Users.findOne({
        where: {
            userId: req.session.userId
        }
    })

    const game = await Games.findOne({
        where: {
            gameId: req.session.gameId
        }
    })

    const gamelog = await GameLogs.findOne({
        where: {
            userId: user.userId,
            gameId: game.gameId
        }
    })

    if (!gamelog) {
        // There isn't a game log.
        GameLogs.create({
            userId: user.userId,
            gameId: game.gameId,
            score: req.body.score
        })
    } else {
        // There is a game log.
        if (gamelog.score < req.body.score) {
            // New ranking!
            gamelog.score = req.body.score
            gamelog.save()
        }
    }
    res.redirect('/ranking')
}