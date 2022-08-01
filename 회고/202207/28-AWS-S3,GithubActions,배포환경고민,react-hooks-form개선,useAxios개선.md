# 20220728

<details>
<summary>시간대별 정리</summary>

### 아침

회고작성

### 오전

연결리스트 delete구현

→ test이후 리팩토링하기 신경쓰기 어렵다

### 오후

배포관련 용어 한 줄 정리

AWS-S3

Github Actions

nignx란?

### 저녁

useAxios에 post,patch추가

- hooks 규칙

react-hooks-form 문제

- 사용법을 잘못알고 있었음….

</details>
<br>

# 개인공부

## 연결리스트 핵심 메서드 마무리

리팩토링 및 mock데이터로 실행 몇 번 해봤다. 내일 간단한 스토리를 짜서 돌려봐야겠다.

[구현중인 gist 파일](https://gist.github.com/kimyouknow/06b23b748111eb2b3112f44f3076ebd8)

> 간단하게 ec2에 express서버를 수동으로 배포하고, s3에 react를 수동으로 배포하는 일까지 해봤다. 그런데 아직 모르는 용어가 많다. 설치 및 배포 과정을 전부 기록할까하다가 시간이 너무 오래걸릴 것 같아 우선 모르는 단어 위주로 정리해봤다.

## AWS-S3

[노션 정리 - AWS-S3 with \***\*GitHub Actions\*\***](https://www.notion.so/AWS-S3-with-GitHub-Actions-2c4016103eba4f9f927380e1f3e24728)

S3는 간단한 정적 저장소이다. 이미지 서버나 서버 로그를 저장하는 서버로 사용할 수도 있다. 웹사이트를 배포할 경우 간단한 설정으로 정적 웹사이트를 배포할 수 있다.

## Github Actions

[노션정리 - Github Actions](https://www.notion.so/Github-actions-73c99a024e764ff793640019710a933c)

Github에서 제공하는 워크플로우(workflow)를 자동화하도록 도와주는 도구이다. 테스트, 빌드, 배포 등의 다양한 작업들을 자동화하여 처리할 수 있다.

즉, **특정한 이벤트가 발생했을 때 내가 원하는 작업을 자동으로 실행시켜주는 툴**이라고 할 수 있다.

## 배포 환경 고민

분리 배포를 위해 프론트는 aws-s3에 배포하고, 백은 aws-ec2에 수동으로 배포해봤다. 그런데 블로그을 찾다보니 ec2에 nginx로 프론트 코드를 배포하는 사례를 많이 찾아볼 수 있었다.

nginx를 활용해 s3를 따로 만들필요없이 http server로서 정적 파일을 serve하게 해서 was의 부담을 줄여주는 것 같다.

```bash
server {
    listen 80;

    location / { # 프론트 접근
        root /home/ec2-user/***/build;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    # node api reverse proxy
    location /api/ { # api로 시작하는 주소는 백 프로그램이 돌고 있는 포트로 전달
        proxy_pass http://localhost:9090/api/;
    }
}
```

기능이 엄청 많던데 설정은 간단해 보였다. 기능을 더 알아보고 토이 프로젝트에 적용하던가 해야겠다.

github action과 ec2, s3를 연결해봐야 구체적인 빌드 시나리오를 짤 수 있을 것 같다.

⇒ docker, cdn, cloud front까지만 해볼 예정

# 코넥트

## react-hooks-form의 아쉬운 부분

### 1. 태그마다 확인이 어렵다.

우리는 필수입력정보 모달의 각 페이지마다 있는 input태그의 validation을 확인해야한다. 페이지마다 있는 “다음 페이지로 이동”버튼을 누를 때마다 validation 관련 에러를 보여줘야한다. 하지만 react-hooks-form은 validation관련된 에러를 submit할 때 한 번에 확인하는 로직이다.

### 2. 실시간 반영이 어렵다

onChange으로 실시간 반영이 어렵고, 제출시에만 값을 확인 할 수 있다.

### 해결방법

custom hooks를 만들어 **조건1(페이지의 input태그마다 validation을 확인 해야한다.)**와 **조건2(validation에 따라 다음 페이지 이동 버튼을 활성화 해야한다.)**를 충족시켜보자.

## useAxios 업데이트

### useReducer로 응답,로딩중,에러 상태 관리

responseData, isErorr, errorMsg, isLoading으로 이뤄진 useState 상태를 useReducer로직을 사용해 하나의 객체 상태로 정리했다. 각각의 상태가 독립적이지 않고 하나의 로직에 종속되어있기 때문에 하나의 객체로 사용해도 된다고 생각했다.

```jsx
const useAxios = (axiosInstance, config, immediate = true) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    responseData: null,
    error: null,
  });
  const [controller, setController] = useState();
  // 생략
  const execution = async () => {
    dispatch({ type: LOADING_TYPE });
    try {
      const ctrl = new AbortController();
      setController(ctrl);
      const {
        status,
        data: { data },
      } = await axiosInstance({ ...config, signal: ctrl.signal });
      dispatch({ type: SUCCESS_TYPE, data });
    } catch (error) {
      console.error(error);
      dispatch({ type: ERROR_TYPE, error });
    }
  };
  useEffect(() => {
    resetState();
    if (immediate) {
      execution();
    }
    return () => controller && controller.abort();
  }, [trigger]);
  return { ...state, execution, forceRefetch };
};
```

### GET요청 외에 다른 요청도 가능하게 업데이트

현재 get요청만 되게 되어있다. axiosinstance를 받아서 사용하지만 hooks의 특성상 callback함수안에서 선언할 수 없고 함수형 컴포넌트 body에 선언해야한다. 그러다보니 기존 코드로 사용자 액션에 의해 발생하는 fetch요청을 수행하기 어려웠다. 이를 해결하기위해 useAxios내에 있는 fetch함수(execution)도 반환하게 수정했다.

하지만 이렇게 fetch함수(execution)만 반환하게 수정했을 때 문제가 해결되지 않았다.

- 커스텀 hooks로 데이터 요청 관련 함수를 모아뒀는데, 각각의 데이터 요청마다 useAxios를 선언해야한다.
- 전달 값을 액션이 발생했을 때 전달하기 어려워진다.
