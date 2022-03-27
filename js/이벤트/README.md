# 브라우저 이벤트

이벤트(event): 무언가 일어났다는 신호

모든 DOM노드는 이런 신호를 만들어 낸다. (이벤트가 DOM에 한정되어 있지는 않다.)

### 자주쓰는 이벤트

마우스

- click: 요소 위에서 마우스 왼쪽 버튼 혹은 스크린에서 탭
- contextmenu: 요소 위에서 마우슨 오른쪽 버튼
- mouseover, mouseout: 마우스커서를 요소 위에서 움직일 때, 요소 밖으로 나갈 때
- mousedown, mouseup: 요소 위에서 마우스 왼쪽 버튼을 누르고 있을 때, 마우스 버튼을 뗄 때
- mousemove: 마우스를 움직을 때

폼

- submit
- focus

키보드

- keydown, keyup

문서이벤트

- DOMContentLoaded: HTML이 전부 로드 및 처리되어 DOM생성이 완료되었을 때

css이벤트

- transitioned: css애니메이션이 종료되었을 때

# 이벤트 핸들러

핸들러(Handler): 이벤트가 발생했을 실행되는 함수

### HTML 속성

HTML안의 on<event> 속성에 핸들러 할당

```html
<input type="button" onclick="alert('토끼')" value="토끼를 세봅시다!" />
```

### DOM프로퍼티

DOM프로퍼티 on<event>을 사용해 핸들러 할당

```html
<input id="elem" type="button" value="클릭해 주세요." />
<script>
  elem.onclick = function () {
    alert('감사합니다.');
  };
</script>
```

### HTML속성 vs DOM프로퍼티

- HTML 속성은 button.onclick을 초기화하는 데 사용되는 반면 두 번째 예인 스크립트에서는 초기화하지않고 스크립트를불러옴.
- (둘다) onclick 프로퍼티는 단 하나밖에 없기 때문에, 복수의 이벤트 핸들러를 할당할 수 없다.

### addEventListener

```js
element.addEventListener(event, handler, [options]);
```

`options`: 아래 프로퍼티를 갖는 객체

- once: true이면 이벤트가 트리거 될 때 리스너가 자동으로 삭제
- capture: 어느 단계에서 이벤트를 다뤄야하는지 알려주는 프로퍼티(버블링, 캡처링)
- passive: true이면 리스너에서 지정한 함수가 preventDefault()를 호출하지 않음.

# Event object

여기에 이벤트에 관한 상세한 정보를 넣은 다음, 핸들러에 인수 형태로 전달

다양한 프로퍼티가 있음. 쓸데마다 잘 기억하고 사용

### event.currentTarget vs event.target

`event.target`

- 이벤트가 발생한 가장 안쪽의 요소 = 타깃(target)
- 실제 이벤트가 시작된 요소

`event.currentTarget`

- this
- '현재'요소로, 현재 실행 중인 핸들러가 할당된 요소를 참조

# 객체 형태의 핸들러와 handleEvent

> addEventListener()에 지정하는 이벤트 수신기는 콜백 함수거나, (콜백으로 작동할 handleEvent() 메서드를 가진) EventListener 인터페이스를 구현하는 객체

> `콜백 함수 자체`는 handleEvent() 메서드와 같은 매개변수, 같은 반환 값을 가집니다. 즉, 콜백 함수는 발생한 이벤트를 설명하는 `Event 기반 객체를 유일한 매개변수로 받고, 아무것도 반환하지 않습니다.`

addEventListener를 사용하면 함수뿐만 아니라 객체를 이벤트 핸들러로 할당할 수 있다. 이벤트가 발생하면 객체에 구현한 handleEvent 메서드가 호출

```html
<button id="elem">클릭해 주세요.</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(
        event.type + ' 이벤트가 ' + event.currentTarget + '에서 발생했습니다.'
      );
    },
  };

  elem.addEventListener('click', obj);
</script>
```

```html
<script>
  class Menu {
    handleEvent(event) {
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = '마우스 버튼을 눌렀습니다.';
    }

    onMouseup() {
      elem.innerHTML += ' 그리고 버튼을 뗐습니다.';
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
</script>
```

🔍 참고자료

- [이벤트 기초 - javscript.info](https://ko.javascript.info/events)
