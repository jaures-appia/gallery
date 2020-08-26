require('babel-register')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')('dev')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8000

const photoRoutes = require('./routes/photos')


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

mongoose.connect('mongodb+srv://joblack:Jolove141@cluster0-rmm0h.mongodb.net/gallery?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json())
app.use(morgan)

app.use('/api/v1/photos/', photoRoutes)
app.listen(port, console.log('started on port ' + port))