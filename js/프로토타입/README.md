# prototype(프로토타입)

js의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 `Prototype(프로토타입)`이라 한다.

> 프로토타입은 생성자 함수에 의해 생성된 객체에 공유 프로퍼티를 제공하기 위해 사용된다.

# 용어정리 및 개념 요약

> [[Prototype]]이 참조하는 객체를 '프로토타입’이라고 한다.
> 객체에서 프로퍼티를 읽거나 메서드를 호출하려는데 해당하는 프로퍼티나 메서드가 없으면 자바스크립트는 프로토타입에서 프로퍼티나 메서드를 찾는다.

### [[Prototype]]

- 함수를 포함한 모든 객체가 가지고 있는 `인터널 슬롯`이다.
- 객체의 입장에서 자신의 부모 역할을 하는 `프로토타입 객체`를 가리키며 함수 객체의 경우 `Function.prototype`를 가리킨다

### prototype 프로퍼티

- `함수 객체`만 가지고 있는 프로퍼티이다.
- `생성자 함수`가 사용가능하고, `프로토타입의 참조`를 값으로 갖는다.
- 생성자 함수가 자신이 생성할 인스턴스의 프로토타입을 할당하기 위해 사용
- 함수 객체가 `생성자`로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(`프로토타입 객체`)를 가리킨다.
- 생성자 함수를 new를 사용해 호출할 때만 적용
- 일반 객체엔 "prototype" 프로퍼티를 추가해도 아무런 일이 일어나지 않는다.

### \_\_proto\_\_ 프로퍼티

- `모든 객체`가 가지고 있는 프로퍼티
- `모든 객체`가 사용가능하고, `프로토타입의 참조`를 값으로 갖는다.
- 객체가 프로토타입에 접근 또는 교체하기 위해 사용
- [[Prototype]]용 getter·setter (`접근자`)
- 하위 호환성 때문에 여전히 \_\_proto\_\_를 사용할 순 있지만 비교적 근래에 작성된 스크립트에선 \_\_proto\_\_ 대신 함수 `Object.getPrototypeOf`나 `Object.setPrototypeOf`을 써서 프로토타입을 획득(get)하거나 설정(set).

### constructor 프로퍼티

- 모든 프로토타입은 constructor 프로퍼티를 갖는다.
- 객체의 입장에서 자신을 생성한 객체를 가리킨다.

# [[Prototype]]과 \_\_proto\_\_

모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지며, 이 내부 슬롯(숨김 프로퍼티) 값은 `다른 객체에 대한 참조` 또는 `null`이다. 다른 객체를 참조하는 경우 참조 대상을 `프로토타입`이라고 부른다.

객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.

또한 모든 객체는 `\_\_proto\_\_` 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 `[[Prototype]]` 내부 슬롯에 간접적으로 접근할 수 있다.

```js
const dori = { name: 'dori' };
console.log(dori.__proto__);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*)

// 프로퍼티 eats과 jumps를 rabbit에서도 사용할 수 있게 되었습니다.
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true

// (*)로 표시한 줄에선 animal이 rabbit의 프로토타입이 되도록 설정하였습니다.
// (**)로 표시한 줄에서 alert 함수가 rabbit.eats 프로퍼티를 읽으려 했는데, rabbit엔 eats라는 프로퍼티가 없습니다. 이때 자바스크립트는 [[Prototype]]이 참조하고 있는 객체인 animal에서 eats를 얻어냅니다. 다음 그림을 밑에서부터 위로 살펴보세요.
```

# 프로토타입 체인

> 모든 객체는 프로토타입의 계층 구조인 프로토타입 체인으로 묶여 있다. js엔진은 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 \_\_proto\_\_ 접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모 역할을 하는 프로퍼티를 순차적으로 검색한다.

# 상속과 프로토타입

`상속`은 객체지향 프로그래밍의 핵심개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.

> js는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.

```js
function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

const 도리 = new Person('dori');
const 찌미 = new Person('찌미');

console.log(도리.getName === 찌미.getName); // false

function Person_proto(name) {
  this.name = name;
}

// 프로토타입 Person_proto로부터 getName이라는 메서드를 상속 받는다.
// Person_proto 생성자 함수로 생성한 모든 인스턴스는 하나의 getName메서드를 공유한다.
Person_proto.prototype.getName = function () {
  return this.name;
};

const 도리 = new Person_proto('dori');
const 찌미 = new Person_proto('찌미');

console.log(도리.getName === 찌미.getName); // true
```

# 내장 객체의 프로토타입

> Array, Date, Function을 비롯한 내장 객체들 역시 프로토타입에 메서드를 저장해 놓는다.

# 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인

> 객체 생성방법: 객체 리터럴, 생성자 함수, Object()생성자 함수

`객체 리터럴 방식`으로 생성된 객체는 결국 내장 함수(Built-in)인 Object() 생성자 함수로 객체를 생성하는 것을 단순화시킨 것.

Object() 생성자 함수는 함수이기 때문에 함수 객체인 Object() 생성자 함수는 일반 객체와 달리 prototype 프로퍼티가 있다.

# 생성자 함수에 의해 생성된 객체의 프로토타입

> 함수 정의하는 방식: 함수 선언식, 함수 표현식, Function() 생성자 함수

결국 `함수선언식`, `함수표현식` 모두 함수 리터럴 방식을 사용한다. 함수 리터럴 방식은 Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것. 즉, `3가지 함수 정의 방식`은 결국 `Function() 생성자 함수를 통해 함수 객체를 생성`한다, 따라서 어떠한 방식으로 함수 객체를 생성하여도 모든 함수 객체의 prototype 객체는 Function.prototype이다.

🔍 참고자료

- 모던자바스크립트 딥 다이브: 19장
- [프로토타입 - poiemaweb](https://poiemaweb.com/js-prototype)
- [프로토타입과 프로토타입 상속 - javascript](https://ko.javascript.info/prototypes)
- [[10분 테코톡] 💼 크리스의 Prototype](https://www.youtube.com/watch?v=RYxgNZW3wl0)
