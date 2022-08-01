# 20220727

<details>
<summary>시간대별 정리</summary>

### 아침

회고작성

### 오전

연결리스트 search insert

단위테스트 항목들

### 오후

클라우드 컴퓨팅 서비스란 (aws-ec2)

ssh란

s3학습

인프라공부하는 이유 생각

### 저녁

UI에 필요한 구체적인 데이터 정하기

댓글컴포넌트설계

</details>
<br>

# 개인공부

## 테스트 단위가 적절한가?

내가 작성한 테스트 항목들이 각 메서드를 올바르게 동작하기 위해 적절한가를 어떻게 체크할 수 있을까?

리뷰받는 방법밖에 없을까? **유지보수하기 편하도록 핵심기능이 무엇인지 고민**해봐야겠다.

<details>
<summary>현재 테스트 항목들</summary>

```markdown
add()
size === 0일 때 add()
✓ 연결리스트 인스턴스의 add메서드 존재하니 (1 ms)
✓ add 실행 이후 연결리스트의 인스턴스의 길이가 1인가
✓ add 실행 이후 연결리스트의 head의 속성이 올바르게 있는지 (1 ms)
size !== 0일 때 add()
✓ 연결리스트 인스턴스의 add메서드 존재
✓ add 실행 이후 연결리스트의 인스턴스의 길이가 추가한 길이와 같은가 (1 ms)
✓ add 실행 이후 연결리스트의 head의 마지막에 push한 노드인지
✓ add 실행 이후 연결리스트의 마지막 노드가 새롭게 추가된 노드와 같은가
unshift()
size === 0일 때 unshift()
✓ 연결리스트 인스턴스의 unshift메서드 존재하니 (1 ms)
✓ unshift 실행 이후 연결리스트의 인스턴스의 길이가 1인가
✓ unshift 실행 이후 연결리스트의 head의 속성이 올바르게 있는지 (1 ms)
size !== 0일 때 unshift()
✓ 연결리스트 인스턴스의 unshift메서드 존재
✓ 실행 이후 연결리스트의 인스턴스의 길이가 추가한 길이와 같은가
✓ 연결리스트의 head의 처음에 unshift메서드인지
✓ 연결리스트의 마지막 노드가 처음 unshift된 노드와 같은가
search()
✓ 연결리스트에 search(index)가 존재하나
✓ index > size => null
✓ index <= size => 찾은 노드 (1 ms)
insert()
✓ 연결리스트에 insert메서드(data, index)가 존재하나
✓ index === 0 일 때 insert() 실행
✓ index === size 일 때 insert() 실행
✓ index > size 일 때 insert() 실행
✓ 0 < index < size 일 때, insert() 실행
```

</details>
<br>

## 배포 및 인프라 학습

사이드 프로젝트를 하면서 다음과 같은 아쉬움을 느꼈다.

- 배포 관련 이슈가 있었는데 내가 아무것도 몰라 백엔드에게 의존적이게 된 부분이 아쉽게 느껴지기도 했다.
- 프론트는 서버인데 localhost에서만 돌아가는 코드를 짤 수는 없다. 배포하기 위해 언제나 백엔드(was)에 의존적할 수 없다. 정적사이트라도 배포하면서 이해해보자.
- 전체적인 웹서비스의 동작과정을 이해할 필요성을 느꼈다.
- 쿠키, api요청 관한 cors문제가 발생했을 때 이해하기 어려웠다.

당장 프론트코드 작성하기도 바쁜데 aws, CI/CD 공부하는게 욕심일까하는 생각이 들었다. 프론트 개발자가 되기 위해 알고리즘 문제를 풀고, 자바스크립트 문법을 학습하고, ux/ui에 대한 고민이 담긴 기능구현이 우선이지 않을까. 특히, 내가 취약한 알고리즘이나 자료구조 공부를 먼저해야하나 싶었다. 알고리즘이나 자료구조는 단기간에 끝낼 수 없는 분야기 때문에 꾸준히 하면 되고, **이번주 스프린트인 배포와 api 설계**를 마무리하기 위해 배포 및 인프라관련 공부를 하기로 했다.

오늘은 aws ec2와 docker에 대해 알아봤다.

### AWS-ec2

간단한 개념학습, 설치 및 연결과정에서 모르는 단어 정리, 에러 해결 정리

**주요키워드**

```bash
클라우드 컴퓨팅 서비스, 인스턴스, ssh, 인바운드규칙,
```

[노션정리 - 클라우드 컴퓨팅서비스란(aws - ec2)](https://www.notion.so/d652ab2953294f82bcd66cc9c7a63645)

[노션정리 - ssh 개념](https://www.notion.so/97a43386cc2b483b84ad0aa372f17c25)

### docker

아래 링크의 설명을 보면서 docker는 아직 적용하지 않아도 될 것 같아서 개념만 알고 우선 aws까지만 정리했다.

[https://crispyblog.kr/development/common/9](https://crispyblog.kr/development/common/9)

[https://www.youtube.com/watch?v=LXJhA3VWXFA](https://www.youtube.com/watch?v=LXJhA3VWXFA)

[Docker 기본부터 배포까지](https://blog.appleseed.dev/post/docker-from-basics-to-production/)

# 코넥트

### UI에 필요한 데이터 정하기

이번주내내 **비즈니스 로직과 UI에 필요한 사항들을 나눠서 유저 스토리에 정리**했다. 그런데 UI에 필요한 구체적인 데이터를 정하지 않아 API명세를 수정하기 어려웠다. (UI에 필요한 데이터를 기준으로 요청해야하기 때문에)

예를 들어, `GET api/users`로 유저정보가 들어있는 리스트를 요청해 카드 형식으로 렌더링하는 상황에서 UI에 따라 회원가입시 필수로 받아야하는 정보가 달려졌다. (`GET api/users`가 DB에 있는 유저정보를 그대로 가져오기 때문에 9가지가 넘는 유저정보 중 카드에 보여줄 데이터만 우선 필수정보로 받아야했다. )

![보드.png](./image/27-%EB%B3%B4%EB%93%9C.png)

그래서 디자이너분과 이야기를 나눠 각 UI마다 보여줄 데이터를 UX를 고려해서 정했다. 정한 데이터를 토대로 백엔드에게 전달해서 API도 수정해달라고 요청했다.

### (대)댓글 컴포넌트 로직과 UI분리

redux로직을 덜어내고 props와 useState, useEffect로만 (대)댓글 컴포넌트를 관리하다보니 컴포넌트간 넘겨주는 props도 많아지고 각 컴포넌트가 비대해졌다.

컴포넌트를 UI에 집중시키기 위해 context api를 써서 props drilling문제를 해결하고 hooks로 로직을 분리할 구성을 했다. 머릿속으로 생각만하고 바로 코드를 짜려고하니 시작을 못하겠어서 우선 ppt로 컴포넌트 그림을 그려서 구조를 정해봤다. 시각적인 요소가 있다보니 작업하기 훨씬 수월했다.

![댓글전체컴포넌트]](./image/27-%EB%8C%93%EA%B8%801.png)

![댓글및대댓글컴포넌트](./image/27-%EB%8C%93%EA%B8%802.png)
