# Node와 HtmlElement

## Node vs HtmlElement

### Node란?

`Node`는 보다 일반적인 Element이다. 노드는 HTML element일 수 있지만 텍스트나 주석과 같은 HTML 문서의 다른 모든 것일 수도 있다. 아래 예시를 보자.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <!-- Comment -->
    <div id="root"></div>
    <p>This is Example</p>
  </body>
</html>
```

위와 같은 구조에서 \<html>은 DOM document의 노드이다. \<html>은 \<head>와 \<body>라는 두 개의 자식 노드를 가진다. /<body>는 주석 노드와 \<div id="root"> 노드와 \<p>노드를 가진다.

\<p> 노드도 자식 노드를 가지는데, 문자열(text) 또한 노드로 취급한다.

MDN의 `Node` 설명에 따르면 다음의 인터페이스들은 모두 Node로부터 메소드와 프라퍼티를 상속한다고 한다.

- Element Node
- Text Node
- CData Section Node
- Processing Instruction Node
- Comment Node
- Document Node
- Document Type Node
- Document Fragment Node

### Element (HTMLElement)

위에서 살펴봤듯이 Element는 Node의 특정 타입 중 하나다.(Node.ELEMENT_NODE) Element는 HTML 문서에서 태그를 사용하여 작성된 노드이다. 예를 들어, HTMLElement 인터페이스는 HTML 요소의 기반 인터페이스이고 SVGElement (en-US) 인터페이스는 모든 SVG 요소의 기초이다.

정리하자면, `Node`는 `Element`를 포함한 개념이며, `Element`는 `HTMLElement`를 포함한 개념이다.

```ts
const paragraph = document.querySelector('p');
paragraph instanceof Node; // => true
paragraph instanceof HTMLElement; // => true
```

### DOM 프로퍼티 구분

node에만 있는 DOM 프로퍼티와 element에만 있는 DOM 프로퍼티를 구분할 줄 알아야 한다.

다음 Node의 프로퍼티들은 node나 NodeList를 평가하는 프로퍼티들이다.

```ts
node.parentNode; // Node or null
node.firstChild; // Node or null
node.lastChild; // Node or null
node.childNodes; // NodeList
```

다음의 프로퍼티들은 element나 element collection을 평가하는 프로퍼티들이다.

```ts
node.parentElement; // HTMLElement or null
node.children; // HTMLCollection
```

`node.childNodes`나 `node.children`모두 노드의 자식요소를 반환하지만 차이가 있다. `childNodes`는 노드의 프로퍼티이기 떄문에 모든 하위 노드를 반환하지만 `children`은 element이기 떄문에 하위 노드 중 element가 아닌 노드는 반환하지 않는다.

```html
<p>
  hello example <abc>custom abc tag</abc>
  <!-- comment -->
</p>
```

[데모 링크](https://codesandbox.io/s/htmlelement-6nlvrm?file=/index.html)

```ts
const paragraph = document.querySelector('p');
console.log(paragraph.childNodes); // NodeList (5):
// 0 " hello example "
// 1 <abc>custom abc tag</abc>
// 2 #text " "
// 3 <!-- comment -->
// 4 #text " "
console.log(paragraph.children); // HTMLCollection (1)
// 0 <abc>custom abc tag</abc>
```

## HTMLCollection과 NodeList: 둘다 유사배열

> 결론적으로 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다. 해당 객체들이 메서드를 제공하지만 고차함수만큼 다양한 기능을 제공하지는 않는다.

### `live 객체`

- `HTMLCollection`
- 대부분의 NodeList가 비정적(Live) 콜렉션인데 반해, querySelectorAll()로 가지고 온 NodeList는 정적(Static) 콜렉션이다.
- 실시간으로 노드 객체의 상태를 변경하기 때문에 주의를 요한다.
- 반약 live 객체를 그대로 for문으로 반복하면서 상태를 바꾸는 코드가 있을 때, live 객체의 엘리먼트 상태가 바뀌면 실시간으로 live객체의 길이가 줄어들 수 있다.

### `non-live 객체`

- `NodeList`

## 참고자료

- https://ko.javascript.info/searching-elements-dom#ref-221
- https://dmitripavlutin.com/dom-node-element/
- https://bitsofco.de/what-exactly-is-the-dom/?utm_source=CSS-Weekly&utm_campaign=Issue-341&utm_medium=email
- https://developer.mozilla.org/ko/docs/Web/API/HTMLElement
