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

#

🔍 참고자료

- [[10분 테코톡] 히로의 웹 요청과 응답](https://www.youtube.com/watch?v=xz7e-GL2g6g)
- [MDN - What is a URL?](https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_URL)
