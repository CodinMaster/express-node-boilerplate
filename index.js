const express = require('express')
const path = require('path')
//for templating engine
const hoganMiddleware = require('hogan-middleware')
//to handle post requests' data
const bodyParser = require('body-parser')

const app = express() //instantiate app
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)
app.use(express.static(path.join(__dirname, 'public')))

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))  // general dev environ port nos. 3000, 5000, 8000, 8080. Can use any other as well.

//import routes
const indexRouter = require('./routes/index') 
app.use('/', indexRouter)