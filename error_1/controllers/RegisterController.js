module.exports = (req, res) => {
    res.render('Register',{
        errors: req.flash('validationErrors')
    })
}