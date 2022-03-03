# SOP (Same Origin Policy)

다른 출처의 리소스를 사용하는 것에 제한하는 보안 방식

# origin(출처)이란?

`origin`은 url의 구성요소 중 `protocol, domain, port`로 이뤄져있다.

![origin](https://user-images.githubusercontent.com/71386219/156564837-bac02ebd-921f-4abc-9aa8-b06a18563b40.jpg)

protocal, domain, port 중 어느 하나라도 다르면 다른 origin이라고 판단함.

> http://localhost 와 동일한 origin은 무엇일까?
> ✅ http://localhost:80
> ✅ http://locahost/api/cors
> ❌ https://localhost:80
> ❌ http://127.0.0.1 => localhost가 맞긴하지만 브라우저입장에서 string value로 비교해서 다르게 판단함

# CORS (Cross-Origin Resource Sharing)

### 필요한 이유

> 애초에 클라이언트 웹 애플리이케이션은 보안에 취약하다. 브라우저 도구만 열어도 dom이 어떻게 작성되었는지, 어떤 서버와 통신하는지, 리소스 출처 등을 확인할 수 있다. 예를 들어, cors가 없다면 다른 origin에서 부적절하게 보내는 요청에 대해 필터링 없이 응답을 보내게 될 수 있다.

`추가 http 헤더`를 사용하여, 한 origin에서 실행 중인 웹 애플리케이션이 `다른 origin`의 선택한 자원에 접근할 수 있는 권한을 부여하도록 `브라우저에 알려주는 체제`

## CORS 접근제어 시나리오

- 단순 요청(simple request)
- 프리플라이트 요청(preflight request)
- 인증정보 포함 요청(credentialed request)

### 단순 요청(simple request)

예비 요청을 보내지 않고 바로 서버에게 본 요청을 보낸 후, 서버가 이에 대한 응답의 헤더에 `Access-Control-Allow-Origin`과 같은 값을 보내주면 그때 브라우저가 CORS 정책 위반 여부를 검사하는 방식

단순 요청은 특정 조건을 만족하는 경우에만 예비 요청을 생략할 수 있다.

- 요청 메소드 종류: GET, HEAD, POST 중 하나
- Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width를 제외한 헤더를 사용하면 안 됨.
- Content-Type을 사용할 경우 application/x-www-form-urlencoded, multipart/form-data, text/plain만 허용 (application/json이 안됨)

![simple-request](https://user-images.githubusercontent.com/71386219/156567748-3ac11f39-a1f6-489f-a34e-20945dc872e8.png)

### 프리플라이트 요청(preflight request)

`예비 요청(preflight)`과 `본 요청`을 나누어 서버로 전송. 예비 요청에는 http 메서드는 `OPTIONS`메소드가 사용된다. 예비요청을 통해 본 요청을 보내기 전 브라우저 스스로 이 요청이 안전한지 확인하는 것.

![cors-preflight](https://user-images.githubusercontent.com/71386219/156567106-41768498-eb36-4a25-b73e-c1a986a8c220.png)

`Preflight Request`

- origin: 요청 출처
- Access-Control-Request-Method: 실제 요청의 메서드
- Access-Control-Request-Headers: 실제 요청의 추가 헤더

`Preflight Response`

- Acess-Control-Allow-Origin: 서버 측 허가 출처
- Acess-Control-Allow-Methods: 서버 측 허가 메서드
- Acess-Control-Allow-Headers: 서버 측 허가 헤더
- Acess-Control-Max-Age: preflight 응답 캐시 시간

### 인증정보 포함 요청(credentialed request)

기본적으로 브라우저가 제공하는 비동기 리소스 요청 API인 XMLHttpRequest 객체나 fetch API는 별도의 옵션 없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 함부로 요청에 담지 않는다. 이때 요청에 인증과 관련된 정보를 담을 수 있게 해주는 옵션이 바로 credentials 옵션이다.

옵션

- same-origin: 같은 출처 간 요청에만 인증 정보 담을 수 있음
- include: 모든 요청에 인증 정보 담을 수 있음
- omit: 모든 요청에 인증 정보 담지 않음.

클라이언츠에서 `credentials: include` -> 서버측 `Access-Control-Allow-Credentails: true`로 받음 (Allow-origin: \*으로 받으면 에러남)

# cors 해결방법

### header 세팅

```js
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인
  res.header('Access-Control-Allow-Origin', 'https://example.com'); // 특정 도메인
});
```

### cors 모듈 사용

npm 참고

### webpack-dev-server proxy기능

서버가 아닌 프론트 쪽에서도 수정 가능, 하지만 로컬개발환경에서만 통하는 방법임. 근본적인 문제 해결방법이 아니기 때문에 백에서 설정해야함.

```js
// 프록시 쓰지 않았을때
// localhost:8080(클라이언트 측) --X (CORS)--> domain.com (서버 측)

// 프록시를 설정 후
// localhost:8080(클라이언트 측) --O 프록시가 설정된 Webpack Dev Server--> domain.com (서버 측)

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'domain.com',
        changeOrigin: true,
      },
    },
  },
};
```

🔍 참고자료

- [[10분 테코톡] 🌳 나봄의 CORS](https://www.youtube.com/watch?v=-2TgkKYmJt4)
- [CORS는 왜 이렇게 우리를 힘들게 하는걸까?](https://evan-moon.github.io/2020/05/21/about-cors/)
- [[Web] CORS 동작 방식과 해결 방법](https://ingg.dev/cors/)
- [http/cors - mdn](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
- [How to use CORS in Node.js with Express](https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/)
