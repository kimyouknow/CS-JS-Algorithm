# 프로퍼티

객체는 프로퍼티의 집합이며, `프로퍼티`는 키와 값으로 구성된다.

프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 `매서드(method)`라고 부른다. (메서드: 객체에 묶여있는 함수)

# 프로퍼티 어트리뷰트

내부 슬롯, 내부 메서드

원칙적으로 `내부 슬롯`은 자바스크립트 엔진의 내부 로직이므로 접근할 수 없지만, 일부 `내부 슬롯`과 `내부 매서드`에 한하여 간접적으로 접근할 수 있는 수단이 있다.

```js
{}.__proto__ // Object.prototype
```

js엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 `프로퍼티 어트리뷰트(property attribute)`를 기본값으로 자동 정의한다.

# 프로퍼티 상태

프로퍼티는 `값(value)`과 함께 `플래그(flag)`라고 불리는 3가지 속성을 갖는다.

플래그:

- 갱신 가능 여부 (`writable`): 수정가능한지
- 열거 가능 여부(`enumerable`): 반복문으로 열거가능한지
- 재정의 가능 여부(`configurable`): 삭제나 수정이 가능한지

`객체 내 프로퍼티 정보 얻기`

```js
// 아래와 같은 방법으로 특정 프로퍼티에 대한 정보를 얻을 수 있다.
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName(키값, 생략할 시 객체 전체의 프로퍼티 정보 제공));
```

`플래스 변경하기`

```js
// 아래와 같은 방법으로 플래그를 변경할 수 있다.
Object.defineProperty(obj, propertyName, descriptor);
// obj, propertyName: 설명자를 적용하고 싶은 객체와 객체 프로퍼티
// descriptor: 적용하고자 하는 프로퍼티 설명자
// defineProperty: 메서드는 객체에 해당 프로퍼티가 있으면 플래그를 원하는 대로 변경
let user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
});
```

# 데이터 프로퍼티와 접근자 프로퍼티

`데이터 프로퍼티`: 키와 값으루 구성된 일반적인 프로퍼티

`접근자 프로퍼티`: 자체적으로 값을 갖지 않고, 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 `접근자 함수로 구성된 프로퍼티`

## 데이터 프로퍼티

위에서 언급한 프로퍼티 상태와 동일.

## 접근자 프로퍼티

- [[Get]]: get, getter함수 호출,
- [[Set]]: set, setter함수 호출
- enumerable: 데이터 프로퍼티와 동일
- configurable: 데이터 프로퍼티와 동일

### getter

`obj.propName`을 사용해 프로퍼티를 읽으려고 할 때 실행

### setter

`obj.propName = value`으로 프로퍼티에 값을 할당하려 할 때 실행

```js
let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = 'Alice Cooper';

alert(user.name); // Alice
alert(user.surname); // Cooper
```

### 활용

실제 프로퍼티 값을 감싸는 wrapper처럼 사용해, 프로퍼티의 값을 통제

```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert(
        '입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.'
      );
      return;
    }
    this._name = value;
  },
};

user.name = 'Pete';
alert(user.name); // Pete

user.name = ''; // 너무 짧은 이름을 할당하려 함
```

🔍 참고자료

- 모던자바스크립트 딥 다이브: 16장
- [프로퍼티 플래그와 설명자 - javascript](https://ko.javascript.info/property-descriptors)
