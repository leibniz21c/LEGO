module.exports = async (req, res) => {
    if (req.session.email) {
        res.render('ranking');
    } else {
        res.redirect('/')
    }
    
}