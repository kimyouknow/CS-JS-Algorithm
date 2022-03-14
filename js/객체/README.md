# 객체란?

> 자바스크립트는 객체 기반의 스크립트 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체다. 원시 타입을 제외한 나머지 값들은 모두 객체다.

객체는 중괄호 {…}를 이용해 만들 수 있다. 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 `프로퍼티(property)` 를 여러 개 넣을 수 있는데, `키`엔 `문자형`, `값`엔 `모든 자료형`이 허용된다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부른다.

# 객체 생성 방법

## 객체 리터럴

> 객체 리터럴 방식으로 생성된 객체는 결국 빌트인(Built-in) 함수인 `Object 생성자 함수`로 객체를 생성하는 것을 단순화시킨 `축약 표현(short-hand)`이다

```js
const tempObj = {};
const user = {
  nickname: 'dori',
  sayHi: function () {
    conosle.log('hi');
  },
};
```

## Object 생성자 함수

> `생성자함수`란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Array, Date, RegExp 등의 빌트인 생성자 함수를 제공

new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성.

```js
const user = new Object();

user.nickname = 'dori';
user.sayHi = function () {
  conosle.log('hi');
};
```

## 생성자 함수

객체 리터럴 방식이 간단하긴 하지만 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 동일한 프로퍼티를 갖는 객체임에도 매번 같은 프로퍼티를 기술해야 하는 문제점이 있다.

> 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```js
function User(name) {
  const age = 100; // private
  this.name = name; // public
  this.sayHi = function () {
    // public
    conosle.log('hi', this.name);
  };
}
const user1 = new User('dori');
const user1 = new User('찌미');
```

- 프로퍼티 또는 메소드명 앞에 기술한 `this`는 생성자 함수가 생성할 `인스턴스(instance)`를 가리킨다.
- `this에 연결(바인딩)되어 있는 프로퍼티와 메소드`는 `public`(외부에서 참조 가능)하다.
- 생성자 함수 내에서 선언된 `일반 변수`는 `private`(외부에서 참조 불가능)하다. 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 없다.

## 생성자 함수의 인스턴스 생성 과정

this에 프로퍼티를 추가하고, 필요에 따라 전달된 인수를 프로퍼티의 초기값으로 할당하여 인스턴스 초기화

자바스크립트는 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.

1. 인스턴스 생성과 this 바인딩

- 암묵적으로 빈 객체(인스턴스)가 생성되고 this에 바인딩 된다.

2. 인스턴스 초기화

- this에 바인딩되어 있는 인스턴스를 초기화

3. 인스턴스 반환

- this에 바인딩되어 있는 인스턴스가 암묵적으로 반환된다.
- 명시적으로 객체를 반환하면 암묵적인 this반환이 무시된다.(따라서, 생성자 함수 내부에서 return 문을 반드시 생략해야한다.)

```js
function Circle(radius) {
  // 1. 암묵적으로 빈 객체(인스턴스)가 생성되고 this에 바인딩 된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 암묵적으로 this를 반환
  // return {} 처럼 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
}
```

# 내부 매서드 [[Call]]과 [[Construct]]

함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. (함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 매서드를 모두 가짐). 하지만 `일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.` 함수는 일반 객체와 다르게 함수 객체를 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를 추가적으로 가지고 있다.

### Callable

- 호출할 수 있는 객체
- 내부 매서드 [[Call]]을 갖는 함수 객체

### constructor

- 생성자 함수로 호출할 수 있는 함수
- 내부 매서드 [[Construct]]을 갖는 함수 객체
- 함수 선언문, 함수 표현식, 클래스

### non-constructor

- 생성자 함수로 호출할 수 없는 함수
- 내부 매서드 [[Construct]]을 갖지 않은 함수 객체
- 매서드(es6축약표현), 화살표 함수

![image](https://user-images.githubusercontent.com/71386219/158087967-f7400a1f-6017-4b59-91e2-a35e3a4d2e49.png)

🔍 참고자료

- 모던자바스크립트 딥 다이브: 17장
- [객체: 기본 - javascript](https://ko.javascript.info/object-basics)
- [객체 - poiemaweb](https://poiemaweb.com/js-object)
