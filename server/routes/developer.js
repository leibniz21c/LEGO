module.exports = async (req, res) => {
    if (req.session.email) {
        res.render('developer');
    } else {
        res.redirect('/')
    }
}