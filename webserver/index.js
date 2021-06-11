const express = require('express')
const sequelize = require('./models/index').sequelize;
sequelize.sync()
const app = new express()
const cors = require('cors')
const expressSession = require('express-session')

// Option
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}

// App Using
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use(cors(corsOptions))

// Routers
const homeRouter = require('./routes/home')
const signupRouter = require('./routes/signup')
const gamesRouter = require('./routes/games')
const gamePageRouter = require('./routes/gamePageRouter')
const rankingRouter = require('./routes/ranking')
const rankingPageRouter = require('./routes/rankingPage')
const boardRouter = require('./routes/board')
const developerRouter = require('./routes/developer')
const setBoardRouter = require('./routes/write')
const getBoardRouter = require('./routes/read')
const updateRouter = require('./routes/update')
const mypageRouter = require('./routes/mypage')
const mypageDetailRouter = require('./routes/mypageDetail')


// Controllers
const storeUserController = require('./controllers/storeUserController')
const signinContoller = require('./controllers/signinController')
const writeBoardContoller = require('./controllers/writeBoardController')
const updateBoardController = require('./controllers/updateBoardController')
const commentController = require('./controllers/commentController')
const commentDeleteController = require('./controllers/commentDeleteController')
const mypageCheckController = require('./controllers/mypageCheckController')
const passwordModifyController = require('./controllers/passwordModifyController')
const setGameLogController = require('./controllers/setGameLogController')
const gamePageController = require('./controllers/gamePageController')
const logoutController = require('./controllers/logoutController')

// Middlewares
const authMiddleware = require('./middlewares/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middlewares/redirectIfAuthenticatedMiddleware')

// Routing
app.get('/', homeRouter)
app.get('/signup', signupRouter)
app.get('/games', gamesRouter)
app.get('/games/:gameId', gamePageController)
app.get('/ranking', rankingRouter)
app.get('/ranking/rankingPage/:gameId', rankingPageRouter)
app.get('/developer', developerRouter)
app.get('/board', boardRouter)
app.get('/board/write', setBoardRouter)
app.get('/board/read/:boardId', getBoardRouter)
app.get('/mypage', mypageRouter)
app.get('/mypage/detail', mypageDetailRouter)

app.post('/games', gamePageRouter)


// Controller
app.get('/games/gamepage/:gameId', gamePageController)

app.post('/signin', redirectIfAuthenticatedMiddleware, signinContoller)
app.post('/signup', authMiddleware, storeUserController)
app.post('/board/write', writeBoardContoller)
app.post('/board/update', updateRouter)
app.post('/board/update/done', updateBoardController)
app.post('/board/comment', commentController)
app.post('/board/comment/delete', commentDeleteController)
app.post('/mypage/detail', mypageCheckController)
app.post('/mypage/detail/modify_password', passwordModifyController)
app.post('/logout', logoutController)

// Game commnuication
app.post('/logging', setGameLogController)

// Listening
app.listen(3000, () => {
    console.log('App listening on http://127.0.0.1:3000/')
}) 