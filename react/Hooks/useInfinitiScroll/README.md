# useInfinitiscroll 만들기

# 고민거리

# Intersection Observer API란?

> 타겟 요소와 상위 요소 또는 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법

Intersection Observer API를 사용하면 `감시하고자 하는 요소`가 `다른 요소(viewport)`에 들어가거나 나갈때 또는 요청한 부분만큼 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 한다.

Intersection 정보가 필요한 예시

- 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩(`lazy loading`)
- 스크롤 시에, 더 많은 컨텐츠가 로드 및 렌더링되어 사용자가 페이지를 이동하지 않아도 되게 하는 `infinite-scroll` 을 구현.
- `광고 수익을 계산`하기 위한 용도로 광고의 가시성 보고.
- 사용자에게 결과가 표시되는 여부에 따라 작`업이나 애니메이션을 수행할 지 여부를 결정`

🔍 참고자료

- https://rrecoder.tistory.com/171
- [IntersectionObserver API - MDN](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
