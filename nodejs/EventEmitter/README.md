# Event emitter

Node는 이벤트를 처리하기 위해서 EventEmitter 라는 클래스를 제공

이벤트가 일어나면 이벤트를 담당하는 `이벤트 객체(event emitter)`에서 이벤트가 일어났음을 알림. 그 후 정해둔 로직을 실행.

EventEmitter의 emit함수가 호출되면, emitter는 동기적으로 등록되어 있는 리스너 함수를 `순차적으로 호출`한다.

일반적으로 이벤트 리스너가 원래 등록된 이벤트 핸들러보다 나중에 호출되기 때문에 비동기처럼 보인다. 하지만` EventEmitter의 인스턴스는 EventEmitter 인스턴스 자체내에서 이벤트와 연견될 모든 이벤트와 리스너를 추적`한다. 따라서 `EventLoop의 큐를 사용하는 것이 아니다.` 객체가 이벤트를 발생 시키면 해당 EventEmitter이벤트에 연결된 모든 함수가 동기적 으로 호출된다. 호출된 리스너에서 반환된 모든 값은 무시 되고 버려진다.

![image](https://user-images.githubusercontent.com/71386219/151918660-d66a3cdf-4361-44a9-ac3f-d7c50620523e.png)

### 비동기식 대 동기식

모든 리스너는 등록 된 EventEmitter순서대로 동기적으로 호출합니다. 이는 이벤트의 적절한 순서를 보장하고 경쟁 조건 및 논리 오류를 방지하는 데 도움이 됩니다. setImmediate()적절한 경우 리스너 함수는 또는 process.nextTick()메서드 를 사용하여 비동기 작업 모드로 전환할 수 있습니다.

```js
const myEmitter = new MyEmitter();
myEmitter.on("event", (a, b) => {
  setImmediate(() => {
    console.log("this happens asynchronously");
  });
});
myEmitter.emit("event", "a", "b");
```

### 대표적인 메소드

eventEmitter.on()

- 이벤트의 타입과 리스너를 인자로 받아 Emitter 객체에 추가하는 역할
- `특정 상황에 실행시킬 리스너 함수를 Emitter 안에 등록한다는 의미`

eventEmitter.emit()

- 등록한 이벤트를 호출

eventEmitter.once()

- 특정 이벤트에 대해 최대 한 번만 호출되는 리스너를 등록

eventEmitter.on("error", cb) & events.errorMonitor

- 인스턴스 내에서 오류가 발생 EventEmitter하면 일반적인 작업은 'error'이벤트를 내보내는 것. 이들은 Node.js 내에서 특별한 경우로 취급.
- 'error'가장 좋은 방법은 이벤트 에 대한 리스너를 항상 추가하는 것.
- 'error'기호를 사용하여 리스너를 설치하면 발생한 오류를 소모하지 않고 이벤트 를 모니터링

```js
const { EventEmitter, errorMonitor } = require("events");

const myEmitter = new EventEmitter();
myEmitter.on(errorMonitor, (err) => {
  MyMonitoringTool.log(err);
});
myEmitter.emit("error", new Error("whoops!"));
// Still throws and crashes Node.js
```

클래스: EventEmitter

- 모든 EventEmitters는 새로운 이벤트를 등록할 때마다 'newListner' 이벤트를 호출하고 리스너를 제거할 때마다 'removeListner'를 호출

🔍 참고자료

- https://nodejs.org/docs/latest-v15.x/api/events.html#events_events
- https://on-ad.github.io/node.js/2019/04/09/Nodejs-EventEmitter.html
- https://www.huskyhoochu.com/nodejs-eventemitter/
- https://edykim.com/ko/post/events-eventemitter-translation-in-node.js/
- https://yceffort.kr/2021/06/misconceptions-on-nodejs
