import path from 'node:path';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const app = express()

// Define paths for express config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Muhammad Abdulbaqi'
    })  
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Muhammad Abdulbaqi'
    })
})

app.get('/help', (req, res) => {

    res.render('help', {
        title: 'Help',
        email: 'm.abdulbaqi1702@gmail.com',
        message: 'We are here to help you with any issues you may have.',
        name: 'Muhammad Abdulbaqi'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'New York',
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000.')
})