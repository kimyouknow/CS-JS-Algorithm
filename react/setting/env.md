# env

CRA로 생성된 앱에서 전역설정과 같은 환경변수를 사용하기 위해 env파일을 활용할 수 있다.

# 기본적인 활용

- 루트 폴더에 `.evn`파일을 추가
- 모든 변수명의 생성은 `REACT_APP_`으로 시작해야함.
- jsx 소스코드에서 `process.env.REACT_APP_변수명`으로 사용

# 개발/배포환경별 환경변수 적용

- local은 추후에 정리할 예정
- 파일 생성 규칙
  > .env
  > .env.development
  > .env.test
  > .env.production
- 앱 빌드에 따른 파일 우선순위(왼쪽이 높은 우선순위)
  > npm start: .env.development, .env
  > npm run build: .env.production, .env
  > npm test: .env.test, .env
