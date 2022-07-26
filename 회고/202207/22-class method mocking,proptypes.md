# 20220722

<details>
<summary>시간대별 정리</summary>

### 아침

회고작성

### 오전

typescript es6 클래스 jest로 mocking하기

### 오후

spyOn으로 object 메서드 Mocking하기
swagger 자동으로 연동하기

### 저녁

vanillajs react - proptypes 관리

</details>
<br>

# 개인공부

## es6 class mocking

연결리스트를 구현하면서 TDD를 하다가 es6 Class를 mocking하는 방법을 찾아봤다.

js환경에서는 어렵지 않게 동작하지만 ts환경에서 타입관련 오류와 모듈관련한 번거로운 상황(named export)이 발생해서 어려움을 겪었다.

공식문서에서 설명한 다양한 방법이 있지만 그냥 `spyOn`을 사용하는 방법을 택했다.

```tsx
// class의 인스턴스 mocking
import { SoundPlayer } from './app';

test('playSoundFile', () => {
  const soundPlayer = new SoundPlayer();
  const spy = jest
    .spyOn(soundPlayer, 'playSoundFile')
    .mockImplementation((a: string) => {});
  const playSoundFile = soundPlayer.playSoundFile('music');
  expect(soundPlayer.playSoundFile).toBeCalledWith('music');
});

// class 자체를 mocking
import { SoundPlayer } from './app';

beforeAll(() => {
  jest
    .spyOn(SoundPlayer.prototype, 'playSoundFile')
    .mockImplementation((a: string) => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('instance', () => {
  const soundPlayer = new SoundPlayer();
  expect(soundPlayer).toBeInstanceOf(SoundPlayer);
});

test('playSoundFile', () => {
  const soundPlayer = new SoundPlayer();
  const playSoundFile = soundPlayer.playSoundFile('music');
  expect(soundPlayer.playSoundFile).toBeCalledWith('music');
});
```

그런데 생각해보니 굳이 mocking해야하나? test코드에서 인스턴스를 만들고 인스턴스의 메서드를 마치 순수함수 test하는 것처럼 사용해도 될 것 같다는 생각이 들었다.

# 코넥트

바닐라 자바스크립트로 리액트 컴포넌트를 구성하면서 proptypes를 적용하고 있었다. 컴포넌트에서 사용하는 props의 타입을 코드하면서 알 수 있게 컴포넌트 상단에 다음과 같이 사용했다.

```jsx
CardsGrid.propTypes = {
  CardComponent: PropTypes.func.isRequired,
  CardInfo: PropTypes.shape({
    img: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  clickLink: PropTypes.string,
};

export default function CardsGrid({ CardComponent, cards, clickLink }) {}
```

하지만 컴포넌트마다 반복되는 데이터 타입(가령 유저나 게시글의 데이터 타입)을 일일히 지정하기 번거로웠다. API 명세가 변경되어 데이터 타입이 변경되면 해당 데이터를 사용하는 컴포넌트를 하나하나 찾아서 변경해야했다. 이런 불편한점을 해결하기 위해 중앙집중적으로 관리하는 방법이 없을까 고민했다.

타입스크립트를 쓰면 간단히 해결될 수 있는 문제지만 현재 프로젝트에서 바닐라 자바스크립를 사용해서 바닐라 자바스크립트로 해결할 수 있는 방법을 고민했다.

우선 데이터 타입에 대한 코드를 분리해서 관리하면 좋겠다는 생각에 `centralized proptypes`라는 키워드로 검색해보니 다양한 해결책을 찾을 수 있었다.

몇몇 컴포넌트에는 적용했지만 아직 모든 컴포넌트에 적용하지 못한 상태인데 월요일날 마저 마무리해야겠다.
