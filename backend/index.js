import express from "express";
import {PORT, mongoDBURL, weatherAPI} from "./config.js";
import mongoose from "mongoose";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

app.get('/', (request, response) => 
{
    console.log(request);
    return response.status(234).send("This is the Weather App.");
});

app.get("/weather", async (req, res) => {
    try {
      // Extract the city name from the query parameters
      const cityName = req.query.city;
  
      if (!cityName) {
        return res.status(400).json({ error: "City parameter is required" });
      }
  
      // You can customize this URL based on the OpenWeather API documentation
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${weatherAPI}`;
  
      const response = await axios.get(apiUrl);
    
      const weatherData = 
      {
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
      };
  
      return res.status(200).json(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
  
mongoose.
connect(mongoDBURL)
.then(() => 
{
    console.log("Weather App connection established");
    app.listen(PORT, () =>
    {
        console.log(`Weather App listening on port: ${PORT}`);
    });
})
.catch((error) =>
{
    console.log("Error: ", error);
});


