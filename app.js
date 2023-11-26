const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//routes
require('./routes/index')(app)



app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(app.get('port'), ()=>{
    console.log(`servidor en puerto ${app.get('port')}`)
})