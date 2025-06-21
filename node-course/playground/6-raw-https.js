// const https = require('https')
import http from 'http'

const url = 'http://api.weatherstack.com/current?access_key=d67ec6a8fca612dfe749409b7baa0be5&query=40,-75&units=m'

const request = http.request(url, (response) => {

    let data = '' // Using let because we will be modifying this variable

    response.on('data', (chunk) => {

        data += chunk // Concatenate the chunk to the data variable

    })

    response.on('end', () => {

        const body = JSON.parse(data) // Parse the data into a JSON object
        console.log(body) // Log the JSON object to the console

    })

})

request.on('error', (error) => {
    console.error('Error:', error) // Log any errors that occur during the request

})

request.end()