# flexbox

# container(박스)에 적용되는 속성 값이 존재 + 박스 안 아이템(요소)들에 적용되는 속성 값이 존재

## container;

`display`

- container를 flexbox로 지정하는 방법; display: flex;

`flex-direction`

- 메인 축을 정함
- 속성: row, row-reverse, column, column-reverse

`flex-wrap`

- flexbox는 item을 모두 같은 줄에 있도록 유지할려고함
- wrapping을 하면 사이즈를 줄였을 때 다른 줄로 넘어감
- 속성: nowrap(default), wrap, wrap-reverse

`flex-flow`

- direction이랑 wrap이랑 합친 것

`justify-content`

- 중심축에서 아이템을 어떻게 배치할 것인지 결정;
- 속성: flex-start, flex-end, center, space-between, space-around

`align-items`

- 반대축에서 아이템 위치를 결정, baseline
- 속성: stretch(default). flex-start, flex-end, center, baseline,

`align-content`

- 반대축에서 아이템 사이 간격(배치)를 변경
- 속성: stretch(default), flex-start, flex-end, center, space-between, space-around,

## item

`order`

- 각각 아이템의 순서를 정함
- html은 바뀌지 않음, order의 기본값은 0 ⇒ 새롭게 order를 준 요소만 order값에 따라 뒤로 빠짐

`flex-grow`

- container가 커졌을 때 아이템들이 크기를 지정
- 속성: flex-grow: 1; - flex-grow: 0; - 남아있는 공간을 가져옴 (space를 없애고)
- 즉, 남아있는 공간, 여백이 있을 때만 grow 가능
- 화면이 커질 때, element도 함께 커지길 원할 때 사용할 수 있음
- flex-grow property가 0인 상태거나, 따로 정의되지 않았다면, 화면이 커져도 각 element 크기가 커지지 않음 (여백만 늘어나게 됨)

`flex-shrink`

- container가 작아졌을 때 아이템 크기를 지정
- 속성: default: 1, n배로 더 줄어들음

`flex-basis`

- 아이템들이 공간을 얼마나 차지해야하는지 세부적으로 지정
- 메인축 기준, 늘거나 줄기 전 initial size , grow 1이면 정한 크기 무너진다

`align-self`

- 아이템별로 아이템을 반대축에서 정렬, container에서 벗어나서 지정가능
- parent에 높이가 있어야 개별적으로 지정가능
- 속성: flex-start, flex-end, center, baseline, stretch

# main axis + cross axis

- main axis - 세로, 가로 둘중하나를 고름
- cross axis- main축과 반대되는 축

🔍  참고자료

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [mdn - css flexbox](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox)
- [드림코딩 엘리 유뷰트](https://www.youtube.com/watch?v=7neASrWEFEM)
- [https://flexboxfroggy.com/#ko](https://flexboxfroggy.com/#ko)
