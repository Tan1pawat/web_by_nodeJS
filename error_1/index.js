const mongoose = require('mongoose')
const express = require('express')
const app = express()
const ejs = require('ejs')
const expressSession = require('express-session')
const flash = require('connect-flash')

const indexController = require('./controllers/indexController')
const RegisterController = require('./controllers/RegisterController')
const LoginController = require('./controllers/LoginController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const uploadproductController = require('./controllers/uploadproductController')
const showproductController = require('./controllers/showproductController')

mongoose.connect('mongodb+srv://admin:admin12345@cluster0.uxdoohz.mongodb.net/?retryWrites=true&w=majority')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.set('view engine', 'ejs')

app.get('/',LoginController)
app.get('/login', LoginController)
app.get('/register', RegisterController)
app.post('/register', RegisterController)
app.post('/user/register' ,storeUserController)
app.post('/user/login' ,loginUserController)
app.get('/index',indexController)
app.post('/product/upload',uploadproductController)
app.get('/showproduct',showproductController)

app.listen(3000, ()=> {
    console.log("test")
})
