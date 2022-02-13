# React - redux-thunk 정리

> 아직 글로 정리하지 못함.

📌 목차

- [x] redux 란
- [ ] react-redux
- [x] react-redux thunk

# Redux란?

[JS-Redux 정리자료 참고](https://github.com/kimyouknow/CS-JS-Algorithm/tree/main/js/Redux)

# React에서 redux

## 사용하는 이유

react에서는 컴포넌트끼리 직접 소통할 수 있지만, 코드가 복잡해지고 디버깅이 어려워 권장하지 않는다. 보통 react에서 부모 컴포넌트가 중간자 역할을 한다. 하지만 부모-자식 컴포넌트의 복잡성이 증가하고 깊이가 깊어질수록 state를 관리하기 복잡해질 수 있다.

# React redux thunk

redux-thunk는 redux에서 비동기 작업을 처리 할 때 많이 사용하는 미들웨어 중 하나다.

## thunk

[위키백과 - Thunk](https://ko.wikipedia.org/wiki/썽크)는 기존의 서브루틴에 추가적인 연산을 삽입할 때 사용되는 서브루틴이다. Thunk는 주로 연산 결과가 필요할 때까지 연산을 지연시키는 용도로 사용되거나, 기존의 다른 서브루틴들의 시작과 끝 부분에 연산을 추가시키는 용도로 사용된다. 아래 예시를 살펴보자.

```js
const x = 1 + 2; // 1번
const thunk_x = () => 1 + 2; // 2번
```

1번은 연산이 바로 실행되지만 2번은 바로 실행되지 않고, thunk_x가 호출되어야만 실행된다.

## redux-thunk

redux-thunk미들웨어를 사용하면 `객체 대신 함수를 생성하는 액션함수`를 작성할 수 있다. redux-thunk를 사용하면 action 객체가 아닌 함수를 dispatch할 수 있다. redux에서 일반 action생성자는 다음과 같이 parameter를 통해 액션 객체만 생성한다.

```js
const actionCreator = (payload) => ({ action: 'ACTION', payload });
```

공식문서에 따르면 Thunks가 Redux 앱에서 비동기 로직, data fetching을 ​​작성하기 위한 표준 접근 방식이라고 한다. 특정 액션을 몇 초뒤에 실행되게 하거나, 현재 상태에 따라 액션이 무시되게 하기와 같은 기능도 일반 action 생성자로는 할 수 없다.

```js
function actionAyncs() {
  return (dispatch) => {
    // dispatch를 파라미터로 가지는 함수를 리턴
    setTimeout(() => {
      dispatch(actionCreator());
    }, 1000);
  };
}
```

### 1. 가짜 api 함수 사용

[벨로퍼트와 함께하는 모던 리액트 - redux](https://react.vlpt.us/redux/)의 예제 사용

### 2. open weather api 사용

1. weatherAction.js

```js
function getWeatherAPI() {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&APPID=${API_Key}`
  );
}

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
```

2. weather_reducer.js

```js
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
```

🔍 참고자료

- [react-redux.js.org 문서](https://react-redux.js.org)
- [writing-logic-thunk react-redux.js.org 문서](https://redux.js.org/usage/writing-logic-thunks)
- [벨로퍼트와 함께하는 모던 리액트 - redux](https://react.vlpt.us/redux/)
- [벨로퍼트와 함께하는 모던 리액트 - redux middleware](https://react.vlpt.us/redux-middleware/)
- [react-redux 사용법 - kyounghwan01.github.io](https://kyounghwan01.github.io/blog/React/redux/redux-basic/#사용하는-이유)
- [생활코딩 - react-redux 2022 개정판](https://youtu.be/yjuwpf7VH74)
- [Velopert - 리덕스를 왜 쓸까?](https://velopert.com/3528)
- [Redux 어떻게 써야 잘 썼다고 소문이 날까?](https://velog.io/@velopert/using-redux-in-2021)
