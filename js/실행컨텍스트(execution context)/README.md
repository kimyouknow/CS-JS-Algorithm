# 실행 컨텍스트

> 실행컨텍스는(execution context)는 js동작원리를 담고 있는 핵심개념이다. 실행컨텍스트를 바르게 이해하면 js가 스코프를 기반으로 식별자와 식별자에 바인딩 된 값(식별자 바인딩)을 관리하는 방식, 스코프, 호이스팅, 클로져 그리고 테스크 큐와 함께 동작하는 이벤트 핸들러와 비동기 처리의 동작 방식을 이해할 수 있다.

`코드를 실행하는데 필요한 환경을 제공하는 객체`

스코프가 어디에 선언되어있느냐에 따라 정적으로 결정되고, 하나의 컨텍스트 개념으로 묶어놨기 때문에 더욱 빠르고 효율적으로 식별자를 결정할 수 있음.

다시 말해, 식별자의 값을 정할 때 다른 메모리를 참조할 필요 없이 실행 컨텍스만 보고 결정할 수 있음.

## 📍 소스코드의 타입

전역 코드: 전역에 존재하는 코드, 전역에 정의된 함수, 클래스 등의 내부코드는 포함 x
함수코드: 함수 내부에 존재하는 코드, 내부 중첩 함수, 클래스 등의 내부코드 포함x
eval코드: eval함수로 실행되는 코드
모듈 코드: 모듈 내부에 존재하는 소스코드, 모듈 내부 함수, 클래스등의 내부 코드 포함x

각 소스코드의 탑에 따라 실행 컨텍스트를 생성하는 과정이 다르다.

1. 전역코드

- 전역 변수를 관리하기 위해 최상위 스코프인 전역 스코프 생성
- 전역 코드가 평가되면 전역 실행 컨텍스트가 생성

2. 함수 코드

- 지역 스코프를 생성
- 지역 변수, 매개변수. argument객체 관리
- 생성한 지역 스코프를 전역 스코프에서 시작하는 스코프 체인의 일원으로 연결

3. eval 코드

- stict mode에서 독자적인 스코프가 생성.

4. 모듈 코드

- 모듈별로 독립적인 모듈 스코프 생성
- 모듈 실행 컨텍스트 생성

## 📍 실행 컨텍스트의 3가지 객체

