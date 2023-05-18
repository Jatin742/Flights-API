const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');
const moment = require('moment');

router.post('/', async (req, res) => {
    const { source, destination, date } = req.body;
    const dateString = moment(date, 'DD MMMM YYYY').format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    // const date = new Date(Date.parse(formattedDateString));
    
    try {
        const flights = await Flight.find({ source, destination, "date":dateString });
        
        const prices = flights.reduce((result, flight) => {
            result[flight.airline] = `₹${flight.price}`;
            return result;
          }, {});
        
        res.json(prices);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;