# 객체 변경 방지

Javascript의 원시 타입(primitive data type)은 변경 불가능한 값(immutable value)이다.

> Boolean, null, undefined, Number, String, Symbol (New in ECMAScript 6)

원시 타입 이외의 모든 값은 객체(Object) 타입이며 `객체 타입`은 `변경 가능한 값(mutable value)`이다. 즉, 객체는 새로운 값을 다시 만들 필요없이 직접 변경이 가능하다는 것이다.

## 방어적 복사

`Object.assign`

Object.assign은 완전한 deep copy를 지원하지 않는다. 객체 내부의 객체(Nested Object)는 `Shallow copy`된다.

```js
// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }
```

## 불변객체화

`Object.freeze`

읽기만 가능.

## 확장 금지

`Object.preventExtensions`

프로퍼티 추가 금지

## 밀봉

`Object.seal`

읽기와 쓰기만 가능

🔍 참고자료

- 모던자바스크립트 딥 다이브: 16장
- [프로퍼티 플래그와 설명자 - javascript](https://ko.javascript.info/property-descriptors)
