import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weather from '../components/Weather';
import { getWeather } from '../_actions/weatherAction';

function WeatherContainer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.weather.weather
  );
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <Weather data={data} />;
}

export default WeatherContainer;
