# React로 Potal을 활용해 Modal Component 만들기

### 키워드

> ReactDOM.createPortal, 이벤트 버블링, stopPropagation, react keyDown, tabIndex, 키보드 포커스 관리

📌 목차

1. [✔ 폴더구조](#✔-폴더구조)
2. [🔍 설명](#🔍-설명)
3. [❗ 에러](#❗-에러)
4. [✏ 코드 예시](#✏-코드-예시)

## ✔ 폴더구조

```bash
├── components
│   ├── ModalWrapper
│   │     └── index.jsx
│   ├── Potal
│         └── index.jsx
├── pages
│   └── Main
│       └── dataset.py
└── pageckage.json
```

## 🔍 설명

### ReactDOM.createPortal(child, container)

- Portal은 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공
- 즉, 외부에 존재하는 DOM 노드가 React App DOM 계층에 존재하는 것 처럼 연결
- `child`: 엘리먼트, 문자열, 혹은 fragment와 같은 어떤 종류이든 `렌더링할 수 있는 React 자식`
- `container`: DOM 엘리먼트
  public의 index.html에 아래와 같이 코드 추가
  ```html
  <div id="root"></div>
  <div id="modal"></div>
  ```

### stopPropagation

1. x버튼을 눌렀을 때 모달창이 종료되는 이벤트

2. 모달창 바깥을 눌렀을 때도 모달창이 종료되는 이벤트

- 모달의 background부분에 onClick 이벤트로 onCloseModal을 설정하면 되는줄 알았는데, `이벤트 버블링`으로 인해 `background 안에 있는 container`를 눌러도 모달창이 닫힘.
- `background 안에 있는 container`에는 background부분에서 설정한 이벤트가 퍼지지 못하도록 `e.stopPropagation` 설정

```js
const stopPropagation = useCallback((e) => {
  e.stopPropagation();
}, []);
<ModalWrapper onClick={onCloseModal}>
  <ModalContainer onClick={stopPropagation}>
    <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
    {children}
  </ModalContainer>
</ModalWrapper>;
```

## ❗ 에러

### keyDown & tabIndex

eslint 관련 설정 `click-events-have-key-events`에서 `onClick`을 사용할 때 마우스를 사용할 수 없는 상황이 있을 수도 있으니 `key`관련 이벤트도 설정해야 한다는 주의를 주고 있다.

하지만 div element에 `onKeyDown={handleKeyEsc}`를 설정했을 때, 작동하지 않았다. [stackoverflow 링크](https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react)를 참고해서 문제를 해결했다.

1. tabIndex 활용

아직 명확히 이해하지 못했다. 추가 학습이 필요하다.

2. react 공식문서

[react 공식문서](https://ko.reactjs.org/docs/accessibility.html#programmatically-managing-focus)에 따르면 `portal을 이용하여 작업할 때 키보드 포커스 관리가 매우 중요하다는 것을 염두에 두세요`이라고 주의를 주고 있다. 이를 활용해 문제를 해결하나? 추가 학습이 필요하다.

## ✏ 코드 예시

### Potal

```jsx
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function Potal({ children }) {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: "";  top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  // id가 modal인 DOM 노드에 모달 창을 render합니다.
  const rootElement = document.getElementById("modal");
  return createPortal(children, rootElement);
}
Potal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Potal;
```

### Main

```jsx
import Modal from "components/Modal";
import React, { useCallback, useState } from "react";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  const openModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);
  return (
    <div>
      <h1>Main</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} onCloseModal={onCloseModal}>
        <div>
          <h1>this is modal</h1>
          <p>modal content</p>
        </div>
      </Modal>
    </div>
  );
}

export default Main;
```

### ModalWrapper

```jsx
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Potal from "components/Potal";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
`;

const ModalContainer = styled.div`
  margin-top: 200px;
  display: inline-block;
  width: 440px;
  background: white;
  border: 1px solid black;
  z-index: 1012;
  position: relative;
`;

const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

function Modal({ children, show, onCloseModal }) {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  const handleKeyEsc = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onCloseModal();
      }
    },
    [onCloseModal]
  );
  if (!show) {
    return null;
  }
  return (
    <Potal>
      <ModalWrapper
        onClick={onCloseModal}
        onKeyDown={handleKeyEsc}
        tabIndex={0}
      >
        <ModalContainer onClick={stopPropagation}>
          <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
          {children}
        </ModalContainer>
      </ModalWrapper>
    </Potal>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
```

🔍 참고자료

- https://ko.reactjs.org/docs/portals.html
- YouTube 제로초 react 무료강의
- https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex
- https://ko.reactjs.org/docs/accessibility.html#programmatically-managing-focus
