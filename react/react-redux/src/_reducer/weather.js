import {
  GET_WEAHTER,
  GET_WEAHTER_ERROR,
  GET_WEAHTER_SUCCESS,
} from '../_types/weather_types';

const initState = {
  weather: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function weather(state = initState, action) {
  switch (action.type) {
    case GET_WEAHTER:
      return {
        ...state,
        weather: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_WEAHTER_SUCCESS:
      return {
        ...state,
        weather: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_WEAHTER_ERROR:
      return {
        ...state,
        weather: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
