import path from 'node:path';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express()
const publicDirectoryPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public');

app.set('view engine', 'hbs')

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