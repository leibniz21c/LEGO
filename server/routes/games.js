module.exports = (req, res) => {
    if (req.session.email) {
        res.render('games');
    } else {
        res.redirect('/')
    }
}