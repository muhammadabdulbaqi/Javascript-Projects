import path from 'node:path';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express()
const publicDirectoryPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public');

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'New York',
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000.')
})