const router = require('express').Router()


const path = require('path')

const dishes = new Map()

dishes.set(1010,{'id':1010,'name':'pollo criollo','isVegetarian':false,'calories':340,'value':45000})
dishes.set(2020,{'id':2020,'name':'pizza','isVegetarian':true,'calories':500,'value':35000})


router.get('/',(req,res)=>(res.render('index',{'title':'TAREAS','dishes':dishes})))

router.get("/insert",(req,res)=>(res.render('form',{'title':'Insertar Tarea'})))

router.get("/buscar",(req,res)=>(res.render('buscar',{'title':'Buscar Tarea'})))


// router.post("/",(req,res)=>{
//     const {id,name,isVegetarian,value,calories} = req.body
//     console.log("id=${id}");
//     //todo se agrega al MAP
//     res.redirect("/")
// })



module.exports = router