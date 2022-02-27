# useState

컴포넌트가 다른 렌더링을 하는 동안 useState는 현재 state를 준다.

사용자가 setState로 state를 갱신할 때, React는 새로운 state를 해당 컴포넌트에 넘기며 해당 컴포넌트를 리렌더링한다.

# useEffect

effect(side effect): 컴포넌트 안에서 데이터를 가져오거나 구독(subscription)하고, dom을 직접 조작하는 작업 등등 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서 구현할 수 없는 작업.

> 네트워크 리퀘스트, DOM수동조작, 로딩 등

react는 두 종류의 effect가 있다. clean up이 필요한 경우와 필요하지 않은 경우.

### 정리(clean up)을 이용하지 않는 effects

useEffect가 하는 일: React 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는지 전달. React는 우리가 넘긴 함수를 기억했다가 DOM 업데이트를 수행한 이후에 불러냄.

useEffect는 렌더링 이후에 매번 수행됨. 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행된다.

React는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장.

### 정리(clean-up)를 이용하는 Effects

외부 데이터에 구독(subscription)을 설정해야하는 경우 같이 메모리 누수가 발생할 수 있는 상황.

effect가 반환하는 함수가 cleanup코드가 됨. 이 점이 구독(subscription)의 추가와 제거를 위한 로직을 가까이 묶어둘 수 있게 함. 구독(subscription)의 추가와 제거가 모두 하나의 effect를 구성하는 것

🔍 참고자료

https://ko.reactjs.org/docs/hooks-overview.html
