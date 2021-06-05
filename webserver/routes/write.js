module.exports = (req, res) => {
    if (req.session.userId) {
        res.render('write');
        
    } else {
        res.redirect('/')
    }
}