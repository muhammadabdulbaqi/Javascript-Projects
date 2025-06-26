import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) +'&api_key=6852caed515a6444742394mwc4523ef'

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (!body || body.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = body[0]
            callback(undefined, {
                latitude: data.lat,
                longitude: data.lon,
                location: data.display_name
            })
        }
    })
}

export { geocode }