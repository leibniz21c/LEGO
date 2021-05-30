module.exports = async (req, res) => {
    if (req.session.email) {
        res.render('community');
    } else {
        res.redirect('/')
    }
}