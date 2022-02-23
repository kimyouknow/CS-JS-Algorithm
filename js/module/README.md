# 모듈

### 모듈이란?

단시 파일 하나를 의미. 스크립트 하나는 모듈 하나.

### 전역변수가 아닌 자신만의 스코프를 가진다.

아래처럼 module로 타입으로 받아오면 크롬 콘솔에서 전역변수에 접근할 수 없음

- `모듈은 자신만의 스코프가 있어서 모듈 내부에서 정의한 변수나 함수는 다른 스크립트에서 접근할 수 없다.`

- 따라서, 모듈은 최상위 레벨 this는 undefined이고, 모듈이 아닌 일반 스크립트의 this는 전역 객체다.

```html
<script type="module" src="b.js"></script>
<!-- this 테스트 -->
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

```js
const hello = 'const b';
// const const_a = 'dubplicated a';

console.log(hello);
console.log('test'); // 둘다 출력 양호 하지만 콘솔에서 접근 안 됨.
```

### 모듈은 여러 곳에서 사용되더라도 단 한 번만 평가된다.

```js
// console.js
conosle.log('모듈 평가 완료');

// 동일한 모듈 여러 모듈에서 사용하기
// a.js
import './inside.js';
// b.js
import './inside.js';
// 콘솔에는 한 번만 표시됨.
```

- 아래 예시와 같이 전역변수를 관리하는 느낌으로 사용 가능
  > 이런 특징을 이용하면 모듈 *설정(configuration)*을 쉽게 할 수 있습니다. 최초로 실행되는 모듈의 객체 프로퍼티를 원하는 대로 설정하면 다른 모듈에서 이 설정을 그대로 사용할 수 있기 때문이죠.

```js
// <script type="module" src="a.js"></script>
// <script type="module" src="b.js"></script>
// console.js
export const admin = {
  name: '도리',
};

// 동일한 모듈 여러 모듈에서 사용하기
// a.js
import { admin } from './inside.js';
admin.name = '크롱';
// b.js
import { admin } from './inside.js';
console.log(admin.name);
// 콘솔에는 크롱이 출력
```

### import.meta

> import.meta 객체는 현재 모듈에 대한 정보를 제공해줍니다.

호스트 환경에 따라 제공하는 정보의 내용은 다른데, 브라우저 환경에선 스크립트의 URL 정보를 얻을 수 있습니다. HTML 안에 있는 모듈이라면, 현재 실행 중인 웹페이지의 URL 정보를 얻을 수 있습니다.

### 브라우저에서 특정 기능

모듈 스크립트는 항상 지연 실행된다. 외부 스크립트, 인라인 스크립트 관계없이 마치 `defer`속성을 붙인 것처럼 실행된다.

- 외부 모듈 스크립트 `<script type="module" src="...">`를 다운로드할 때 브라우저의 HTML 처리가 멈추지 않는다. `브라우저는 외부 모듈 스크립트와 기타 리소스를 병렬적으로 불러온다`.
- 모듈 스크립트는 HTML 문서가 완전히 준비될 때까지 대기 상태에 있다가 HTML 문서가 완전히 만들어진 이후에 실행된다. 모듈의 크기가 아주 작아서 HTML보다 빨리 불러온 경우에도 동일.
- 스크립트의 상대적 순서가 유지된다. 문서상 위쪽의 스크립트부터 차례로 실행

### 인라인 스크립트 비동기처리

async 속성 활용

- async 속성이 붙은 스크립트는 로딩이 끝나면 다른 스크립트나 HTML 문서가 처리되길 기다리지 않고 바로 실행
- `모듈 스크립트에선 async 속성을 인라인 스크립트에도 적용 가능`
- 아래와 같은 인라인 스크립트엔 async속성이 있어 다른 스크립트나 html이 처리되길 기다리지 않고 바로 실행된다.
- 이런 특징을 활용해 광고나 문서 레벨 이벤트 리스너, 카운터와 같이 어디에도 종속되지 않은 기능을 구현할 때 유용하게 사용 가능

```html
<!-- 필요한 모듈(analytics.js)의 로드가 끝나면 -->
<!-- 문서나 다른 <script>가 로드되길 기다리지 않고 바로 실행됩니다.-->
<script async type="module">
  import { counter } from './analytics.js';

  counter.count();
</script>
```

### 빌드 툴

번들링 툴을 사용하면 스크립트들은 하나 혹은 여러 개의 파일들로 번들링된다. 이 때 import, export문은 번들러 함수로 대체됨. 따라서 `type=module`이 필요 없어지게 됨.

🔍 참고자료

- https://ko.javascript.info/modules-intro
