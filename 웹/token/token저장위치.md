# Access Token을 어디에 저장해야할까?

📌 목차

1. [토큰을 주고 받는 과정](#-토큰을-주고-받는-과정)
2. [Client는 Token을 어디에 저장할까?](#-client는-token을-어디에-저장할까?)
3. [HTTP Request시 Token은 어디에 넣어야 할까?](#-http-request시-token은-어디에-넣어야-할까?)

# 토큰을 주고 받는 과정

1. Client가 로그인에 성공하면 Server에서 token을 발행해 Client에 보낸다.
2. Cleint는 받은 Token을 저장해둔다.
3. 인증에 필요한 Request가 있을 때 서버에 받은 Token을 보내서 인증한다.

# Client는 Token을 어디에 저장할까?

Web Client가 정보를 저장할 수 있는 공간은 `Cookie`와 `Web Storage`로 나눌 수 있다.

결론적으로 `web storage`는 javascript로 쉽게 접근할 수 있고, 서버에서 접근할 수 없기 때문에 `cookie`에 `http only` 속성으로 javascript로 접근하지 못하게 하고, 서버에서 접근할 수 있도록 하는 것이 좋다.

## Cookie

- http 통신의 무상태성을 보완해줌
- 서버가 보낸 data를 최대 4kb까지 저장
- 서버에서 접근할 수 있음
- http request시 자동으로 포함
- http only 설정을 추가하여 javascript의 접근을 막을 수 있음

## Web Storage

- session storage와 local storage로 나눌 수 있음
- 서버에서 접근할 수 없음

### session storage

- session cookie와 비슷: 세션을 위한 저장 공간
- 세션이 종료되면 모두 삭제: 브라우저 종료시 삭제
- 5 ~ 10mb 크키를 갖는 공간

### local storage

- persistent cookie와 비슷
- 반 영구적으로 저장가능
- 5 ~ 10mb 크기를 갖는 공간

# 토큰을 주고 받는 과정

# Client는 Token을 어디에 저장할까?

# HTTP Request시 Token은 어디에 넣어야 할까?

Cookie와 Authorization은 모두 HTTP Request header 내부에 있는 필드이다. 두 방법 모두 같은 곳에 있어서 보안성은 같다.

## Cookie에 Token 넣기

- 서버 측에서 토큰을 발행 후 cookie에 넣어 보내는 것이 좋다.
- 서버는 Client가 보낸 Request에서 토큰을 복호한 뒤 유저를 찾는다.

## Authorization 필드에 Token 넣기

- Client가 HTTP resopnse body에서 받은 Token을 아래 예시처럼 사용
  > Bearer {Token Description} // ex> Bearer ekldDklzpEadfq

👀 참고자료

- https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Authorization
- https://tecoble.techcourse.co.kr/2020-08-31/where_to_store_token
- https://velog.io/@neity16/NodeJS-Token-%EC%A0%80%EC%9E%A5-%EC%9C%84%EC%B9%98%EC%9D%98-%EA%B3%A0%EC%B0%B0
- https://velog.io/@ehdrms2034/Access-Token-%EC%A0%80%EC%9E%A5-%EC%9C%84%EC%B9%98%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0
- https://velog.io/@city7310/%EB%B0%B1%EC%97%94%EB%93%9C%EA%B0%80-%EC%9D%B4%EC%A0%95%EB%8F%84%EB%8A%94-%ED%95%B4%EC%A4%98%EC%95%BC-%ED%95%A8-5.-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D-%EA%B2%B0%EC%A0%95
