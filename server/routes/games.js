module.exports = (req, res) => {
    if (req.session.email) {
        console.log("[DEBUG] : " + req.session)
        res.render('games');
    } else {
        res.redirect('/')
    }
}