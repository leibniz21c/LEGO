module.exports = (req, res) => {
    if (req.session.userId) {
        res.render('developer');
    } else {
        res.redirect('/')
    }
}