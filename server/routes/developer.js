module.exports = (req, res) => {
    if (req.session.email) {
        res.render('developer');
    } else {
        res.redirect('/')
    }
}