const express = require('express')
const ejs = require('ejs')
const app = new express()

// App Using
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// MySQL
// Must be protected! (얘들아 여기 노출안되게 잘 확인해 꼭! - 괴도 희성)
const mysql = require('mysql2')
var connection = mysql.createConnection({
    host     : '***.***.***.***',
    user     : '********',
    password : '********',
    database : 'LEGO'
});
connection.connect();

// Controllers
const homeController = require('./controllers/home')
const signupController = require('./controllers/signup')
const gamesController = require('./controllers/games')
const rankingController = require('./controllers/ranking')
const communityController = require('./controllers/community')
const developerController = require('./controllers/developer')

// Routing
app.get('/', homeController)
app.get('/signup', signupController)
app.get('/games', gamesController)
app.get('/ranking', rankingController)
app.get('/community', communityController)
app.get('/developer', developerController)

// Listening
app.listen(3000, () => {
    console.log('App listening on http://127.0.0.1:3000/')
})