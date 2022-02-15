# grid

grid-template-columns && grid-template-rows:

    1) 원하는 컬럼을 개별 지정 → grid-template-columns: 20px 30px 40px;

    2) 반복함수 → grid-template-columns: repeat(4, 200px);

- grid template areas && grid-area: layout을 디자인함
  → 빈공간으로 두고 싶으면 grid-template-areas자리에 . 입력
  . grid-area은 /(슬래쉬)로 구분지어 grid-row-start, grid-column-start, grid-row-end, grid-column-end순으로 입력 가능
  grid-template은 grid-template-rows와 grid-template-columns를 조합한 단축 속성
  ![Untitled](https://user-images.githubusercontent.com/71386219/154071617-2c0e5144-f414-48cc-881e-f31f424baf19.png)
- grid-column(row)-start(end)
  → short cut: grid-column(row): 2/4;
  → short cut: grid-column(row): 1 / span 4;
  span을 이용하여 열(column)의 넓이를 지정 - `1번라인에서 4칸
  grid내부의 요소를 이용해 늘리는 방법

      1 [요소] 2 [요소] 3 [요소] 4 [요소] 5 → 요소와 요소 사이의 줄을 기준으로 늘림

  ![Untitled 1](https://user-images.githubusercontent.com/71386219/154071697-70a69256-5da0-4f6a-acf8-26aeba042add.png)
  ![Untitled 2](https://user-images.githubusercontent.com/71386219/154071703-4a747f11-ebbd-4497-b666-1124942e6229.png)

        ### 요소 위치 바꾸기 가능 start위치빼고 end위치만 정해주기

![Untitled 3](https://user-images.githubusercontent.com/71386219/154071706-874c1505-5275-47a9-aa38-0aaf2df6a812.png)

- fr: fraction
  grid에서 사용 가능한 공간만큼 사용가능,
- super short cut: grid-template
  repeat은 사용하지 못함
  [줄이름] 지정가능, / 이후는 열너비지정

![Untitled 4](https://user-images.githubusercontent.com/71386219/154071709-8d56daf7-f2ca-42a6-864e-76bc64cf80b6.png)

- place items:
  - justify-items: 가로축 기준으로, grid의 한칸에서 요소의 위치를 결정
  - align-items: 세로축 기준으로, grid의 한칸에서 요소의 위치를 결정
    ⇒ place-items: 수직 수평;
- place content
  → 전체 grid를 움직이는 방법
  justify-content: 수평
  align-content: 수직
  place-content: 수직 수평
- place items - child
  - align-self
  - justify-self
  - place-self: (수직) (수평);
- grid-auto
  - grid-auto-rows: (크기); 만들어놓은 row보다 더 많은 content가 있으면, 자동으로 row를 만들어라.
  - grid-auto-flow: (방향); [기본값: row] , flex-direction과 비슷하다. row가 끝날 때 새로운 row를 만들지, 새로운 column을 만들지 결정한다.
  - grid-auto-columns: (크기); grid-auto-flow: column;일때 작동한다.
- minmax([최소 크기], [최대 크기])
- auto-fill, auto-fit
  - grid-template-colunms: repeat( auto-fill , auto-fit, minmax(100px, 1fr));
    auto-fill: row에 공간이 남는만큼 빈 열을 채움
    auto-fit: row에 공간이 남지 않도록 기존 열의 너비를 늘림, 남는 column공간을 grid 아이템들의 공간으로 자동으로 채울 수 있습니다.
- min-content, max-content
  - max-content: content의 크기만큼 cell의 크기를 늘린다.
  - min-content: content의 크기를 최대한 줄여 cell의 크기를 줄인다.
    ※ 어떻게 content가 보여야 하는지 디자인하는 것이다.
    ※ repeat(), minmax와 결합하여 반응형 디자인을 만들 수 있다.

예시

```css
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  gap: 5px;
  background-color: black;
  border: 5px solid black;
  border-top: 0;
}
```
