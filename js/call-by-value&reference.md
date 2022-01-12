ES2015에 추가된 기능중, default parameter 와 rest parameter는 무엇인가? 알아본다.

call by value, call by reference의 차이를 이해한다.

참고:

- https://velog.io/@leo-xee/JS-Call-by-value-reference
- 모던 자바스크립트 Deep Drive 이웅모

> ## 기본 값과 객체의 비교

- js는 7가지 데이터 타입을 제공한다.
  (숫자, 문자열, 불리언, null, undefined, 식별, 객체 타입)
  7가지 데이터 타입은 크게 `기본 타입(primitive type)`과 `객체 타입(object/reference type)`으로 구분할 수 있다.
  기본 타입과 객체 타입은 크게 3가지 측면에서 다르다.

1. `기본` 타입의 값은 `변경 불가능한 값(immutable value)`이다. `객체(참조)` 타입의 값은 `변경 가능한 값(mutable value)`이다. [추가 설명: variable-value](#variable-value)

2. `기본` 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 `실제 값이 저장`된다. `객체`를 변수에 할당하면 변수(확보된 메모리 공간)에는 `참조 값이 할당`된다.

3. `기본` 값을 갖는 변수를 다른 변수에 할당하면 `원본의 기본 값이 복사`되어 전달된다(값의 전달: `pass by value`). `객체`를 가리키는 변수를 다른 변수에 할당하면 `원본의 참조 값이 복사`되어 전달된다(참조에 의한 전달: `pass by reference`).

> ## call by value

- 값의 복사, 말 그대로 복사된 값을 인자(argument)로 받아서 매개변수(parameter)로 전달.
- 기본형(Primitve type)의 경우 call by value
- 불변성을 갖는 기본형을 할당한 변수는 재할당 이외에 변수 값을 변경할 수 있는 방법이 없다.

```javascript
let a = 10;
let b = a; // b에는 a 변수의 값인 10할당

console.log(a); //10
console.log(b); //10

a = 100; // a에 새로운 값을 재할당

console.log(a); //100
console.log(b); //10
// a 변수와 b변수의 값은 다른 메모리 공간에 저장된 별개의 값. a를 변경해도 b에 영향을 주지 않음.
```

> ## Call by reference

- 객체(Obj): array, objet, function ,,,)는 call by reference 방식
- 실제 데이터가 존재하는 주소를 가리키고 있는 주소 값을 인자로 넘겨서 매개변수로 전달. 즉, 객체를 가리키는 변수(원본)를 다른 변수(사본)에 할당하면 `원본의 참조 값`이 복사되어 전달.
  [추가설명: 객체 할당](#assign-obj)

```javascript
const person = {
  name: "도리",
};
const copy = person;

// 동일한 객체 참조
console.log(copy === person); // true

copy.name = "윤";

person.age = 26;

// 동적으로 접근 가능.
console.log(person); // {name: '윤', age: 26}
console.log(copy); // {name: '윤', age: 26}
```

> ## js는 항상 **Call by value**

- 결론적으로 `값에 의한 전달`과 `참조에 의한 전달`은 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면에서 동일하다. 다만 식별자가 기억하는 메모리 공간, 즉 변수에 저장되어 있는 값이 원시 값이냐 참조 값이냐의 차이만 있다.

```javascript
const person1 = {
  name: "윤",
};

const person2 = {
  name: "윤",
};

console.log(person1 === person2); // false: 내용은 같지만 다른 메모리에 저장된 서로 다른 객체
console.log(person1.name === person2.name); // true name프로터티로 접근하여 값으로 평가할 수 있는 표현식.
```

> ## variable-value

- `변수(varibale)`: 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위한 이름

- `값(value)`: 변수에 저장된 데이터로서 표현식이 평가되어 생성된 결과

- 변경불가능하다는 것은 변수가 아닌 값에 대한 진술이다. 기본 값 자체를 변경할 수는 없지만 변수 값은 변경할 수 있다. 변수는 재할당을 통해 언제든지 변경가능하다.

```javascript
const v1 = 1;
const o = {};

// v1 = 2 -> TypeError: Assignment to constant variable.
o.a = 1;
console.log(o); // {a:1}

// const 키워드를 사용해 선언한 변수에 할당한 기본 값은 변강할 수 없지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경 할 수 있다.
```

> ## assign-obj

- 객체를 할당한 변수는 재할당 없이 객체를 직접 변경가능. 재할당 없이 프로퍼티를 동적으로 추가할 수 있고, 프로퍼티 값을 갱신, 프로퍼티 자체를 삭제할 수 있다.
- 기본형과 다르게 여러 개의 식별자가 하나의 객체를 공유할 수 있다.

```javascript
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되며, 그 결과 객체가 생성됨.
const person = {
  name: "윤",
};
// pserson 변수에 저장되어 있는 참조 값으로 실제 객체에 접근.
console.log(person); // {name: "윤"}
```
