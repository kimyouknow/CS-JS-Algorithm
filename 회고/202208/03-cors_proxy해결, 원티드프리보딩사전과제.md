# 20220803

<details>
<summary>시간대별 정리</summary>

### 아침

회고작성

### 오전

ts htmlelement개발

프로그래머스 알고리즘

### 오후

프로젝트 cors 문제

원티드 프리보딩 레아아웃 설정 및 계획

### 저녁

cors문제 proxy로 해결

</details>
<br>

# 개인공부

어제부터 할 일이 많아져 현재 하고 있는 일에 집중하지 못하고 있다. 🥲

## 바닐라 spa 제작 맛보기

타입스크립트로 바닐라 spa 만들기 시작했다. 우선 HtmlElement를 생성하는 함수를 만들었다. class와 id, data-attr, 자식 포함하기 등등 다양한 기능을 넣기 위해 나만의 createDom함수를 계획했다.

```tsx
export const createDom = <K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions
): HTMLElementTagNameMap[K] => {
  const dom = document.createElement(tagName, options);
  return dom;
};
```

그런데 시작부터 해결할 수 없는 여러 타입 관련 에러가 발생했다. 아마 문법적인 오류가 있는 것 같아 내일로 미뤘다.

## 프로그래머스 알고리즘 문제풀이

오랜만에 알고리즘 문제를 풀었다. [**2022 KAKAO BLIND RECRUITMENT- 신고 결과 받기**](https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript)

## 원티드 프리 온보딩 사전 과제

보일러템플릿과 mui를 사용해서 간단한 레이아웃을 제작했다. 레아아웃을 제작한 후 요구사항 중 핵심 기능을 어떤 순서로 작업할지 정리했다. 시간이 얼마 없어 우선순위를 잘 세워서 마무리해야겠다.

# 코넥트

## cors문제해결과정정리

react ↔ ec2 서버간 cors문제를 어제부터 해결하지 못했다.

이론적으로 알고 있는 문제원인과 해결방법은 간단했다.

### 정석대로 서버에서 **`Access-Control-Allow-Origin`**헤더에 알맞은 값을 세팅

`“*”`와일드 카드를 사용해서 문제를 해결할 수도 있지만 모든 출처에 대한 요청을 수락하는 게 되어버려 보안적인 문제가 발생할 수 있다. (애초에 cors가 해결하려는 문제이기도 하다)

또한, 와일드카드를 사용하면 다음과 같은 `withCredentials`관련 에러가 발생할 수 있다.

> `The value of the ‘Access-Control-Allow-Origin’ header in the response must not be the wildcard ‘*’ when the request’s credentials mode is ‘include’.` The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

`withCredentials`은 쿠키, 권한 부여 헤더 또는 TLS 클라이언트 인증서와 같은 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 만들어야 하는지 여부를 나타내기 위해 사용하는 쿠키를 사용한다면 필요한 설정이다. (현재 진행하는 프로젝트에서 쿠키를 사용하지 않아서 상관없지만 그냥 true로 했다가 관련 에러를 발견했다. )

## 문제1: nginx 설정이 필요함 (문제3에서 다시 이야기함, 수정 필요)

ec2에 배포 이후 nginx로 웹서버를 운영하며 /api 네임 스페이스에 대한 리버스 프록시 역할을 부여해 spring서버가 돌아가는 포트로 api요청을 보내고 있었다.

spring서버에서만 설정하면 되는게 아니라 nginx에서도 설정해야한다고 생각해 nginx에도 설정을 추가해봤다.

## 문제2: multiValue

spring서버에서도 Access-Control-Allow-Origin을 했는데 nginx에서도 add_header 'Access-Control-Allow-Origin' '\*'; 를 추가로 설정되어 `multiValue`이슈가 발생했다. \*\*\*\*

