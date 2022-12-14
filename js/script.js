// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-JS/sw.js", {
    scope: "/ICS2O-Unit6-03-JS/",
  })
}

// main

const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const weatherData = await result.json()
    const celsius = weatherData.main.temp - 273.15
    document.getElementById("weather-text").innerHTML =
      "Weather : " +
      weatherData.weather[0].main +
      "<br>Temperature : " +
      celsius.toFixed(2) +
      " °C<br>Region : " +
      weatherData.sys.country +
      "<br>Weather Icon:<img src= 'http://openweathermap.org/img/wn/" +
      weatherData.weather[0].icon +
      "@2x.png'>"
  } catch (err) {
    console.log(err)
  }
}

getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
