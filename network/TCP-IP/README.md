# TCP / IP 이론정리

> 추가정리 필요

📌 목차

1. TCP / IP

1. TCP / IP

인터넷에서 컴퓨터들이 서로 정보를 주고 받는데 쓰이는 프로토콜의 집합,

### IP - 배송담당

- IP는 Internet layer에 해당한다. IP와 IP주소는 다르며 IP는 프로토콜의 명칭이다.
- IP의 역할: 패킷을 상대방에게 전달. 전달하기까지 IP주소와 MAC주소 요소가 중요함.
- IP는 각 노드에 부여된 주소를 가리킨다.
- MAC 주소는 각 네트워크 카드에 할당된 고유 주소로 IP통신은 MAC주소에 의존해서 통신한다.
- 인터넷 통신에서 여러 대 컴퓨터와 네트워크 기기를 중계해서 상대방에게 전달할 때, 중계하는 동안 다음으로 중계할 곳의 MAC 주소를 사용하여 목적지에 찾아간다. (ARP프로토콜 사용)
- ARP는 주소를 해결하기 위한 프로토콜 중 하나이며, 수진지의 IP 주소를 바탕으로 MAC 주소를 조사한다.

### TCP - 신뢰성 담당

- TCP는 대용량의 데이터를 보내기 쉽게 작게 분리하여 상대에게 보내고, 정확하게 도착했는지 확인
- Transport layer에 해당한다. 신뢰성 있는 바이트 스트림 서비스 제공
- 바이트 스트림 서비스: 용량이 큰 데이터를 보내기 쉽게 TCP 세그먼트라고 불리는 단위 패킷으로 작게 분리하여 관리
- 상대방에게 확실하게 데이터를 보내기 위해 3 Way Handshaking 사용

프로토콜

## TCP / IP 계층 구조

`Application layer`

- 유저에게 제공되는 application에서 사용하는 통신의 움직임을 결정
- 특정 서비스를 제공하기 위해 application끼리 정보를 주고 받을 수 있음.
- 사용하는 프로토콜 종류: FTP, HTTP, SSH, DNS, SMTP

`Transport layer`

- application 계층에 네트워크로 접속되어 있는 2대의 컴퓨터 사이의 데이터 흐름을 제공.
- 송신된 데이터를 수신측 applicaiton에 전달하게 함.
- 사용하는 프로토콜 종류: TCP, UDP, RTP, RTCP

`Internet layer`

- 네트워크 상에서 패킷의 이동을 다룸.
- 어떠한 경로를 거쳐 상대의 컴퓨터까지 패킷을 보낼지 결정. 인터넷의 경우 상대 컴퓨터에 도달하는 동안에 여러 컴퓨터랑 네트워크 기기를 거쳐서 상대방에게 전송하게 되는데 여러가지 선택지 중에서 하나의 길을 결정하는 역할을 한다.
- 수신 측까지 데이터를 전달하기 위해 사용. IP주소를 바탕으로 올바른 목적지로 찾아 갈 수 있도록 해줌.
- 사용하는 프로토콜 종류: IP, ARP, ICMP, RARP, OSPF

`Netowrk Access layer`

- 네트워크에 접속하는 하드웨어적인 면을 다룬다.
- 네크워크에 직접 연결된 기기 간 전송을 할 수 있도록 함. 물리적 주소인 MAC주소를 사용.
- 사용하는 프로토콜 종류: Ethernet, PPP, Token Ring

## TCP / IP 흐름

예시 흐름: Application(HTTP) -> Transport(TCP) -> Internet (IP) -> Netowrk Access layer(Ethernet)

### 대략적인 흐름

TCP/IP로 통신을 할 때 계층을 순서대로 거쳐 통신한다. 송신측은 애플리케이션부터 내려가고 수신은 반대이다.

각 계층을 거칠 때, 각 계층마다 필요한 헤더정보를 붙이고 수신측은 계층을 거칠 때마다 반드시 해당 계층마다 사용한 헤더를 삭제. (이렇게 정보를 감싸는 것을 캡슐화라고 한다.)

> 클라이언트 -> URL 요청 -> DNS ,URL 로 IP 반환-> HTTP 담당웹서버에 요청할 HTTP메시지 작성-> TCP , 통신하기 쉽도록 HTTP 메시지를 패킷으로 분해(일련번호부여)-> 상대방에게 패킷보냄->IP, 상대가 어디있는지 찾아 중계해 가면서 전송(라우터) -> TCP, 패킷수신, 도착한 패킷조립(일련번호보고조립)->HTTP담당 - 웹서버에 대한 요청 내용 처리

