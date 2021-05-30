const express = require('express')
const ejs = require('ejs')
const sequelize = require('./models/index').sequelize;
sequelize.sync()
const app = new express()
const bodyParser = require('body-parser')
const expressSession = require('express-session')


// App Using
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(expressSession({
    secret: 'keyboard cat'
}))

// Routers
const homeRouter = require('./routes/home')
const signupRouter = require('./routes/signup')
const gamesRouter = require('./routes/games')
const rankingRouter = require('./routes/ranking')
const communityRouter = require('./routes/community')
const developerRouter = require('./routes/developer')

// Controllers
const storeUserController = require('./controllers/storeUserController')
const signinContoller = require('./controllers/signinController')

// Middlewares
const authMiddleware = require('./middlewares/authMiddleware')
const redirectIfAuthenticatedMiddleware =
    require('./middlewares/redirectIfAuthenticatedMiddleware')

// Routing
app.get('/', homeRouter)
app.get('/signup', signupRouter)
app.get('/games', gamesRouter)
app.get('/ranking', rankingRouter)
app.get('/community', communityRouter)
app.get('/developer', developerRouter)

app.post('/signin', redirectIfAuthenticatedMiddleware, signinContoller)
app.post('/signup', authMiddleware, storeUserController)

// Listening
app.listen(3000, () => {
    console.log('App listening on http://127.0.0.1:3000/')
})