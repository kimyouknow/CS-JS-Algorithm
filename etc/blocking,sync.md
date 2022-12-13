# 간단한 용어 설명

## Blocking vs Non - Blocking

> 제어의 관점
> 호출되는 함수가 바로 리턴하느냐 마느냐

### Blocking

자신의 작업을 진행하다가 다른 주체의 작업이 시작되면 다른 작업이 끝날 때까지 `기다렸다가` 자신의 작업을 시작하는 것

호출된 함수가 자신의 작업을 모두 마칠 때까지 호출한 함수에게 제어권을 넘겨주지 않고 대기하게 함

### Non - Blocking

다른 주체의 작업에 `관련없이` 자신의 작업을 하는 것. 다른 쪽에서 작업을 하는 순간 빠져나와 자기 일을 진행함.

호출된 함수가 바로 리턴해서 호출한 함수에게 제어권을 넘겨주고, 호출한 함수가 다른 일을 할 수 있게 함.

## Synchronous vs Asynchronous

> 순서와 결과(처리)의 관점
> 호출되는 함수의 작업 완료 여부를 누가 신경쓰냐

### Synchronous

동기. 작업을 동시에 수행하거나, 동시에 끝나거나, 끝나는 동시에 시작함을 의미

호출하는 함수가 호출되는 함수의 작업 완료 후 리턴을 기다리거나, 또는 호출되는 함수로부터 바로 리턴 받더라도 작업 완료 여부를 호출하는 함수 스스로 계속 확인

### Asynchronous

비동기. 시작,종료가 일치하지 않으며, 끝나는 동시에 시작을 하지 않음을 의미

호출되는 함수에게 callback을 전달해서, 호출되는 함수의 작업이 완료되면 호출되는 함수가 전달받은 callback을 실행하고, 호출하는 함수는 작업 완료 여부를 신경쓰지 않음

# 우리가 익숙한 것과 익숙하지 않은 것

## 익숙한 것

`Sync-Blocking`, `Async-NonBlocking`

![iSafBIF](https://user-images.githubusercontent.com/71386219/156314019-422c334b-99f6-4ad6-a286-8676199e3d60.png)

## 익숙하지 않은 것

`Sync-NonBlocking`

- 간단히 말하면, 메서드 호출 후 바로 반환 받아서 다른 작업을 할 수 있지만, 메서드 호출에 의해 수행되는 작업 완료되지 않았음. 호출하는 메서드가 호출되는 메서드 쪽 작업 완료 여부를 계속 묻는다

`Async-Blocking`

- 이점이 별로 없어서 안쓰는데 가끔 의도치 않게 쓰게 되는 경우가 있다고 함.

🔍 참고자료

- [[10분 테코톡] 🐰 멍토의 Blocking vs Non-Blocking, Sync vs Async](https://www.youtube.com/watch?v=oEIoqGd-Sns&list=WL&index=10)
- [Blocking-NonBlocking-Synchronous-Asynchronous - homoefficio.github.io](https://homoefficio.github.io/2017/02/19/Blocking-NonBlocking-Synchronous-Asynchronous/)