### 송신준비

http를 예로 들면, `Application layer에`서 어느 웹 페에지를 보고 싶다는 `http request`를 지시 -> `Trasnport layer(TCP)`에서 Application layer에서 받은 데이터(http 메세지)를 통신하기 쉽게 `조각`내어 `안내번호`와 `포트 번호`를 붙혀 Internet layer에 전달 -> `Internet layer(IP)`에서는 수신지 `MAC주소`를 추가해서 `Network Access layer`에 전달.

### 수신

`Network Access layer`에서 데이터를 받아들여 순서대로 위의 계층에 전달 -> `Applcation layer`에 도달하면 `Http request` 내용을 `수신가능`.

### 구체적인 흐름

> `www.google.com`을 웹브라우저에 입력하면 무슨일이 일어날까요?

- 웹브라우저에 www.google.com을 입력한다는 것은 구글 웹 서버의 80포트로 아래와 같은 HTTP Request 메시지를 보내는 것을 의미

![스크린샷 2022-02-10 오후 4 55 02](https://user-images.githubusercontent.com/71386219/153362370-941edfcd-4bfa-4633-b12d-4924544a831d.png)

- 해당 요청을 인터넷을 통해 구글 서버로 전달하기 위해 패킷을 만들 어야함.
- 패킷에는 각 계층에 필요한 정보들이 담겨야 함.
- 패킷의 Application layer에는 위에서 작성한 http request가 들어감.
- TCP 패킷의 헤더는 다음과 같이 생김.
- 중요하게 볼 것은 SP(시작포트)와 DP(목적지포트). SP(컴퓨터에서 만든 소켓의 포트 번호), DP(80-웹서버의 웰노운 포트 번호)

![image](https://user-images.githubusercontent.com/71386219/153363027-bcaede3d-fd98-4a96-b88b-f76b3db6fc85.png)

- IP 헤더에 대한 정보는 다음과 같음.
- 여기서도 SP와 DP가 중요. 여기서 SP는 알고 있지만 아직 DP를 모름. 도메인 정보만 알고 정확한 IP주소는 아직 모름
- DNS프로토콜을 통해서 도메인 정보로 IP주소를 알아냄

![image](https://user-images.githubusercontent.com/71386219/153363574-751eb9a5-a0ff-4b6f-aa02-4da4c7401ef7.png)

- 위의 `DNS`에서 작동방식 설명함
- 성공적으로 도메인 이름에 대한 IP주소를 받아오면 Ethernet 헤더를 만들어야하는데 아직 MAC주소를 모르는 상태임.
- IP로 MAC주소를 알기 위해 ARP프로토콜을 사용.
- 이후 패킷을 네트워크로 보내기 전에 TCP는 연결지향형 프로토콜이기 때문에 송신측과 수신측을 서로 연결하는 작업을 해야함.
- 3 Way Handshaking과정을 거쳐 클라이언트와 서버 간 연결 성공 확인.
- 3 Way Handshaking으로 연결이 되면 데이터를 보내야함.
- 라우팅을 거쳐 구글 서버가 연결된 라우터까지 데이터가 도착하면 패킷의 IP헤더에 기록된 구글 서버 IP주소를 통해 MAC주소를 얻어옴.(ARP프로토콜), 목적지인 구글 서버가 자신의 IP온 ARP요청을 받고 MAC주소를 응답.
- `❓ 이해 안가는 과정`
- 웹 서버에서 HTTP Request를 받고 응답을 돌려줌.
- HTTP 요청과 응답이 끝나면 4 Way Handshking과정을 거쳐 연결을 종료

🔍 참고자료

- [[10분 테코톡] 수리의 TCP/IP](https://www.youtube.com/watch?v=BEK354TRgZ8)
- [기술블로그-네트워크 기본 TCP/IP](https://k-developer.gitbook.io/dev/http-network-1/1./1.3-tcp-ip)
- [Ethernet, IP, TCP/UDP 헤더 소개](https://www.netmanias.com/ko/post/blog/5372/ethernet-ip-ip-routing-network-protocol/packet-header-ethernet-ip-tcp-ip)
