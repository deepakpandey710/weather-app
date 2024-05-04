const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const { PORT, API_KEY } = require('./src/config/serverConfig');

app.use(express.json());
app.use(cors());


app.get('/weather/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

        const response = await axios.get(apiUrl);

        const weatherData = {
            city: response.data.location.name,
            temperature: response.data.current.temp_c,
            description: response.data.current.condition.text
        };

        res.json(weatherData);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
