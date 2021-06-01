module.exports = (req, res) => {
    if (req.session.email) {
        res.render('write');
        
    } else {
        res.redirect('/')
    }
}