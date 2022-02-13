import { getWeatherAPI } from '../api/weather';
import { createPromiseThunk } from '../lib/asyncUtils';
import {
  GET_WEAHTER,
  GET_WEAHTER_ERROR,
  GET_WEAHTER_SUCCESS,
} from '../_types/weather_types';

// export const getWeather = createPromiseThunk(GET_WEAHTER, getWeatherAPI);

export const getWeather = () => async (dispatch) => {
  dispatch({ type: GET_WEAHTER });
  try {
    const response = await getWeatherAPI();
    dispatch({
      type: GET_WEAHTER_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_WEAHTER_ERROR,
      payload: err,
    });
    throw err;
  }
};
