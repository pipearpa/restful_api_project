const express = require('express') // Para incluir el Framework
const app = express(); // Instancia del framework Express
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Validamos que no estemos en ambiente de producción
if(process.env.NODE_ENV != 'production'){
    // Se carga la configuración archivo .env al process.env
    require('dotenv').config()
}

app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(bodyParser.urlencoded({extended:false}))// Recibir datos formulario sencillos
app.use(bodyParser.json()) // Para recibir json
app.use(morgan('combined'))

app.use('/api/v1/users',require('./api/v1/routes/users.routes'))
app.get('/api/v1/test',(req, res) => {
    res.send('Hello ADSO !!!')
})

app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`);
})