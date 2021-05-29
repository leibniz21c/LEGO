const express = require('express')
const ejs = require('ejs')
const sequelize = require('./models/index').sequelize;
const app = new express()
const bodyParser = require('body-parser')

sequelize.sync()

// App Using
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// MySQL DB
// 도커 컨테이너 생성 전까지만 설정파일로 관리합시당

// Routers
const homeRouter = require('./routes/home')
const signupRouter = require('./routes/signup')
const gamesRouter = require('./routes/games')
const rankingRouter = require('./routes/ranking')
const communityRouter = require('./routes/community')
const developerRouter = require('./routes/developer')

// Controllers
const storeUserController = require('./controllers/storeUserController')

// Middlewares
const autuMiddleware = require('./middlewares/authMiddleware')

// Routing
app.get('/', homeRouter)
app.get('/signup', signupRouter)
app.get('/games', gamesRouter)
app.get('/ranking', rankingRouter)
app.get('/community', communityRouter)
app.get('/developer', developerRouter)

app.post('/signup', autuMiddleware, storeUserController)
// Listening
app.listen(3000, () => {
    console.log('App listening on http://127.0.0.1:3000/')
})