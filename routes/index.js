module.exports = (app) => {
    let entries = [];
    app.locals.entries = entries


    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Home'
        })
    })

    app.get('/new-entry', (req, res) => {
        res.render('new-entry', {
            title: 'Nueva entrada'
        })
    })

    app.post('/new-entry', (req, res) => {
        // Verifica si el título no está presente o el cuerpo está vacío
        if (!req.body.title || !req.body.body) {
            // Utiliza res.sendStatus para enviar el código de estado sin cuerpo de respuesta
            return res.sendStatus(400).send('Las entradas deben tener un título y un cuerpo');
        }
    
        let newEntry = {
            title: req.body.title,
            content: req.body.body,
            published: new Date()
        };
    
        entries.push(newEntry);
    
        // Utiliza res.redirect sin enviar una respuesta adicional
        res.redirect('/');
    });

}