# 소개

`산재 되어 있는 지식을 저 만의 방식으로 정리`하려는 목적에서 TIL을 정리하기 시작했습니다. 기록 없이 개발을 하다보면 시간이 갈수록 비효율적이라고 느껴졌습니다. 분명 공부했던 내용이고, 사용했던 경험이 있지만 정확히 기억나지 않을 때가 있습니다. 기억나지 나지 않을 때마다 검색하면 블로그 포스팅과 같은 n차 생성물에 의존하게 되는 단점이 있었습니다. 그렇기 때문에 개발을 꾸준히 할 수 있게 필요한 핵심 지식을 저 만의 방식으로 정리해야겠다고 생각했습니다. 블로그 및 검색 결과에 의존하지 않고, 도서 및 공식 문서와 같은 공신력 있는 매체를 통해 학습하는 것을 목표로 합니다.

`공부한 지식을 정리하고 문답 방식으로 스스로 검증하면서 정리`하고 있습니다. 단순히 정보를 읽고 듣기만 해서는 온전히 제 것으로 만들기 어렵습니다. 직접 말하고 쓰는 과정을 거쳐야 내가 무엇을 알고, 무엇을 모르는 지 가려낼 수 있다고 생각합니다.

[더 자세한 목적](/purpose.md)

## JS

- 이론

  - [자바스크립트 모듈 (깊게 이해하기)](js/module)
  - [babel](advancedJS/babel.md)
  - [자바스크립트 모듈과 export/import](advancedJS/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EB%AA%A8%EB%93%88%EA%B3%BC%20export-import.md)
  - [Node와 HtmlElement](js/Node%EC%99%80%20HtmlElement/)
  - [Event](js/Event/)

- Advanced JS

  - [axios interceptor 세팅 및 활용](advancedJS/axios%20interceptor%20%EC%84%B8%ED%8C%85%20%EB%B0%8F%20%ED%99%9C%EC%9A%A9.md)

## Web

- [was와 web server](web/was%26webserver/README.md)
- [브라우저 렌더링 과정](web/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%A0%8C%EB%8D%94%EB%A7%81/)
- [script 태그 위치](web/script%ED%83%9C%EA%B7%B8%EC%9C%84%EC%B9%98/)

## React

- hooks

  - [useState 자주할 수 있는 실수 및 useEffect 동작 이해하기](react/Hooks/%20useState%20%EC%9E%90%EC%A3%BC%ED%95%A0%20%EC%88%98%20%EC%9E%88%EB%8A%94%20%EC%8B%A4%EC%88%98%20%EB%B0%8F%20useEffect%20%EB%8F%99%EC%9E%91%20%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0.md)
  - [useCallback,useMemo,React.memo](react/Hooks/useCallback%2CuseMemo%2CReact.memo.md)
  - [react-redux,contextAPI,useReducer](react/Hooks/react-redux%2CcontextAPI%2CuseReducer.md)
  - [hooks Dependency (참조타입 vs 원시타입)](<react/Hooks/hooks%20Dependency%20(%EC%B0%B8%EC%A1%B0%ED%83%80%EC%9E%85%20vs%20%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85).md>)

- ETC
  - [StrictMode](react/etc/StrictMode.md)
  - [React에서 선언형프로그래밍](react/etc/React%EC%97%90%EC%84%9C%20%EC%84%A0%EC%96%B8%ED%98%95%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.md)

## Test

- [jest - mock&spy](test/jest/mock%26spy.md)
- [프론트에서 테스크코드짜기](test/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C.md)

## Webpack

- [등장배경 및 용어 이해](webpack/README.md)
- [ts-loader vs babel loader](webpack/ts-loader%20vs%20babel-loader.md)

## Auth

- [access token과 refresh token](auth/access%20token%EA%B3%BC%20refresh%20token.md)
- [OAuth 이해](auth/OAuth.md)

## Network

- [질의 응답하면서 공부한 내용](network/README.md)
- [네트워크 기초](network/README.md)
- [라우팅, 라우터, 게이트웨이](network/%EB%9D%BC%EC%9A%B0%ED%8C%85%2C%EB%9D%BC%EC%9A%B0%ED%84%B0%2C%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4/README.md)
- [IP주소,MAC주소,ARP,RARP](network/IP주소,MAC주소,ARP,RARP/README.md)
- [IP주소체계](network/IP주소체계/README.md)
- [TCP / IP 개념](network/TCP.IP개념/README.md)
- [TCP/IP 연결 및 해제과정](network/TCP.IP%EC%97%B0%EA%B2%B0%20%EB%B0%8F%20%ED%95%B4%EC%A0%9C%20%EA%B3%BC%EC%A0%95/README.md)
- [웹브라우저통신과정](network/%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%ED%86%B5%EC%8B%A0%EA%B3%BC%EC%A0%95/)
- [http](network/http/)
- [uri, url, urn](network/uri.url.urn/)
- [dns](network/dns/)

## Node JS

- [NodeJS란?](nodejs/NodeJS%EB%9E%80%3F.md)
- [NodeJS의 내부 동작 원리](nodejs/NodeJS%EC%9D%98%20%EB%82%B4%EB%B6%80%20%EB%8F%99%EC%9E%91%20%EC%9B%90%EB%A6%AC.md)
- [nodejs with es6 - jest, typescript,nodemon,babel 세팅](nodejs/nodejs%20with%20es6%20-%20jest%2C%20typescript%2Cnodemon%2Cbabel%20%EC%84%B8%ED%8C%85.md)

## DB

- [mongodb란?](db/mongodb/mongodb%EB%9E%80%3F.md)

## 회고

- [목적](회고/README.md)
- [노션 TIL](https://dori-yunho.notion.site/TIL-7c1cbc873fbd4f43b8563e7b19b5ee69)
