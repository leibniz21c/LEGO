module.exports = (req,res) => {
    // Session remove
    req.session.userId = null

    // redirect to home
    res.redirect('/')
}