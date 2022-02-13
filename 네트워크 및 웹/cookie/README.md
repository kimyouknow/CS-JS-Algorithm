# 쿠키

- 웹서버, 웹 브라우저가 서로 주고 받는 정보
- http 프로토콜에 포함된 기술

# 쿠키의 3가지 목적(활용)

- `세션 관리(Session management)`: 서버에 저장해야 할 로그인, 장바구니, 게임 스코어 등의 정보 관리
- `개인화(Personalization)`: 사용자 선호, 테마 등의 세팅
- `트래킹(Tracking)`: 사용자 행동을 기록하고 분석하는 용도

# 쿠키 만들기

HTTP 요청을 수신할 때, 서버는 응답과 함께 Set-Cookie 헤더를 전송할 수 있다. 쿠키는 보통 브라우저에 의해 저장되며, 그 후 쿠키는 같은 서버에 의해 만들어진 요청(Request)들의 Cookie HTTP 헤더안에 포함되어 전송된다.

### Set-Cookie 그리고 Cookie 헤더

Set-Cookie HTTP 응답 헤더는 서버로부터 사용자 에이전트로 전송됩니다. 간단한 쿠키는 다음과 같이 설정될 수 있습니다.

# 쿠키의 라이프 타임

### session cookie

현재 세션이 끝날 때 삭제

### permanent cookie

Expires 속성에 명시된 날짜에 삭제되거나, Max-Age 속성에 명시된 기간 이후에 삭제

# 보안과 관련

쿠키에 저장된 sessionId에 있는 value를 사용하면 로그인할 수 있다. sessionId에 로그인과 관련된 정보(이메일, 비밀번호, 아이디 등)를 담고 있으면 안 된다(유출시 문제 발생). 하지만 sessionId을 가지고 로그인할 수 있다.

```
Set-Cookie: <cookie-name>=<cookie-value>
```

👀 참고자료

- https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies
- https://opentutorials.org/course/3387/21740
