# Event

## 왜 이벤트를 효율적으로 등록해야하지? 걍 등록하면 안되나

- 이벤트가 많을수록 브라우저에서 기억해야할 이벤트가 많다.
- 이로 인해 효율적인 메모리 관리가 되지 않는다.
- 동적인 이벤트 할당할 때 문제가 된다.

## Event.handler

### addEventListener

```js
element.addEventListener(event, handler, [options]);
```

`options`: 아래 프로퍼티를 갖는 객체

- once: true이면 이벤트가 트리거 될 때 리스터너가 자동으로 삭제
- capture: 어느 단계에서 이벤트를 다뤄야하는지 알려주는 프로퍼티(버블링, 캡처링)
- passive: true이면 리스너에서 지정한 함수가 preventDefault()를 호출하지 않음.

## Event object

다양한 프로퍼티가 있음. 쓸데마다 잘 기억하고 사용

### event.currentTarget vs event.target

`event.target`

- 이벤트가 발생한 가장 안쪽의 요소 = 타깃(target)
- 실제 이벤트가 시작된 요소

`event.currentTarget`

- this
- '현재'요소로, 현재 실행 중인 핸들러가 할당된 요소를 참조(이벤트가 부착된 DOM)

예시

```html
<script>
  const handler = (event) => {
    console.log(event.target); // <span>Child Text<span>
    console.log(event.currentTarget); //<button><span>Child Text<span></button>
  }
  document.querySelector(button).addEventListener('click', handler);
</script>
<body>
  <button>
    <span>Child Text<span>
  </button>
</body>
```

## 이벤트의 흐름

> 팁: 뷰나 시스템 이벤트의 경우 이벤트 핸들러는 window 객체에 연결해야 한다.

DOM 이벤트 라이플 사이클

- 캡처 단계: 이벤트가 html에서 목표로 이동한다.
- 목표 단계: 이벤트가 목표 요소에 도달한다.
- 버블 단계: 이벤트가 목표 요소에서 html로 이동한다.

계층적 구조를 포함하고 있는 HTML 요소에 이벤트가 발생할 경우 연쇄적 반응이 일어난다. 이러한 현상을 `이벤트 전파(event propagation)`이라고 하는데 전파 방향에 따라 `버블링(Event Bubbling): 자식->부모`과 `캡처링(Event Capturing): 부모 -> 자식`으로 구분한다.

![event-flow](https://poiemaweb.com/img/eventflow.svg)

ko.javascript.info에서 설명한 논리적 설명

> 캡처링 단계는 거의 쓰이지 않고, 주로 버블링 단계의 이벤트만 다뤄집니다. 이렇게 된 데는 논리적 배경이 있습니다. </br> 현실에서 사고가 발생하면 지역 경찰이 먼저 사고를 조사합니다. 그 지역에 대해 가장 잘 아는 기관은 지역 경찰이기 때문입니다. 추가 조사가 필요하다면 그 이후에 상위 기관이 사건을 넘겨받습니다. </br> 이벤트 핸들러도 이와 같은 논리로 만들어졌습니다. 특정 요소에 할당된 핸들러는 그 요소에 대한 자세한 사항과 무슨 일을 해야 할지 가장 잘 알고 있습니다. <td>에 할당된 핸들러는 <td>에 대한 모든 것을 알고 있기 때문에 <td>를 다루는데 가장 적합합니다. 따라서 <td>를 다룰 기회를 이 요소에 할당된 핸들러에게 가장 먼저 주는 것입니다. </br> 버블링과 캡처링은 '이벤트 위임(event delegation)'의 토대가 됩니다.

### 이벤트 버블링

이벤트 버블링 막기

- event.stopPropagation();
- ko.javascript.info의 주의사항에 다음과 같이 나와있음 (잘 와닿지 않아 복붙함)
  > ❗️ 꼭 필요한 경우를 제외하곤 버블링을 막지 마세요! </br> 이벤트 버블링을 막아야 하는 경우는 거의 없습니다. 버블링을 막아야 해결되는 문제라면 커스텀 이벤트 등을 사용해 문제를 해결할 수 있습니다. 커스텀 이벤트 사용 방법은 추후에 다루겠습니다. 핸들러의 event 객체에 데이터를 저장해 다른 핸들러에서 읽을 수 있게 하면, 아래쪽에서 무슨 일이 일어나는지를 부모 요소의 핸들러에게 전달할 수 있으므로, 이 방법으로도 이벤트 버블링을 통제할 수 있습니다.

## 이벤트 캡처링

- 캡처링 단계를 이용하는 경우는 거의 없음

## 이벤트 delegation(위임)

- 비슷한 방식으로 여러 요소를 다뤄야 할 때 사용
- 요소마다 핸들러를 사용하지 않고, 공통 조상에 하나의 핸들러를 할당해 관리
- `이벤트흐름`에 의해 이벤트를 발생시킨 요소의 부모요소에도 `버블링`되기 때문에 가능. 실제 발생시킨 요소는 `event.target`으로 찾을 수 있다.

### 활용

- dom요소에 data속성을 추가해 호출할 매서드를 할당
- 컨테이너에 하나의 핸들러를 할당하고, event.target을 통해 이벤트가 발생한 요소 위치를 파악 후, 원하는 요소에서 이벤트가 발생할 때 핸들링

### 행동패턴

- 요소의 행동을 설명하는 커스텀 속성을 요소에 추가
- 문제 전체를 감지하는 핸들러가 이벤트를 추적.

### 이벤트 위임 장점

- 많은 핸들러 할당하지 않아도 되기 때문에 초기화단순, 메모리 절약
- DOM수정이 간편해짐

### 이벤트 위임 단점

- 몇몇 버블링이 되지 않는 이벤트에는 사용하지 못함.

🔍 참고자료

- [ko.javascript.info - 브라우저 이벤트 소개](https://ko.javascript.info/introduction-browser-events)
- [poiemaweb - js-event](https://poiemaweb.com/js-event)
