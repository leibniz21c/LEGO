module.exports = (req, res) => {
    if (req.session.email) {
        res.render('board');
    } else {
        res.redirect('/')
    }
}