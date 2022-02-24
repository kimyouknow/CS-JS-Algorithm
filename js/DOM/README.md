# DOM (Docuemnt object model)

HTML은 DOM이라는 개념으로 존재하고, API를 통해서 JS로 제어할 수 있다.

SPA 프레임워크 개발과정에서 DOM 렌더링을 직접하지 않지만, 그럼에도 바닐라 환경에서 DOM APIs를 익히는 것이 중요하다.

표준 렌더링 방식을 이해한다면 어느 개발 환경에서도 최적화된 렌더링 방식을 짐작해서 구현할 수 있다.

# HTMLCollection과 NodeList: 둘다 유사배열

> 결론적으로 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다. 해당 객체들이 메서드를 제공하지만 고차함수만큼 다양한 기능을 제공하지는 않는다.

`live 객체`

- `HTMLCollection`, `childNodes 프로퍼티가 반환하는 NodeList`객체
- 실시간으로 노드 객체의 상태를 변경하기 때문에 주의를 요한다.
- 반약 live 객체를 그대로 for문으로 반복하면서 상태를 바꾸는 코드가 있을 때, live 객체의 엘리먼트 상태가 바뀌면 실시간으로 live객체의 길이가 줄어들 수 있다.

`non-live 객체 `

- `NodeList`

# node 탐색 API

querySelector

- 다양한 선택자 선택 가능

getElementById()

- 지원범위가 넓고 속도도 빠름

# node 탐색 방법

- element type만 찾는지 텍스트 요소를 포함하는지 구분해서 사용

```js
element.firstChild;
element.firstElementChild;
element.nextSibling;
element.nextElementSibling;
```

# nodeType의 이해

node.element_node와 node.text_node를 가장 많이 씀. 일단 이것만 공부

dom을 찾아갈 때 필요할 수 있다.

# DOM조작

### innnerHtml

### createElement -> appendChild(append)

`append`

- 노드 객체나 DOMString사용가능
- 여러 개의 자식 요소 한 번에 설정 가능

```js
const div = docuement.createElement('div)
document.body.append(div, 'hhelo', '<span>a</span>)
```

- return 값 반환 안함

`appendChild`

- 노드 객체만 받을 수 있음.
- 한 번에 하나
- return 값 반환

### insertAdjacentHTML

element.insertAdjacentHTML(position, text);

- text: html해석가능한 문자열, 돔 트리
- 'beforebegin': element 앞에
- 'afterbegin': element 안에 가장 첫번째 child
- 'beforeend': element 안에 가장 마지막 child
- 'afterend': element 뒤에

```
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

### insertBefore()

```js
const insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

- referenceNode 가 null 이라면, newNode 가 자식 노드의 리스트의 끝에 삽입

- [ko.javascript.info - 브라우저: 문서, 이벤트, 인터페이스](https://ko.javascript.info/document)
- 모던 딥다이브
- 각 주제별 mdn
