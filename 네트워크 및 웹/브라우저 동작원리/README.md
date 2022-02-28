# 브라우저의 동작 방식

# 브라우저 핵심 기능

웹페이지를 서버에 요청(request)하고 서버의 응답(response)을 받아 브라우저에 표시한다. 브라우저는 html, css, js, 이미지 파일 등을 응답받는다. html,css파일은 렌더링 엔진의 html파서와 css 파서에 의해 파싱(parsing)되어 DOM, CSSOM트리로 변환되고 렌더 트리로 결합된다. 이렇게 생성된 렌더 트리를 기반으로 브라우저는 웹페이지를 표시한다.

![client-server](https://user-images.githubusercontent.com/71386219/155914687-03a05333-b4c0-4ef7-bb38-2359ef5e0c77.png)

브라우저는 동기적으로 html,css, js를 처리한다. js는 렌더링 엔진이 아닌 js엔진이 처리한다. html파서는 script태그를 만나면 js 코드를 실행하기 위해 DOM생성 프로세스를 중지하고 js엔진으로 제어 권한을 넘긴 후 js 실행이 완료되면 html파서로 제어 권한이 다시 넘어온다.

🔍 참고자료

- [ko.javascript.info - 문서와 리소스 로딩](https://ko.javascript.info/loading)
- [브라우저는 어떻게 동작하는가? - naver d2](https://d2.naver.com/helloworld/59361)
- [브라우저 동작 원리](https://poiemaweb.com/js-browser)
