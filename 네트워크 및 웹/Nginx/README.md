# nginx란?

> nginx는 웹 서버이면 리버스 프록시, 로드 벨런서, 요청에 대해 이벤트 기반 구조로 응답하고 http 캐시로 쓰일 수 있는 소프트웨어다. 지금은 nginx가 무엇인지만 이해하고 추후에 apache와 비교하고 왜 사용하는지에 대한 이유를 정리해보자.

## nodejs사용해서 웹서버를 만들었는데 nginx는 왜쓰니

http server로서 정적 파일을 serve해준다.

was의 부담을 줄여준다

메모리의 효율적인 사용

초당 응답 처리가 빠르다.

리버스 프록시로 사용 가능

    - 로드 밸런싱
    - 캐싱 서버
    - 암호화 기능

SSL지원

웹페이지 인증 접근

- 관리자, 일반 사용자 등등 구분

압축 전달

비동기 처리

## 흐름

> 각 단계별 자세한 통신과정 공부 필요

![IMG_0443](https://user-images.githubusercontent.com/71386219/155986476-344675be-ce1d-48de-8c41-5c82e859aefc.JPG)

## 역방향 프록시란

클라이언트의 요청을 받아 웹서버로 전달하여 응답받은 후 다시 클라이언트에 전달하는 역할을 수행하는 서버이다. 클라이언트와 웹 서버사이에 존재하는 서버라고 할 수 있다.

🔍 참고자료

- [NGINX란?](https://medium.com/@su_bak/nginx-nginx란-cf6cf8c33245)
- [[개발자 면접준비]#2. nginx의 이해와 활용](https://m.blog.naver.com/jhc9639/220967352282)
- [[Nginx] (1/2) 도대체 뭐길래 카카오, 네이버에서 사용할까](https://www.youtube.com/watch?v=ZJpT-Wa-pZ8)
