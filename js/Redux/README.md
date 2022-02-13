# Redux 정리

redux 공식문서 번역 및 추가 공부내용 정리

# Redux란

`예측가능한 상태의 저장소` - A predicatable state container for JS apps.

- Apllication의 복잡성을 획기적으로 낮추어 우리의 코드가 어떤 결과를 가져올지 예측가능하게 만들어주는 도구라고 할 수 있다.

## Redux Terms and Concepts

1. State Mangement (상태관리)

- `state`: 앱을 구동하는 근원(source)
- `view`: 현재 상태를 기반으로 하는 UI의 선언적 설명(declarative description)
- `actions`: 사용자 입력에 따라 발생하는 이벤트 및 상태에서 업데이트를 트리거

2. One way data flow

- state는 특정 시점의 앱 상태를 나타냄
- UI는 해당 상태를 기반으로 렌더링
- 사용자가 버튼을 클릭하는 것과 같은 이벤트가 발생하면 발생한 상황에 따라 업데이트
- UI는 새 상태를 기반으로 렌더링
- 아래 사진과 같은 단순한 구조는 동일한 상태를 공유하고 사용해야 하는 여러 구성 요소가 있는 경우 무너질 수 있다. 이를 해결하기 위한 방법 중 하나로 구성 요소에서 공유 상태를 추출하여 구성 요소 트리 외부의 중앙 위치에 두는 것이 있다.

![one-way-data-flow](https://ko.redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

![data-flow](https://ko.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

3. Immutability

- Js의 Object와 Array는 mutable(변화가능)하다. 메모리에 있는 동일한 object 또는 array를 참조하지만 내부 값은 변경될 수 있다.
- 값을 변경할 수 없도록 업데이트하려면 코드에서 `기존 object와 array의 복사본을 만든 다음 복사본을 수정`해야한다.

```js
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3,
  },
  b: 2,
};

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42,
  },
};

const arr = ['a', 'b'];
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c');

// or, we can make a copy of the original array:
const arr3 = arr.slice();
// and mutate the copy:
arr3.push('c');
```

# Terminology - 용어(술어)

1. Actions

- 일반 JS object로 , `application에서 발생한 일을 설명하는 이벤트`라고 생각하면 된다.
- `type`: 해당 action에 대한 설명적인 이름을 제공
- `payload`: action object에서 발생한 상황에 대한 추가 정보가 들어 있음.

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk',
};
```

2. Action Creators

- `action object를 만들고, 리턴하는 함수`
- 이 함수를 통해 해당 action을 사용할 때마다 직접 작성할 필요가 없어짐.

```js
const addTodo = (text) => {
  return {
    type: 'todos/todoAdded',
    payload: text,
  };
};
```

3. Reducers

- `현재 state와 action object를 받아서`, 필요한 경우 state를 업데이트하고, 새`로운 state를 반환하는 함수`.
- 오직 state와 action 인자 값을 기반으로 새로운 state를 다뤄야함.
- 현재 state를 직접 다루지 않고, `현재 state의 복사값을 다뤄 새로운 state를 리턴`한다.
- 비동기 로직, 임의 값 계산 등 기타 side effect를 일으키지 않아야 한다.

```js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
```

4. Store

- redux의 `state는 store라는 객체이 있다.`
- store는 `reducer를 전달`하며, 현재 state를 반환하는 getState 메서드가 있음.
- 일종의 `이벤트 트리거`

```js
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());
// {value: 0}
```

5. Dispatch

- redux 저장소 안의 `메서드`
- `상태를 변경하는 유일한 방법`은 store.disaptch()를 호출하고, 작업 객체를 전달하는 것.

```js
store.dispatch({ type: 'counter/increment' });

console.log(store.getState());
// {value: 1}
```

6. Selectors

- redux 저장소에서 현재 `state값에 특정 정보를 추출`하는 함수

```js
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2
```

🔍 참고자료

- [Redux 시작하기](https://ko.redux.js.org/introduction/getting-started/)
