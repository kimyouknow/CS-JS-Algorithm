# Node.js로 입력받기

그동안 js를 사용하면서 웹 브라우저에 있는 콘솔창 혹은 html 태크를 활용해 입력을 컨트롤 했다. nodejs로 알고리즘 문제를 풀고, 터미널에서 간단히 결과와 콘솔을 보기 위해 nodejs 입력 모듈에 대해 알아보았다.

📌 목차

1. [readline](#readline)
2. [fs](#fs)

# readline

## readline 모듈 속성/메서드

✔ createInterface()

- 인터페이스 객체 생성
- input과 ouput을 생성

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

✔ 닫기 이벤트(close)

아래 중 하나가 발생되면 실행

- rl.close()
- Ctrl + D
- Ctrl + C

✔ line 이벤트

- 입력 스트림이 라인 끝에서 (\n, \r 또는 \r\n)을 수신할 때 실행(한 줄 씩 입력받음)
- 일반적으로 사용자가 Enter 또는 Return을 누를 때 발생

✔ rl.prompt()

- 사용자에게 입력을 제공할 새 위치를 제공하기 위해 구성된 InterfaceConstructor 인스턴스를 출력의 새 줄로 작성

✔ rl.setPromt()

- rl.prompt()가 호출될 때마다 출력에 기록될 프롬프트를 설정.

## 1번 입력 받고 종료

- `question` 메소드로 callback함수를 생성
- callback함수 안에 rl.close로 종료 선언

```js
rl.question("What's your name?", function (answer) {
  conosle.log(answer);
  rl.close();
});
```

## 반복적으로 입력 받기

- line을 활용해 한줄씩 입력받기
- r.promt()로 계속 입력 받기
- 원하는 조건에서 rl.close()를 사용해 종료

```js
rl.on("line", function (line) {
  console.log("this is line", line);
  if(line === "exit) {
    rl.close() // exit를 입력받았을 때 rl 종료
  }
  // 함수 실행
  rl.promt()  // 프롬프트 창 세팅
}).on("close", function () {
  process.exit();
});
```

### 🔍 출처

- https://nodejs.org/api/readline.html
- https://xzio.tistory.com/1745
- https://stitchcoding.tistory.com/13
-

# fs
