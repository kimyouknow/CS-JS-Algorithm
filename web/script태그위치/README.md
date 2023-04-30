# script 태그 위치

> `body` 태그의 최하단에 위치하는 게 가장 좋다. 브라우저 동작 방식 이해 필요.

## 간단하게 설명한 브라우저의 동작 방식

> 자세한 동작 방식은 아래 정리해둠.

1. HTML을 읽기 시작
2. HTML을 파싱(parsing: 컴퓨터가 읽을 수 있는 코드로 바꾸는 작업)
3. DOM 트리 생성
4. Render 트리가 생성 (DOM tree + CSS의 CSSOM 트리 결합)
5. Display(브라우저)에 표시

![html동작-defer](https://user-images.githubusercontent.com/71386219/154383241-e5641f5c-6bd1-44a2-ba44-802313f3ca77.png)

1,2 순서를 주의해서 봐야한다. html은 파싱한 다음 dom트리를 생성하는데, 브라우저는 html 태그들을 읽는 도중 `script`태그를 만나면 파싱을 중단하고 js파일을 로드 후 js코드를 파싱한다. js파일 관련 작업 끝난 후 html파싱이 계속 된다.

### body 태그 최하단에 script를 넣었을 때 장점

html 사이에 script 태그가 위치하면 다음과 같은 문제가 발생한다.

- html을 읽는 과정에서 js 로드와 파싱을 위해서 중단되는 시점이 생기고, 그만큼 display되는 시간이 지연된다.
- DOM 트리가 생성되기 전에 js가 생성되지 않은 DOM을 조작을 시도하면 제대로 동작하지 않을 수 있다.

## script 로딩 순서 제어하기

1. script 태그의 속성으로 로딩 순서 제어

### async

```html
<script async src="index.js">
```

script태그를 만나도 html 파싱이 중단되지 않고 script로드와 html 파싱이 함께 이루어짐. script로드가 끝나면 script가 실행되는 시점에 파싱이 중단되고 실행이 끝나면 파싱을 이어감.

![html동작-async](https://user-images.githubusercontent.com/71386219/154383260-4cf703c7-a429-402a-9da5-fabf0797be76.png)

### defer

```html
<script defer src="index.js">
```

script 태그를 만나도 html 파싱이 중단되지 않음. html 파싱이 중단되면 script가 실행됨.

![html동작-defer](https://user-images.githubusercontent.com/71386219/154383257-acf2640c-f7c6-4069-86c2-4281d9ee7585.png)

## script내부에서 로딩 순서 제어

결과: `일반 script 코드 -> DOMContentLoaded -> load`

```js
document.addEventListener('DOMContentLoaded', ready);
// DOM 생성이 끝난 이후에 실행
```

```js
window.addEventListener('load', ready);
// 문서에 포함된 모든 콘텐츠(image, script, css..)가 전부 로드된 후에 실행
```

🔍 참고자료

- [ko.javascript.info - 문서와 리소스 로딩](https://ko.javascript.info/loading)
- [mdn - script](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)
- [script 태그는 어디에 위치해야 할까요?](https://velog.io/@takeknowledge/script-태그는-어디에-위치해야-할까요)