![excute_context_structure](https://user-images.githubusercontent.com/71386219/156690830-24fbdba3-e805-4938-ac36-c45c751060c7.png)

### Variable Object

변수, 매개변수, 인수 정보(arguments), 함수 선언(함수표현식은 제외)과 같은 정보를 담고 있는 객체

`전역 컨텍스트의 경우`: Variable Object는 `유일`하며 `최상위에 위치`하고 모든 전역 변수, 전역 함수 등을 포함하는 전역 객체(`Global Object` / GO)를 가리킨다. 전역 객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유

`함수 컨텍스트의 경우`: 활성화 객체(`Activation Object` / AO)를 가리키며 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가

### Scope Chain

`일종의 리스트`: 전역 객체와 중첩된 함수의 스코프의 레퍼런스를 차례로 저장

스코프 체인은 해당 전역 또는 함수가 참조할 수 있는 변수, 함수 선언 등의 정보를 담고 있는 전역 객체(GO) 또는 활성 객체(AO)의 리스트를 가리킨다.

`현재 실행 컨텍스트의 활성 객체(AO)`를 선두로 하여 `순차적`으로 `상위 컨텍스트의 활성 객체(AO)`를 가리키며 마지막 리스트는 `전역 객체(GO)`를 가리킨다.

> `스코프 체인`은 식별자 중에서 객체(전역 객체 제외)의 프로퍼티가 아닌 식별자, 즉 `변수를 검색하는 메커니즘`이다.
> 식별자 중에서 변수가 아닌 `객체의 프로퍼티(물론 메소드도 포함된다)를 검색하는 메커니즘`은 `프로토타입 체인`(Prototype Chain)이다.

### thisValue

this 프로퍼티에는 this 값이 할당된다. this에 할당되는 값은 함수 호출 패턴에 의해 결정

## 📍 실행 컨텍스트의 구성

실행 컨텍스트를 구성할 떄 생기는 것들

### `Variable Environment`

- 현재 컨텍스트 내의 식별자(변수)들에 대한 정보
- 외부 환경 정보
- 선언 시점의 LexicalEnvironment의 스냅샷(변경사항 반영 X)
- VariableEnvironment에 담기는 내용은 LexicalEnvironment와 같지만, `최초 실행 시의 스냅샷을 유지`한다.
- 실행 컨텍스트를 생성할 때 VariableEnvironment에 정보를 먼저 담은 다음, 이를 `복사`해서 LexicalEnvironment를 만든다.

### 💡 `Lexical Environment` (렉시컬 환경)

> 아래 Execution stack이 코드의 실행 순서를 관리한다면lexical environment는 `스코프`와 `식별자`를 관리한다.

- 처음에는 VariableEnvironment와 같음
- 변경 사항이 실시간으로 반영됨
- 식별자와 식별자에 바인딩 된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로, 실행컨텍스트를 구성하는 컴포넌트
- 키와 값을 갖는 객체 형태의 스코프(전역, 함수, 블록 스코프)를 생성하여 식별자를 키로 등록하고 식별자에 바인딩된 값을 관리한다.

구성 (⭐️표시는 문서 맨 아래를 참고하기)

- ⭐️ `Environmnet Record`: Lexical Environment안에 `함수와 변수 선언을 저장하는 곳` (스코프에 포함된 식별자를 등록, 등록된 식별자에 바인딩된 값을 관리하는 저장소). 2가지 종류가 있음

  - `Declarative environment record` (선언적 환경 레코드) — 이름에서 알 수 있듯이 `변수 및 함수 선언을 저장`. 함수 코드에 대한 어휘 환경은 선언적 환경 레코드를 포함
  - `Object environment record` (개체 환경 레코드) — 전역 코드에 대한 어휘 환경에는 객관적인 환경 레코드가 포함. 변수 및 함수 선언 외에도 개체 환경 레코드는 `전역 바인딩 개체(브라우저의 창 개체)도 저장`. 따라서 바인딩 개체의 각 속성(브라우저의 경우 브라우저에서 창 개체에 제공하는 속성 및 메서드 포함)에 대해 새 항목이 레코드에 생성

- ⭐️ `Outer Lexical Environment Reference`: `상위 스코프`를 가리킨다. js엔진이 현재 렉시컬 환경에서 변수를 찾지 못하면 외부 환경에서 해당 변수를 찾도록 함 =>` 스코프 체이닝을 가능`하게 한다.

- `This binding`: this의 값 할당 결정, 전역 실행 컨텍스트에서는 window를 가르킴

`ThisBinding`

- 식별자가 바라봐야 할 대상 객체

## 📍 Execution Stack (실행 컨텍스트 스택)

> 코드의 실행 순서를 관리

js엔진은 script요소를 처음으로 만나는 시점에서 global execution context를 생성하고 execution stack에 push함. 그리고 엔진이 함수 호출을 찾을 때마다 해당함수에 대한 새로운 실행 컨텐스트를 생성해 execution stack에 push함.

js엔진은 실행 컨텍스트가 스택에 맨 위에 있는 함수를 실행한 뒤 함수가 종료되면 스택에서 제거한 뒤 호출 스택은 최신화된 스택에서 맨위의 컨텍스트를 이전과 동일한 로직으로 접근

따라서, 콜 스택에서는 가장 최근에 추가된 실행 컨텍스트만 활성화된다.

![스크린샷 2022-03-04 오후 3 10 40](https://user-images.githubusercontent.com/71386219/156709581-94539afd-716f-451c-bf89-6773491b6259.png)

## 📍 실행 컨텍스트 생성 로직

실행 컨텍스트는 Creation과 Execition의 두 단계로 생성

### 1. Creation Phase

- js엔진이 함수를 호출했지만 실행이 시작되지 않은 단계
- `Lexical Environment`와 `Variable Environment`의 정의가 이뤄짐.
- thisBinding과 outer Refercence를 결정
- Environment record에 변수 식별자에 대한 메모리가 매핑되어 값의 할당은 선언 방식에 따라 다르게 이뤄짐.

### 2. Execution Phase

- 코드를 위에서부터 읽으면서 실행.
- 각각의 변수 할당이 실행
- 함수가 호출되는 시점에서 새로운 함수 실행 컨텍스트는 함수 코드를 실행
- 함수 내부의 변수들에 할당

[실행 컨텍스트와 자바스크립트의 동작 원리 - poiemaweb](https://poiemaweb.com/js-execution-context) 예시 참고

# ⭐️ 호이스팅과 스코프 체이닝 이해

1. 호이스팅 이해: Environmnet Record를 이해해야함

생성단계 (Create Phase): Execution Context 생성, 선언문만 실행해서 Environmnet Records 기록

실행 단계 (Execution Phase): 선언문 외 나머지 코드 순차적으로 실행, Environmnet Record 참조하거나 업데이트

2. 스코프 체이닝 이해: Outer Lexical Environment Reference를 이해야하함

현재 활성화된 실행 컨텍스트는 하나이지만 이전 렉시컬 환경을 가리키는 Outer Lexical Environment Reference를 타고 이동할 수 있기 때문에 현재 활성화된 실행 컨텍스트에 해당 식별자가 없다면 제일 상위 실행 컨텍스트까지 식별자를 찾아감 (스코프 체이닝)

🔍 참고자료

- 모던 딥 다이브 23장 실행컨텍스트
- [[10분 테코톡] 💙 하루의 실행 컨텍스트](https://www.youtube.com/watch?v=EWfujNzSUmw)
- [실행 컨텍스트와 자바스크립트의 동작 원리 - poiemaweb](https://poiemaweb.com/js-execution-context)
- [자바스크립트 실행 컨텍스트 - 개발자 황준일 블로그](https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/#_1-개념)
- [실행 컨텍스트와 자바스크립트의 동작 원리 - catsbi.oopy.io](https://catsbi.oopy.io/fffa6930-ca30-4f7e-88b6-28011fde5867)
- -[Understanding Execution Context and Execution Stack in Javascript](http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/#declarative-environment-record)
