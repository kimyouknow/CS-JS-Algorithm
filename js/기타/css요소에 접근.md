# js로 css프로퍼티 접근

> Inline, External, Internal에 따라 자름

### Inline 스타일

internal 스타일이면 htmlElement.style.width 이런식으로 접근 가능

```html
<body>
  <div style="width: 300px; height: 300px"></div>
</body>
```

```js
const $div = document.querySelector('div');
console.log($div.style.width); // 300px
```

### External, Internal 스타일

External이나 style태그를 활용용하면 위의 방식으로 접근 안 됨.

- width와 heigth의 경우 clientwidth, offsetWidth등을 사용

  - client- : margin을 제외한 border와 padding, content값의 합
  - offset- : margin과 border를 제외한 padding, content값의 합

- `var style = window.getComputedStyle(element[, pseudoElt]);`사용
  - 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신
  - 이 속성값들은, 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값

```html
<style>
  div {
    width: 300px;
    height: 300px;
  }
</style>
<body>
  <div></div>
</body>
```

```js
const $div = document.querySelector('div');
console.log($div.style.width); // null
const computed = window.getComputedStyle($div);
console.log(computed.width);
```

🔍 참고자료

- (Getting the Width and Height of an Element)[https://www.javascripttutorial.net/javascript-dom/javascript-width-height/]
- (https://attacomsian.com/blog/javascript-get-css-styles)[https://attacomsian.com/blog/javascript-get-css-styles]
- [Window.getComputedStyle() - mdn](https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle)
