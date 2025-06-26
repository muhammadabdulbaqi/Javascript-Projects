import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const request = require('request');
import { geocode } from './utils/geocode.js';
import { forecast } from './utils/forecast.js';

const city = process.argv[2]

if (!city) {
      console.log('Please provide a location name.');
} else {
    // Geocode: Provide a location name to get its latitude, longitude, and display name
    geocode(city, (error, { latitude , longitude, location} = {}) =>  {
        
        if(error) {
            return console.log('Error:', error);
        }

        // Forecast: Provide latitude,longitude to get current weather data
        forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
              return console.log('Error:', error);
          }
          console.log('Location:', location);
          console.log(forecastData.forecast);
      })
    })
}



