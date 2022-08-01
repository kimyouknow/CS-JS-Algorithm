# HTTP 이론정리

TCP / IP 위에서 전송하는 데이터의 규격에 대한 약속

HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜. HTTP는 웹에서 이루어지는 모든 데이터 교환의 기초이자 클라이언트-서버 프로토콜이기도 하다.

## HTTP의 특징

단방향성

- 요청, 응답이 한 세트
- 요청에 대한 응답만 있음. 클라이언트가 서버로 요청함.(서버가 먼저 못보냄)

비연결성

- 연결이 계속 유지되지 않고 요청에 대한 응답이 끝나면 연결을 끊음
- 소켓과 반대

무상태성

- 클라이언트와 서버가 연결된 상태가 아니기 때문에 상태를 가지지 않음
- 이를 보완하기 위해 쿠키, 세션, 토큰 등을 사용

## HTTP로 제어할 수 있는 것들 - ❗️ 추가적인 이해 필요, 일단 복붙함.

캐시

origin 제약사항 완화

인증

프록시와 터널링

세션

## HTTP 요청/응답의 구조 (동작방식)

1. 사용자가 브라우저에게 url 입력, 버튼 클릭, 폼 제출 등의 명령을 입력
2. 브라우저가 해당 명령을 요청 메시지로 바꿔서 서버로 전송
3. 서버가 url을 프로그램 또는 정적 파일로 연결한다.
4. 서버가 응답 메시지를 반환한다.
5. 브라우저가 응답을 형식에 맞춰 표시한다.

![image](https://user-images.githubusercontent.com/71386219/153351130-70cc3a7a-c607-44e8-bcf4-10dd37ed20eb.png)

connect : 클라이언트가 원하는 서버에 접속
request : 클라이언트가 이 서버에 요청.
클라이언트가 서버에게 연락하는 것을 요청이라고 하며 요청을 보낼때는 요청에 대한 정보를 담아 서버로 보낸다.
response : 서버가 요청에 대한 응답결과를 클라이언트에게 보내는 것을 응답이라고 한다.응답이 끝나면 서버와 클라이언트 연결 끊기(Stateless)

## HTTP 메세지

> [mdn 문서 참고함](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)

❗️ 버전차이 추가공부

HTTP 메시지의 두 가지 타입인 요청(requests)과 응답(responses)은 각자의 특성있는 형식을 가지고 있다.

### `요청`

- `http method`: 보통 클라이언트가 수행하고자 하는 동작을 정의한 동사(GET, POST, 등등)
- `path`: 가져오려는 리소스 경로, 예를 들면 프로토콜 (http://), 도메인 (en-US) (여기서는 developer.mozilla.org), 또는 TCP 포트 (en-US) (여기서는 80)인 요소들을 제거한 리소스의 URL.
- `version of the protocol`: http 프로토콜의 버전
- `headers`: POST와 같은 몇 가지 method를 위한 전송된 리소스를 포함하는 응답의 본문과 유사한 본문
- `body`: 요청을 할 때 함께 보낼 데이터를 담는 부분.

http 요청의 예시

![image](https://user-images.githubusercontent.com/71386219/153350394-0aeb901b-2999-4e84-b868-701d842b268f.png)

### `응답`

- `version of protocol`: http 프로토콜의 버전
- `status code`: 요청의 성공 여부와, 그 이유를 나타내는 상태 코드
- `status messgae`: 영향력 없는, 상태코드의 짧은 설명을 나타내는 메세지
  > - 1XX (조건부 응답) : 요청을 받았으며 작업을 계속한다.
  > - 2XX (성공) : 클라이언트가 요청한 동작을 수신하여 이해했고 승낙했으며 성공적으로 처리했음을 가리킨다.
  > - 3XX (리다이렉션 완료) : 클라이언트는 요청을 마치기 위해 추가 동작을 취해야 한다.
  > - 4XX (요청 오류) : 클라이언트에 오류가 있음을 나타낸다.
  > - 5XX (서버 오류) : 서버가 유효한 요청을 명백하게 수행하지 못했음을 나타낸다.
- `headers`: 요청 헤더와 비슷한, http 헤더들
- `body`: 빈줄 다음에 나오는 것이 실제 응답 리소스 데이터가 나오는 부분. 응답에는 대부분의 경우 본문이 있다. 보통 데이터를 요청하고 응답 메시지에는 요청한 데이터를 담아서 보내주기 때문이다. 응답 메시지에 HTML이 담겨 있는데 이 HTML을 받아 브라우저가 화면에 렌더링

http 응답의 예시

![image](https://user-images.githubusercontent.com/71386219/153350781-8b17c61a-43f6-4674-9110-62bc3225151a.png)

## HTTP Header

> [mdn 문서 참고함](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers)

## HTTP method

- GET : 정보를 요청하기 위해서 사용한다. (SELECT)
- POST : 정보를 밀어넣기 위해서 사용한다. (INSERT)
- PUT : 정보를 업데이트하기 위해서 사용한다. (UPDATE)
- DELETE : 정보를 삭제하기 위해서 사용한다. (DELETE)
- HEAD : (HTTP)헤더 정보만 요청한다. 해당 자원이 존재하는지 혹은 서버에 문제가 없는지를 확인하기 위해서 사용한다.
- OPTIONS : 웹서버가 지원하는 메서드의 종류를 요청한다.
- TRACE : 클라이언트의 요청을 그대로 반환한다. 예컨데 echo 서비스로 서버 상태를 확인하기 위한 목적으로 주로 사용한다.

## REST - represental state transfer(표현 상태 전송)

일종의 HTTP 디자인 패턴

`REST 제약 조건`

- 클라이언트 서버
- 무상태
- 캐시처리가능
- 계층화
- code on demand
- 인터페이스 일관성

🔍 참고자료

- [생활코딩 HTTP](https://opentutorials.org/course/4848)
- [웹의 동작 (HTTP 프로토콜 이해)](https://velog.io/@sujeong/2-%EC%9B%B9%EC%9D%98-%EB%8F%99%EC%9E%91-HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-%EC%9D%B4%ED%95%B4)
- [MDN - HTTP](https://developer.mozilla.org/ko/docs/Web/HTTP)
- [boostcourse-웹 프로그래밍 2) 웹의 동작 (HTTP 프로토콜 이해)](https://www.boostcourse.org/web316/lecture/16661?isDesc=false)
