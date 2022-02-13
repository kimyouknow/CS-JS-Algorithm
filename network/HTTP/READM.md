# HTTP 이론정리

> 기타 지식 내용 및 HTTP 세부내용 정리 필요

📌 목차

1. 기타 지식
2. 웹이란
3. Web Client와 Server
4. HTTP

# 1. 기타 지식

- `LAN(랜)`: 컴퓨터가 연결된 작은 지역(local area network),
- `MAN`: 여러 LAN을 연결해 구성
- `WAN`: 여러 MAN을 연결해 구성
- `정적 컨텐츠`: 요청 인자 값에 상관없이 달라지지 않은 컨텐츠.(어느 사용자가 요청하든 동일한 컨텐츠) - html,css, image...
- `프로토콜`: 네트워크 통신을 위해 미리 정해 놓은 공통된 메뉴얼,
- `컴포넌트 파일`
  - 코드파일: html, css, js
  - 자원: 이미지, 음악, 비디오, 단어 문서 등 웹사이트를 만드는 모든 것들을 위한 공동적인 이름
- `MAC 주소`:
  - [링크1](https://jhnyang.tistory.com/404)
- 80포트: http 기본포트, http://www.naver.com/ -> http://www.naver.com:80 과 동일
- 443포트: https 기본포트 https://www.naver.com/ -> https://www.naver.com:443 과 동일

# 2. 웹이란?

`웹 동작 3요소`: HTTP(주고 받는 방식), HTML(내용을 표현하는 방식), URL(고유한 리소스를 표시하는 주소 방식)

웹과 인터넷은 다르다.

- `인터넷`: 컴퓨터가 서로 연결되어 통신을 주고 받는(`데이터 통신 서비스를 받을 수 있는`), 컴퓨터끼리의 네트워크 시스템, 물리적인 하나의 컴퓨터에는 `여러 개의 서버`가 동작가능한데, 각 서버들은 `포트`라는 값으로 구분되어 동작(웹:80, 이메일 25 등등..), TCP/IP라는 약속으로 연결되어 있음.
- `웹(www)`: 그 인터넷상에 정보가 얽혀있는 무형의 정보 네트워크. 인터넷에서는 전자 메일과 같은 다른 서비스가 쓰이기도 하는데, 웹도 그 중 하나.
- `웹 브라우저`: 웹 서버에서 이동하며 쌍방향으로 통신하고 ,html문서나 파일을 출력하는 Gui 기반 응용소프트웨어

## URL (uniform resource locator)

웹에서 게시된 어떤 자원을 찾기 위해서 browsers에 의해 사용되는 메카니즘.

url은 웹에서 정해진 유일한 자원의 주소일 뿐이다. 웹상에서 자원들의 위치. 특정 웹 서버의 특정 파일에 접근하기 위한 경로. 물리적인 서버를 찾기 위해서 반드시 필요한 것은 `IP주소나 도메인 주소`. 물리적인 컴퓨터를 찾은 후에 해당 컴퓨터 안에 등장하는 소프트웨어 서버를 찾기 위해서는 `포트 `값이 필요하다.

### URL 구조

![image](https://user-images.githubusercontent.com/71386219/153515900-0b45a6b0-3fdb-4c15-9556-2a964dfe12d0.png)

🔍 예시

> http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

- Protocol

  - 브라우저가 어떤 규약을 사용하는지
    ![image](https://user-images.githubusercontent.com/71386219/153516966-98591e82-550a-4376-a353-71cca007c9d0.png)

- Domain Name

  - 도메인 이름(ip주소도 사용가능)
  - 어떤 웹 서버가 요구되는 것인 지
    ![image](https://user-images.githubusercontent.com/71386219/153516984-c44accbe-0ddd-45de-b7e9-718d9d083bf4.png)

- Port

  - 기술적으로 웹서버에서 자원을 접근하기 위해 사용하는 gate
  - 웹서버가 자원의 접근하기 위해 표준 http 포트(HTTP를 위한 80, HTTPS를 위한 443)를 사용한다면 생략 가능. 그 외에는 필수.
    ![image](https://user-images.githubusercontent.com/71386219/153516987-a2b7db93-af31-431b-91b5-43619db38d5d.png)

- Path to the file

  - 웹서버에서 자원에 대한 경로
    ![image](https://user-images.githubusercontent.com/71386219/153517056-15c02948-3b50-4fb7-ac9a-b6df160b5e9a.png)

- Parameteres

  - 웹서버에 제공하는 추가 파라미터
  - &로 구분된 키/값
    ![image](https://user-images.githubusercontent.com/71386219/153517073-4420e74e-37bc-4b9f-bf94-db4092821461.png)

- Anchor
  - 자원 자체의 다른 부분에 대한 닻.
  - 일종의 자원 안에서 bookmark
  - 해당 Anchor로 브라우저에게 위치를 알려줌.
    ![image](https://user-images.githubusercontent.com/71386219/153517080-6c9a9346-84ca-460c-b8b8-b10575c2b2ff.png)

## 인터넷은 어떻게 동작하는가?

[mdn 문서 정리중](https://developer.mozilla.org/ko/docs/Learn/Common_questions/How_does_the_Internet_work)

## 간단한 동작 방식

브라우저에 웹 주소를 입력할 때,

1. 브라우저는 `DNS서버`로 가서 웹사이트가 있는 서버의 진짜 주소를 찾음
2. 그 다음 브라우저는 서버에서 `웹사이트의 사본`을 클라이언트에게 보내달라는 `http 요청` 메세지를 서버로 전송. (클라이언트와 서버 사이에 전송된 모든 데이터는 `TCP/IP` 연결을 통해 전송)
3. 메세지를 받은 서버는 클라이언트의 `요청을 승인`하고 메세지를 클라이언트에게 전송. 그 다음 서버는 웹사이트의 파일들을 `데이터 패킷`이라 불리는 작은 일련의 덩어리들로 브라우저에게 전송하기 시작.
4. 브라우저는 받은 작은 덩어리들을 완전한 웹사이트로 조립하고 유저에게 보여줌.

## DNS

웹사이트를 위한 주소록, 브라우저에서 웹 주소를 입력할 때, 브라우저는 그 웹사리트를 검색하기 전에 DNS를 살펴본다. 브라우저는 HTTP 메시지를 올바른 장소로 전송하기 위해 그 웹사이트가 있는 서버가 어떤 것인지 찾아야 한다.

실제 웹 주소는 문자가 아닌 3.245.217.105 같은 숫자 덩어리. 이러한 IP주소는 웹의 하나뿐인 특정 위치를 나타냄. DNS는 기억하기 쉽게 바꾸고, 브라우저에 유저가 입력한 웹주소를 실제 IP주소에 맞춰줌.

### 실제 동작

- 브라우저가 OS에게 domain에 대한 ip주소를 요청
- OS에서 DNS서버로 요청. OS에 DNS서버를 이미 등록해둠.(맥북의 경우 시스템 환경설정-네트워크)
  ![스크린샷 2022-02-10 오후 5 07 34](https://user-images.githubusercontent.com/71386219/153364302-9e96c70b-6829-407d-b258-0b67a28cdeba.png)
- DNS 또한 TCP/IP의 Application layer의 프로토콜임. (53포트사용)
- DNS도 HTTP Request와 비슷하게 도메인이 담긴 쿼리를 도메인 서버로 보냄. 그러면 도메인 서버가 IP주소를 응답함.
- DNS는 Transport layer에서 UDP를 사용.

## 패킷

패킷이란 전송하는 데이터의 최소단위.

기본적으로, 데이터가 웹을 거쳐서 전송될 때, 수천개의 작은 덩어리들로 전송됨. 그래서 다양한 웹 사용자들은 동시에 같은 웹 사이트를 다운로드 할 수 있게 된다. 만약 웹 사이트가 하나의 큰 덩어리들로 전송된다면, 오직 한 번에 하나의 사용자만 다운로드 할 수 있을 것. 이는 분명 웹을 매우 비효율적이고, 사용하기에 어렵게 만듦.

# 3. Web Client와 Server

## Web Client(사용자 에이전트)

사용자를 대신하여 동작하는 모든 도구들. 주로 브라우저에 의해 수행.

브라우저는 항상 요청을 보내는 개체다. 결고 서버가 될 수 없다.

웹 페이지는 하이퍼텍스트 문서로, 표시된 텍스트 중 일부는 사용자가 사용자 에이전트를 제어하고 웹을 이동할 수 있도록 하게 하는 링크. 브라우저는 HTTP 요청 내에서 이런 지시 사항들을 변환하고 HTTP 응답을 해석하여 사용자에게 명확한 응답을 표시

## Web Server 란?

클라이언트에 의한 요청에 대한 문서를 제공하는 서버. 반드시 단일 머신일 필요는 없지만, 여러 개의 서버를 동일한 머신 위에서 호스팅 가능.

한 개 이상의 웹사이트를 호스팅하는 컴퓨터(웹사이트와 웹서버는 다르다. 웹사이트가 반응하지 않는다는 것은 웹 서버가 반응하지 않는다는 의미다. 웹 서버는 여러 웹사이트를 호스팅될 수 있다.)

`웹 브라우저(client)`로부터 `http 요청`을 받아 html 문서와 같은 `정적 컨텐츠`를 제공하는 프로그램

`webserver`는 하드웨어, 소프트웨어 혹은 두 개가 같이 동작하는 것을 의미.

- `하드웨어`: web server의 소프트웨어와 website의 컴포넌트 파일들(html, css, js)을 저장하는 컴퓨터. web server는 인터넷에 연결되어 웹이 연결된 다른 기기들이 웹 서버의 데이터를 주고받을 수 있도록 한다.
- `소프트웨어`: 웹 상자가 어떻게 호스트 파일들에게 접근하는지 관리. web server를 http server로 국한했을 때, http server는 url과 http의 소프트웨어 일부.

![image](https://user-images.githubusercontent.com/71386219/153344438-25781975-ca57-40a0-9698-470fdbf07089.png)

web server 기능

- `정적 컨텐츠` 요청시 정적 콘첸트를 제공
- `동적 컨텐츠` 요청시 `WAS(Web Application Server)`로 전달하여 WAS가 처리한 결과를 client에게 전달.

## WAS 란?

DB조회나 다양한 로직 처리를 요구하는 `동적인 컨텐츠`를 제공하기 위해 만들어진 프로그램. 요청 인자에 따라 `바뀔 수 있는 컨텐츠`

WAS의 기능

- clientf로부터 http 요청 받을 수 있음(대부분의 was는 web server 내장)
- 요청에 맞는 정적 컨텐츠를 제공
- db 조회나 다양한 로직 처리를 통해 동적 컨텐츠 제공

## Proxy - ❗️ 추가적인 이해 필요, 일단 복붙함.

> 웹 브라우저와 서버 사이에서는 수많은 컴퓨터와 머신이 HTTP 메시지를 이어 받고 전달합니다. 여러 계층으로 이루어진 웹 스택 구조에서 이러한 컴퓨터/머신들은 대부분은 전송, 네트워크 혹은 물리 계층에서 동작하며, 성능에 상당히 큰 영향을 주지만 HTTP 계층에서는 이들이 어떻게 동작하는지 눈에 보이지 않습니다. 이러한 컴퓨터/머신 중에서도 애플리케이션 계층에서 동작하는 것들을 일반적으로 프록시라고 부릅니다. 프록시는 눈에 보이거나 그렇지 않을 수도 있으며(프록시를 통해 요청이 변경되거나 변경되지 않는 경우를 말함) 다양한 기능들을 수행할 수 있습니다:

캐싱 (캐시는 공개 또는 비공개가 될 수 있습니다 (예: 브라우저 캐시))
필터링 (바이러스 백신 스캔, 유해 컨텐츠 차단(자녀 보호) 기능)
로드 밸런싱 (여러 서버들이 서로 다른 요청을 처리하도록 허용)
인증 (다양한 리소스에 대한 접근 제어)
로깅 (이력 정보를 저장)

# 4. HTTP

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

- [브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까?](https://yozm.wishket.com/magazine/detail/1307/)
- [생활코딩 HTTP](https://opentutorials.org/course/4848)
- [웹이란 무엇인가](https://www.betterweb.or.kr/blog/%EC%9B%B9%EA%B3%BC-%EC%9B%B9-%EA%B2%80%EC%83%89-%EC%9B%B9%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/)
- [웹의 동작 (HTTP 프로토콜 이해)](https://velog.io/@sujeong/2-%EC%9B%B9%EC%9D%98-%EB%8F%99%EC%9E%91-HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-%EC%9D%B4%ED%95%B4)
- [[10분 테코톡] 알리의 Web Server vs WAS](https://www.youtube.com/watch?v=mcnJcjbfjrs)
- [[10분 테코톡] 히로의 웹 요청과 응답](https://www.youtube.com/watch?v=xz7e-GL2g6g)
- [MDN - HTTP](https://developer.mozilla.org/ko/docs/Web/HTTP)
- [MDN - 웹의 동작 방식](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [MDN - 인터넷은 어떻게 동작하는가?](https://developer.mozilla.org/ko/docs/Learn/Common_questions/How_does_the_Internet_work)
- [MDN - What is a URL?](https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_URL)
- [boostcourse-웹 프로그래밍 2) 웹의 동작 (HTTP 프로토콜 이해)](https://www.boostcourse.org/web316/lecture/16661?isDesc=false)
