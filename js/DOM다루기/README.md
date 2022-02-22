# DOM (Docuemnt object model)

HTML은 DOM이라는 개념으로 존재하고, API를 통해서 JS로 제어할 수 있다.

SPA 프레임워크 개발과정에서 DOM 렌더링을 직접하지 않지만, 그럼에도 바닐라 환경에서 DOM APIs를 익히는 것이 중요하다.

표준 렌더링 방식을 이해한다면 어느 개발 환경에서도 최적화된 렌더링 방식을 짐작해서 구현할 수 있다.

# node 탐색 API

querySelector

getElementById()

# node 탐색 방법

element.firstChild

element.firstElementChild

element.nextSibling

element.nextElementSibling

# nodeType의 이해

node.element_node와 node.text_node를 가장 많이 씀. 일단 이것만 공부

dom을 찾아갈 때 필요할 수 있다.

# node 생성과 추가

element.append

element.appendChild

element.prepend

element.removeChild

element.remove

## append vs appendChild

- append: 노드 객체, domString사용가능
- appendChild: 노드 객체만 가능

# Templating

- insertAdjacentHTML

- [ko.javascript.info - 브라우저: 문서, 이벤트, 인터페이스](https://ko.javascript.info/document)
