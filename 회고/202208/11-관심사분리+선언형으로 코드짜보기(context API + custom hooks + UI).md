## 관심사분리+선언형으로 코드짜보기

이번 주뿐만 아니라 7월동안 react코드를 작성하면서 `UI와 로직의 분리에 집중`했다. UI와 로직을 분리하면서 자엽스럽게 반복되는 로직을 발견하게 됐다. 보통 데이터 요청과 관련된 코드가 반복됐다.

> get과 같은 `조회 요청`한 뒤 로딩상태를 UI에 보여주고 올바른 값이 오면 화면에 데이터를 표시하고 에러가 발생하면 에러 메세지와 함께 다시 요청하는 버튼을 보여줘야 한다.
> post, patch, delete `서버 상태를 변화시키는 요청`을 한 뒤 처리중이라는 상태를 UI로 보여주고, 올바른 값이 오면 다시 get요청을 하고, 에러가 발생하면 에러 메세지와 함께 다시 요청하는 버튼을 보여준다.

위와 같이 반복되는 요청을 HOC(High Order Component : WithLoading, WithInifinteScroll,)이나 custom hooks (useComments, useTodoList)으로 줄이다보니 자연스럽게 선언적으로 코드를 작성하게 되었다. 핵심은 여러 컴포넌트에서 반복되는 로직을 최대한 줄이면서 어떻게 동작하는지 코드가 선언된 곳만 보고 알 수 있게 하는지다. (진유림님 유튜브랑 블로그 참고)

react-query나 recoil처럼 선언적인 UI 작성과 상태관리를 도와주는 라이브러리를 바로 사용할까하다가 우선 `context API + custom hooks + UI` 조합으로 디자인 패턴을 구현해보고 있다.

- `custom hooks`: 서버 상태 요청, 로컬상태관리
- `UI` : 순수한 view, 이벤트 등록
- `context API:`컴포넌트를 작게 나누면서 생기는 props drilling문제를 해결

### 문제점

> 아직 문제가 뭔지도 잘 모르는 상태, 투두 리스트를 마저 리팩토링하면서 다시 정리해봐야겠다.

- 타입지정
- get요청과 다른 요청(post, patch, delete..) 등의 약간 다른 부분을 통일하기 어려움
  - get 요청은 데이터를 요청할 때 상태에 따라 화면 자체를 바꾼다.
  - 다른 요청은 화면은 그대로로 요청에 따른 상태만 얼럿과 같은 방법으로 사용자에게 알려주기만 하면 된다.
- 서버상태와 로컬상태를 적절하게 연결하기 어렵다.
  - 로컬상태로 사용하는 서버상태
  - 서버 데이터 요청만 있는 애들

## API 인스턴스 구분

- privateApiInstance: `인증`이 필요한 api 인스턴스
- publicApiInstance: 회원가입, 로그인 및 get요청에 관련된 api인스턴스

`API요청할 때 인증이 필요한가?`를 기준으로 구분했다. 지금 내가 구현한 방식이 token을 기반으로 api요청에 대한 인증을 하기 때문에 인증이 필요한 api와 인증이 필요하지 않은 api를 구분할 필요가 있었다. 인증이 필요한 api는 header에 access token과 refresh token을 넣어줘야했고 인증이 필요하지 않은 api는 token을 넣어줄 필요가 없었다.

이렇게 구분했을 때 장점으로는 인증과 관련된 변경사항이 생겼을 때 수정하기 용이할 것 같다고 생각했다. 예를 들어, 인증방법이 바뀌었다고 했을 때, 이전에는 각각 api들을 하나씩 변경해야했지만 지금은 privateApiInstance의 interceptors만 수정하면 빠르게 변경사항을 반영할 수 있을 것 같다.

```tsx
//src/api/core/privateApiInstance.ts
const setAcessTokenInRequestConfig = (config: AxiosRequestConfig) => {
  const accessToken = handleToken.getAccessToken();
  const refreshToken = handleToken.getRefreshToken();
  // 요청을 보내기 전에 수행할 로직

  if (!config?.headers || !accessToken || !refreshToken) {
    return config;
  }
  config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers[TOKEN.REFRESH] = refreshToken;
  return config;
};

privateApiInstance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    const newConfig = setAcessTokenInRequestConfig(config);
    return newConfig;
  },
  (error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return error;
  }
);

privateApiInstance.interceptors.response.use(successHandler, errorHandler);

//src/api/core/publicApiInstance.ts
publicApiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return error;
  }
);

publicApiInstance.interceptors.response.use(successHandler, errorHandler);
```

고민은 많이 했는데 언제 정리해서 블로그에 올리나 싶다.
