import React from 'react';


const Current = ({ current }) => {

  return (
    <div className="Current">
      <div className="currentWeather">
        <p className="currentDay">It is {current.currentDay} in</p>
        <h2 className="currentCity">{current.currentCity}</h2>
        <p className="currentStyles" >The current temperature is</p>
        <h2 className="currentTemp">{current.currentTemp}&deg;F & {current.currentCondition}</h2>
        <div className="description">
          {current.description}
        </div>
        <div className="lowHighContainer">
          <p className="dailyTemperatures">
            <span className="lowTemp currentLow">{current.lowTemp}</span>/
            <span className="highTemp currentHigh"> {current.highTemp}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Current;
