# nodejs의 내부 동작 원리

키워드

> libuv, 이벤트루프, 워커쓰레드, 비동기, 이벤트 기반, 논블로킹,싱글 스레드

📌 목차

1. [NodeJs 구성](#nodejs-구성)
2. [이벤트 루프란?](#이벤트-루프란?)
3. [NodeJs의 비동기 처리](#nodejs의-비동기-처리)

# nodejs 구성

Node.js를 크게 나눠봤을 때, `내장 라이브러리`와 `v8엔진` 그리고 `libuv`로 구성되어 있다. Node.js의 특성인 이벤트 기반, 논블로킹 I/O 모델들은 모두 libuv 라이브러리에서 구현된다.

# libuv

- node.js에서 사용하는 `비동기 I/O라이브러리`
- node.js의 특성인 이벤트 기반, `논 블로킹 I/O 모델`은 모두 libuv에서 구현됨.
- 콜백 함수들은 libuv 내에 위치한 `이벤트 루프`에서 관리 및 처리된다.

### 이벤트 기반

- node.js는 콜 스택, 이벤트 큐에 항상 명령을 대기시키지 않고 이벤트 리스너event listener를 통해` 이벤트가 발생하면 콜백함수를 실행하는 방식`을 사용한다.
- 예를 들어 서버에 접속하는 이벤트event를 듣는listen 이벤트 리스너event listener를 코딩하고 해당 이벤트가 발생하면 콜백함수를 실행한다. (흔히 사용하고 있는` router도 이벤트 기반`으로 동작)

### 논 블로킹 I/O

- Node.js는 싱글스레드 논블로킹 모델로 구성되어 있다. 하나의 스레드로 동작하지만, 비동기 I/O 작업을 통해 요청들을 서로 블로킹하지 않다. 즉, 동시에 많은 요청들을 비동기로 수행함으로써 싱글스레드일지라도 논블로킹이 가능하다.

### libuv 동작 방식

- node.js는 libuv 위에서 동작하여 node 인스턴스가 생성될 때 libuv에는 스레드 풀(4개가 기본)이 생성된다.
- libuv

# 이벤트 루프란?

- `이벤트에 따라 호출되는 콜백함수를 관리`하는 것이 바로 이벤트 루프
- 이벤트 루프는 여러 개의 `페이즈(Phase)`들을 갖고 있으며 각 phase 들은 `FIFO 큐`를 가지고 있으며, 이 큐에는 특정 이벤트의 콜백들을 넣고, CPU가 할당(=이벤트루프가 해당 phase를 호출할때)될 때 실행
- 이벤트 루프는 `라운드 로빈(round-robin)` 방식으로 노드 프로세스가 종료될때까지 일정 규칙에 따라 `여러개의 페이즈들을 계속 순회`
- 공식문서
  > Event loop는 javascript가 단일 스레드임에도 가능할 때마다 시스템 커널에 작업을 오프로드하여 node.js가 비차단I/O작업을 수행할 수 있도록 한다. 대부분의 최신 커널은 다중 스레드이므로 백그라운드에서 실행되는 여러 작업을 처리할 수 있다. 이러한 작업 중 하나가 완료되면 커널은 node.js에 알려 적절한 콜백을 `폴`큐에 추가하여 실행할 수 있도록 함.
- 로빈 프로세스 스케줄링:
  > 그룹 내에 있는 모든 요소들을 합리적인 순서에 입각하여 뽑는 방법으로서, 대개 리스트의 맨 위에서 아래로 가며 하나 씩 뽑고, 끝나면 다시 맨 위로 돌아가는 식으로 진행된다. 쉽게 말해 라운드 로빈은 “기회를 차례대로 받기”라고 이해해도 좋을 것이다. 컴퓨터 운영에서, 컴퓨터 자원을 사용할 수 있는 기회를 프로그램 프로세스들에게 공정하게 부여하기 위한 한 방법으로서, 각 프로세스에 일정시간을 할당하고, 할당된 시간이 지나면 그 프로세스는 잠시 보류한 뒤 다른 프로세스에게 기회를 주고, 또 그 다음 프로세스에게 하는 식으로, 돌아가며 기회를 부여하는 운영방식이 있는데, 이를 흔히 라운드 로빈 프로세스 스케줄링이라고 부른다.

## 이벤트 루프의 phase들 설명

```
  ┌───────────────────────────┐
┌─>│ timers │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
│ │ pending callbacks │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
│ │ idle, prepare │
│ └─────────────┬─────────────┘ ┌───────────────┐
│ ┌─────────────┴─────────────┐ │ incoming: │
│ │ poll │<─────┤ connections, │
│ └─────────────┬─────────────┘ │ data, etc. │
│ ┌─────────────┴─────────────┐ └───────────────┘
│ │ check │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
└──┤ close callbacks │
  └───────────────────────────┘
```

### `timers`

- setTimeout, setInterval에 의해 예약된 콜백 실행
- 타이머 콜백은 지정된 시간이 경과한 후 예약할 수 있는 한 빨리 실행
- 내부로직은 poll큐에 먼저 등록된 콜백들이 처리되고 실행됨.
- 기술적으로 폴 단계 는 타이머가 실행되는 시기를 제어

### `pending callbacks`(I/O callbacks)

- 다음 루프 반복으로 연기된(pending) I/O 콜백 실행, 클로즈 콜백, 타이머로 스케줄링된 콜백, setImmediate()를 제외한 거의 모든 콜백들을 집행
- http, api, db 등등

### `idle, prepare`

- 내부적으로만 사용

### `poll`

- 새 I/O이벤트 검색. i/O관련 콜백(클로즈 콜백, 타이머로 스케줄링된 콜백,setImmediate()를 제외한 거의 모든 콜백) 실행.
- I/O를 차단하고 폴링해야 하는 시간을 계산한 다음 -> 폴 큐 에서 이벤트를 처리
- poll 큐에 쌓인 콜백함수들을 한도가 넘지 않을때까지 모두 동기적으로 실행
- 만약 한도가 넘거나, 더이상 실행할 콜백함수가 없을때는 별도의 규칙을 따라, 다음 단계로 넘어가거나 대기
- 이벤트 루프가 폴 단계 에 들어가고 예약된 타이머가 없으면 다음 두 가지 중 하나가 발생
  - 1.` 폴 큐 가 비어 있지 않으면` 이벤트루프가 큐를 순회하며 처리
  - 2. `폴 큐 가 비어 있으면` setImmediate()가 있으면 check로 넘어감. 없으면 이벤트루프가 phase를 돌며 콜백을 무한히 기다림

### `check`

- setImmediate()여기에서 콜백이 호출

### `close callbacks`

- 일부 닫기 콜백

## 예시

```js
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("A");
  }, 0);
  setImmediate(() => {
    console.log("B");
  });
});
```

- fs.readFile 라는 블로킹작업을 만난 시점에 이벤트루프는 워커쓰레드에게 작업을 넘김
- 워크쓰레드가 작업을 완료한 뒤 I/O callbacks 영역의 큐에 콜백을 등록
- 이벤트루프가 I/O callbacks 영역을 실행할 때, 콜백을 poll 영역의 큐에 등록
- 이벤트루프가 poll 영역을 실행할 때, 큐에 1개가 있으므로 이걸 실행함.
- (콜백내부) 2라인에서 setTimeout() 이므로 다시 timers 영역에 넣고 5라인으로 간다.
- (콜백내부) 5라인에서 setImmediate() 이므로 check 영역에 넣는다.
- 이벤트루프가 poll 큐를 비우고, 다음 실행영역인 check 영역으로 간다. check 영역의 큐에는 들어있는 'B'를 콘솔에 찍는다. check 영역의 큐를 비우고 다시 while문의 시작지점으로 간다.
- 이벤트루프가 timers 영역을 호출한다. uv\_\_run_timers()는 setTimeout()의 콜백을 poll큐에 등록한다.
- 이벤트루프가 2번째로 poll 영역을 실행한다. 큐에 1개가 있으므로 이걸 실행하고 'A'를 찍는다.
- node 프로세스가 반환되고 끝

👀 참고자료

- [추가이해필요](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [추가이해필요](https://nodejs.org/ko/docs/guides/timers-in-node/)
- https://sjh836.tistory.com/149
- https://velog.io/@julianneyi/Node.js-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC
- https://medium.com/@vdongbin/node-js-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC-single-thread-event-driven-non-blocking-i-o-event-loop-ce97e58a8e21

# nodejs의 비동기 처리

node.js는 `비동기 I/O`를 지원하며 `single-thread` 기반으로 동작하는 서버다. node서버는 비동기 방식으로 요청을 처리하므로 요청을 처리하면서 다음 요청을 받을 수 있다. 또한 병렬처리를 thread로 처리하지 않으므로 multi-thread가 갖는 문제(클라이언트 요청마다 Thread를 발생, 공유자원에 대한 동기화)에서 자유롭다.

![image](https://user-images.githubusercontent.com/71386219/151757073-91a2b6cf-0e0a-4361-a47c-e0cb93fb40c0.png)

node.js의 `비동기 처리`는 `이벤트 방식`으로 처리된다. 서버는 `이벤트를 Event Loop로 넘겨서 처리`한다. Event Loop가 처리하는 동안 제어권은 다음 요청으로 넘어가고 처리가 완료되면 `callback`을 호출하여 처리완료를 호출측에 알려준다. 이벤트를 처리하는 Event Loop는 `Single-thread`로 이뤄졌다. 그래서 이벤트 호출 측에는 비동기로 처리되지만 처리작업 자체가 오래 걸린다면 서버 전체 처리에 영향을 줄 수 있다.

## nodejs의 올바른 사용

따라서, 처리 작업이 cpu를 많이 소모하거나, 대용량 파일을 처리한다면 Node.js에서는 큰 약점이다. 그러나 `IO작업이 별로 없는 어플리캐이션`이나 `단위 작업이 짧은 메시징 어플리캐이션`의 경우 고성능을 보장한다.

### ✅ Node는 동기보다 비동기 방식에 익숙해져야 한다.

## 비동기 프로그래밍 기본

1. 비동기 API 사용

- 비동기 이벤트 발생시키고 완료 여부를 알 수 있는 callback 정의

2. 동기 -> 비동기 전환

```js
// 동기
const fs = require("fs");

let filenames = fs.readdirSync(".");
for (let i = 0; i < filenames.length; i++) {
  console.log(filenames[i]);
}
console.log("ready");
console.log("cna prorcess next job...");
// 출력결과
// for문의 console.log
// ready
// cna prorcess next job...

// 비동기
const fs = require("fs");

fs.readdir(".", function (err, filenames) {
  for (let i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
  }
  console.log("ready");
});
// 출력결과
// cna prorcess next job...
// for문의 console.log
// ready
```

3. 비동기 프로그램에서 순차처리

- 중첩된 callback을 활용하여 순서가 보장되게 만들기
- 하지만 과도하게 사용하면 코드의 가독성이 떨어지므로 `async` 모듈 사용

## Node.js의 병렬처리

- 비동기 방식이라도 Evnet Loop에서 처리되는 작업이 긴 시간을 요구할 때는 성능이 저하됨. -> `이벤트를 잘게 쪼개어 병렬 처리`
- 중첩된 Callback 함수를 `Closure`로 사용하여 자신의 Scope 뿐만 아니라 외부 함수의 Scope를 가지게함 -> 예를 들어, `count`변수를 두어 하나의 작업을 병렬처리하여 언제 전체 작업이 완료되는지 알 수 없을 때, `callback이 전달된 횟수만큼 count에 저장`하고 `작업 완료될 때마다 count를 하나씩 감소`. count가 0이되면 모든 작업 완료되었다는 의미.

## Callback의 호출시점

`Callback의 시점을 다른 코드와 같이 순차적으로 생각하면 안 됨`. -> 동기적으로 생각하면 안된다는 뜻❗

아래 그림을 예로 들면, 코드상의 Callback로직은 가운데 위치하지만 Runtime에 들어가면 외부 로직과 Callback은 Event Loop에 의해 처리되어 어느 것이 먼저 실행될지 알 수 없다.

![image](https://user-images.githubusercontent.com/71386219/151282370-4456d82d-8860-466d-bfdd-346280fbbf03.png)

## 구체적인 과정

1. 코드가 호출 스택에 쌓인 후 실행하되 그것이 비동기 작업이라면 이벤트 루프는 비동기 작업을 위임합니다.
2. Node를 구성하는 libuv는 해당 비동기 작업이 OS커널에서 할 수 있는 것인지, 아닌지(thead pool에서 처리)를 판단하여 비동기 함수를 처리합니다.
3. 비동기 작업을 처리하고 콜백 함수를 이벤트 루프를 통해 태스크 큐에 넘겨주게 됩니다.
4. 이벤트 루프는 콜스택에 쌓여있는 함수가 없을 때에, 태스크 큐에서 대기하고 있던 콜백함수를 콜스택으로 넘겨줍니다
5. 콜스택에 쌓인 콜백함수가 실행되고, 콜스택에서 제거됩니다.

🔍 참고자료

- https://www.nextree.co.kr/p7292/
- https://nodejs.org/ko/docs/guides/timers-in-node/
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- https://darrengwon.tistory.com/953
