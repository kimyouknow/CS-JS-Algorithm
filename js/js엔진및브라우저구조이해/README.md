# js엔진 및 브라우저의 구조 이해:

# 브라우저마다 엔진이 다름

v8 기준으로 설명

## 구성 요소

<img width="472" alt="eventloop3" src="https://user-images.githubusercontent.com/71386219/156328888-9ed079bf-5347-4c6b-b00a-1d97887a93ce.png">

### Memory Heap

- 메모리 할당이 일어나는 곳
- 구조화되지 않은 넓은 메모리 영역
- 객체(변수, 함수 등)들이 들어간다.

### Call Stack

- 실행될 코드의 한 줄 단위로 할당(인터프리터이기 때문에)

### Wep APIs(노드에서는 백그라운드로 설명)

- 비동기 처리를 담당

### Callback Queue(Task Queue, Event Queue 등 다양한 형태가 있음)

- 비동기 처리가 끝난 후 실행되어야 할 콜백 함수가 차례대로 할당된다.

종류 (Micro > Animation Frames > Task)

- Task Queue(Event Queue): setTime,
- Microtask Queue(Jon Queue): promise,
- Animation Frames:

### Event Loop

- 이벤트 루프는 태스크가 들어오길 기다렸다가 태스크가 들어오면 이를 처리하고, 처리할 태스크가 없는 경우엔 잠드는, 끊임없이 돌아가는 자바스크립트 내 루프
- Queue에 할당된 함수를 순서에 맞춰 Call Stack에 할당

# 마이크로 태스크와 매크로 태스크 큐

![9466d8aa53fc5b3e63a92858a94bb429df02bbd20012b738f0461343beaa6f90](https://user-images.githubusercontent.com/71386219/156325973-e3fefde0-da64-4c82-b68e-9a170a1ce239.gif)

`macrotasks`

- requestAnimationFrame, I/O, UI rendering, setTimeout, setInterval, setImmediate, mousemove ...

`microtasks`

- process.nextTick, Promises, queueMicrotask(f), MutationObserver
- 주로 프라미스를 사용해 만든다. 프라미스와 함께 쓰이는 `.then/catch/finally` 핸들러가 마이크로태스크가 된다.

> 자바스크립트 엔진은 매크로태스크 하나를 처리할 때마다 또 다른 매크로태스크나 렌더링 작업을 하기 전에 마이크로태스크 큐에 쌓인 마이크로태스크 전부를 처리

[실제 동작을 볼 수 있는 외국 사이트](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) 이곳에서 잘 알아보자

🔍 참고자료

- [[이벤트 루프(1/2)] JS로 개발하는데 내부 동작을 모르면 곤란합니다 | 코드 실행 과정](https://www.youtube.com/watch?v=QFHyPInNhbo)
- [이벤트 루프와 매크로·마이크로태스크 - ko.javascript.info](https://ko.javascript.info/event-loop)
- [이벤트 루프와 태스크 큐 (마이크로 태스크, 매크로 태스크) - velog](https://velog.io/@yejineee/이벤트-루프와-태스크-큐-마이크로-태스크-매크로-태스크-g6f0joxx)
- [실제 동작을 볼 수 있는 외국 사이트](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