nginx 설정에서 add_header를 사용하여 헤더를 추가하면 프록시 패스에서 잘 작동하지만 응답에 기존 헤더 값이 있으면 값을 쌓이게 된다. 헤더 값을 설정하거나 바꾸려면 proxy_hide_header를 add_header와 결합하여 설정해야했다. [스택오버플로우](https://stackoverflow.com/questions/14501047/how-to-add-a-response-header-on-nginx-when-using-proxy-pass/55692346#55692346)

```tsx
# 1. hide the Access-Control-Allow-Origin from the server response
proxy_hide_header Access-Control-Allow-Origin;
# 2. add a new custom header that allows all * origins instead
add_header Access-Control-Allow-Origin *;
```

## 문제3: 둘 다 설정할 필요가 있을까? (미해결)

개발 중 브라우저에서 api서버로 접근하는 과정을 보면, `http:localhost:3000 → ec2url/api/~:80 → nginx → 8081로 변환`이라고 이해했다. 그런데 그럼 한군데에서만 하면 되는게 아닐까?

## 문제4: Access-Control-Allow-Origin에 어떤 도메인을 넣을껀데?

문제는 개발과정에서 생겼다. 개발서버가 따로 있지 않고 하나의 ec2로 작업하고 있는 상황에서 `Access-Control-Allow-Origin의 값을 [localhost:3000](http://localhost:3000)과 같은 범용적인 출처로 설정하면 와일드카드 쓰는 것과 다를게 없다고 생각`했다. Access-Control-Allow-Origin에는 배포할 프론트 서버url만 넣고 개발환경에서는 알아서 우회할 수 있는 방법이 없을까 고민했다.

이전처럼 **spring을 따로 로컬로 돌려서 api가 잘 동작하나 확인해도 되지만 docker를 사용하지 않는 상황에서 환경변수 및 db설정을 하기 번거롭다고 생각**했다. 또한, 어쨋든 서비스는 배포환경에서 돌아가니까 쿠키 및 cors관련 문제를 해결하기위해 최종적으로는 배포된 api에서 확인해야한다고 생각했다.

## 최종 설정: proxy 사용

프록싱을 통해 cors정책을 우회할 수 있는 방법을 찾았다!

localhost까지 `Access-Control-Allow-Origin`에 포함시킬 필요는 없으니까 proxy를 통해 우회해보자!

로컬 환경에서 **`/api`**로 시작하는 URL로 보내는 요청에 대해 브라우저는 **`localhost:3000/api`**
로 요청을 보낸 것으로 알고 있지만, 사실 뒤에서 특정 기능을 통해 `http://내 ec2 url`
으로 요청을 프록싱해줘서 cors정책을 지킨것처럼 속이는 원리다.

아직 proxy에 대해서 완벽하게 이해하지 못했지만 (`배포환경, 개발환경에서 프록시가 어떻게 동작하는지 차이를 이해못함`) 다음과 같은 여러 방법을 써서 해결해봤다.

```jsx
// .env.development 개발환경에서는 **localhost:3000/api로 인식하게 하기**
REACT_APP_SERVER_API=/
// .env.prodcution -> 배포 이후엔 서버에서 Access-Control-Allow-Origin설정해서 proxy할 필요 없을 듯
REACT_APP_SERVER_API=http://내 ec2 url/

// src/constant/api.js
export const API_PREFIX = '/api';
export const ROOT_API_URL = process.env.REACT_APP_SERVER_API + API_PREFIX;
```

### [1. webpack-dev-server](https://joshua1988.github.io/webpack-guide/devtools/webpack-dev-server.html#프록시-proxy-설정)

```jsx
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://내 ec2 url',
        changeOrigin: true,
      },
    },
  },
};
```

### [2. cra → package.json proxy설정](https://create-react-app.dev/docs/proxying-api-requests-in-development)

```jsx
{
// 생략
"proxy": "http://내 ec2 url"
}
```

### [3. http-proxy-midddleware](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)

```jsx
// src/setupProxy.js
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://내 ec2 url',
      changeOrigin: true,
    })
  );
};
```
