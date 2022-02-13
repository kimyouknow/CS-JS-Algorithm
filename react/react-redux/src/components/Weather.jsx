import React from 'react';

function Weather({ data }) {
  const { coord, weather, main, name } = data;
  const { lon, lat } = coord;
  const { description } = weather[0];
  const { temp } = main;
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{lon}</li>
        <li>{lat}</li>
        <li>{description}</li>
        <li>{temp}</li>
      </ul>
    </div>
  );
}

export default Weather;
