# Babel

> Babel is a JavaScript compiler. 하지만 엄밀히 말하면 transfiler라고 할 수 있다.

- compiler: 사람이 작성한 코드를 컴퓨터가 이해할 수 있도록 바꿔주는 프로그램
- tarnsfiler: 같은 언어를 다른 실행환경에서도 돌아갈 수 있도록 형태만 바꾸는 작업

# 1\. 등장배경

---

### 1-1. 크로스 브라우징

- 각 브라우저 마다 지닌 JavaScript 엔진의 차이로 발생하는 것인데 최신의 모던 브라우저에서는 최신 JavaScript 문법이 동작하지만 이를 지원하지 않는 브라우저에서는 앱이 제대로 동작하지 않는 문제  

- 웹 페이지 제작 시 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게 작동하게하는 작업

### 1-2. 트랜스파일과 빌드

- babel은 최신 버전의 자바스크립트 문법(보통 ES6+)을 이전 버전의 자바스크립트 문법으로 변환시켜준다.
- 웹팩을 통해 코드가 수정될 때마다 트랜스파일러 동작

# 2.동작원리(기본동작)

---

> Source Code => AST => modified AST => Source Code

###

### 2-1. 파싱(Parsing

- 코드를 읽고 추상 구문 트리(AST)로 변환하는 단계

### 2-2. 변환(Transforming)

- 1단계에서 작성한 추상구문트리를 가져와서 각 브라우저에 맞게 변환
- 여기서 바벨 설정에 추가한 plugin들이 적용 됨  


### 2-3. 출력(Printing)

- 변경된 결과물을 출력

# 2\. plugin

---

바벨은 파싱과 출력만 담당하고 변환 작업은 다른 녀석이 처리하데 이것을 **"플러그인"** 이라고 부른다.

# 3\. preset  

---

> es6으로 코딩할 때 플러그인을 하나하나 설정하기 어려울 수 있다. 이때,  목적에 맞게 여러가지 plugin을 모아둔 preset으로 간편하게 사용가능하다.

목적에 맞게 여러가지 플러그인을 세트로 모아놓은 것을 프리셋이라고 한다.

예시

- preset-env는 ECMAScript2015+를 변환할 때 사용한다.
- 바벨 7 이전 버전에는 연도별로 각 프리셋을 제공했지만(babel-reset-es2015, babel-reset-es2016, babel-reset-es2017, babel-reset-latest) 지금은 env 하나로 합쳐졌다.

# 4\. 폴리필

---

> 구형 브라우저에서 지원하지 않는 기능을 제공하는 코드를 의미

브라우저에서 지원하지 않는 코드를 사용 가능한 코드 조각이나 플러그인으로 변환한 코드를 의미한다. 즉, 최신 자바스크립트의 기능을 구식 자바스크립트 코드로 똑같이 구현한 코드를 의미

### core js: 

### polyfill.io

# 5\. 설정 파일

---

바벨 규칙을 미리 정리해둔 파일이라고 생각하면 된다.

###

### 5-1. .babelrc

- 주로 하위 디렉토리나 파일에서 특정 플러그인이나 변환을 실행할 때 사용

### 5-2. .babel.config.json

- 보편적으로 가장 많이 사용
- 프로젝트 전체 구성

### 5-3. .babel.config.js

- 공식문서에 따르면 .js로 사용하면 구성 api가 노출되어, 캐싱과 관련한 복잡성을 증가시킨다고 한다.

# 6\. 웹팩으로 연결

---

로더형태로 제공되는 babel-loader를 사용해서 웹팩으로 통합해서 사용한다.

# 기타

---

@babel/core: 바벨의 핵심기능이 담겨있는 기본 라이브러리

@babel/cli : 커맨드 라인에서 바벨을 실행할 수있는 라이브러리

@babel/preset-env (기본 js코드 검사)

@babel/preset-flow (플로우 코드 검사)  
@babel/node : Node.js 커멘드 라인에서 사용하는 명령어를 사용할 수 있게 해준다 ( node > babel-node )

🔍참고자료

- [https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)  

- [https://tecoble.techcourse.co.kr/post/2021-07-07-babel/](https://tecoble.techcourse.co.kr/post/2021-07-07-babel/)   

- [https://velog.io/@kwonh/Babel-](https://velog.io/@kwonh/Babel-)바벨-설정-방법-1-전체설정파일-지역설정파일
