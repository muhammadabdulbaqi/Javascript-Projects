import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=d67ec6a8fca612dfe749409b7baa0be5&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = body
            callback(undefined, {
                forecast: ("It is currently " + data.current.temperature + " degrees out in " +
                    data.location.name + ". There is a " + Math.round(data.current.precip * 100) + " % chance of rain." +
                    " It actually feels like " + data.current.feelslike + " degrees out." +
                    " If I were to describe the weather, I would say it is " + data.current.weather_descriptions[0] + ".")
            })
        }
    })
}

export { forecast }