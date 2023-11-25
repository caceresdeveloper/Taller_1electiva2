const bodyParser = require('body-parser');
const router = require('express').Router()


const path = require('path')

const dishes = new Map()

dishes.set(1010,{'id':1010,'name':'pollo criollo','isVegetarian':false,'calories':340,'value':45000})
dishes.set(2020,{'id':2020,'name':'pizza','isVegetarian':true,'calories':500,'value':35000})

router.use(bodyParser.urlencoded({ extended: true }));



router.get('/',(req,res)=>(res.render('index',{'title':'TAREAS','dishes':dishes})))

router.get("/insert",(req,res)=>(res.render('form',{'title':'Insertar Tarea'})))

router.get("/buscar",(req,res)=>(res.render('buscar',{'title':'Buscar Tarea'})))


// Ruta para manejar la creación de nuevas tareas
router.post('/add', (req, res) => {
    // Obtén los datos del cuerpo de la solicitud
    const { id, name, isVegetarian, calories, value } = req.body;
    console.log('Datos del formulario:', req.body);
    // Crea un objeto con la nueva tarea
    const newDish = {
        id: parseInt(id),
        name,
        isVegetarian: isVegetarian === 'true', // Convierte la cadena a un booleano
        calories: parseInt(calories),
        value: parseInt(value),
    };

    // Agrega la nueva tarea al mapa
    dishes.set(newDish.id, newDish);

    // Redirige a la página principal después de agregar la nueva tarea
    res.redirect('/');
    console.log('Contenido del Map después de agregar una nueva tarea:');
    for (const [key, value] of dishes) {
        console.log(`ID: ${key}, Datos:`, value);
    }
});


module.exports = router