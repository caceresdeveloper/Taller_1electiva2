const express = require('express')


const app = express()

const path = require('path')

//setters
app.set('PORT',process.env.PORT || 3000)

app.set('views', path.join(__dirname,'/views'))
app.set('view engine','ejs')

//middleware
// app.get("/",(req,res)=>res.sendFile(path.join(__dirname,'/views/index.html')))
// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')))

app.use("/dishs",require('./routes/index'))

app.get('/insert', (req, res) => {
    res.render('form', { title: 'Insertar Tarea' });
});

app.get('/buscar',(req,res)=>{
    res.render('buscar',{title:'Buscar tarea'})
});


app.listen(app.get('PORT'),()=>console.log(`server listen at port ${app.get('PORT')}`))