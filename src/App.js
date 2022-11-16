import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {

  //const url= `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=612869ce51bac84b953d4352389df118`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>İstanbul</p>
          </div>
          <div className="temp">
            <h1>30C°</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>35C°</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
