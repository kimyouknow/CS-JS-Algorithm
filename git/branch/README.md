- sqaush and merge
- rebase and merge
- merge

# Branch

하나의 폴더 안에서 공통의 작업을 가지고 공통 작업에서 파생된 서로 다른 작업을 진행할 수 있다.

```bash
git brach # 현재 브랜치의 상태를 보여줌. *표시 혹은 HEAD-> 로 현재 브랜치를 알려줌.
# -D 브랜치명: 삭제
git checkout # 이동,  -b 생성하면서 이동가능
git log --oneline --graph --all # 현재상태 확인
```

## 실습

1.  text.txt 파일을 만들고 각 커밋마다 work$로 수정

```bash
git init
git echo "work1" > text.txt
git add .
git commit -m "work1"
vi text.txt # work2
git commit -am "work2"
vi text.txt # work3
git commit -am "work3"
git log --oneline --graph --all # 현재상태 확인 혹은 git branch
```

![스크린샷 2022-02-16 오후 3 22 13](https://user-images.githubusercontent.com/71386219/154207986-7f7a7694-3668-4578-8a38-13abfc1c8a06.png)

2. front, back의 브랜치 생성

```bash
git branch front # front라는 브랜치 생성
git branch back # back라는 브랜치 생성
git log --oneline --graph --all # 현재상태 확인 혹은 git branch
```

![스크린샷 2022-02-16 오후 3 26 28](https://user-images.githubusercontent.com/71386219/154208502-50cebee6-f6cd-4f04-b87e-64671b916d31.png)

![스크린샷 2022-02-16 오후 3 27 01](https://user-images.githubusercontent.com/71386219/154208565-3d4ca786-ccaa-4b5d-8246-b020f24ddae3.png)

3. main에서 text.txt수정하고 커밋

```bash
vi text.txt # work4 on main
git commit -am "work4 main"
```

![스크린샷 2022-02-16 오후 3 30 01](https://user-images.githubusercontent.com/71386219/154208916-e98e732d-133c-42c4-92b3-cc7d32bcd6ad.png)

4. front 브랜치에서 text.txt파일 확인 후 front.txt파일생성

```bash
git checkout front
vi text.txt # work3
```

![스크린샷 2022-02-16 오후 3 28 33](https://user-images.githubusercontent.com/71386219/154208739-15e15467-eb8b-46a0-87b1-5542b725f818.png)

```bash
echo "front work" > front.txt
git add .
git commit -m "front1"
```

![스크린샷 2022-02-16 오후 3 37 48](https://user-images.githubusercontent.com/71386219/154209817-2689382b-f58d-44e7-9509-c1253b0492b6.png)

5. back브랜치에 back.txt파일 생성 후 확인

```bash
# 아래와 같이 나오는데, back, front, main 모두 work3에서 파생된 것을 알 수 있음.
# 이제 d0b58b8작업으로 main작업을 이어가면 됨.
```

![스크린샷 2022-02-16 오후 3 43 19](https://user-images.githubusercontent.com/71386219/154210525-8564236d-46ef-4e46-a6e1-c5c35ea29de7.png)

## Merge

base를 기준으로 뻗은 main과 a를 새로운 main으로 합치고 싶음. 공통의 조상(base)를 바탕으로 새로운 버전(merge)를 만듦.

<img width="923" alt="스크린샷 2022-02-16 오후 3 48 26" src="https://user-images.githubusercontent.com/71386219/154211123-04a49acf-17a0-469c-9e38-ef9e55cdff98.png">

## Conflict - 3 way merge

### 2 way merge

두 개의 브랜치를 병합할 때 두 브랜치의 같은 부분을 비교해서 충동을 감지

<img width="464" alt="스크린샷 2022-02-16 오후 3 54 54" src="https://user-images.githubusercontent.com/71386219/154212108-0844a8c5-e0b8-471a-85bb-32a79dff3693.png">

### 3way merge

base를 기준으로 here와 there 중 다른 부분으로 merge. 만약, here와 there 모두 base와 다르면 수동으로 충동을 설정해야한다.

<img width="760" alt="스크린샷 2022-02-16 오후 3 56 33" src="https://user-images.githubusercontent.com/71386219/154212298-914ceac7-70c9-4ae8-b353-0bc01ba04bce.png">

## Rebase

위의 merger과정을 보면 알겠지만 base는 브랜치들 사이의 공통의 조상이라고 할 수 있다. rebase라는 말은 해당 조상을 바꾼다는 의미다.

![rebase-1](https://user-images.githubusercontent.com/71386219/154213647-9a10569e-b067-49dd-8473-ee63999a1485.jpg)

### 실습

1. 기본 설정 및 목표

현재 base가 `c`인데 topic의 base를 main의 `m2`로 옮길려고 함.

![스크린샷 2022-02-16 오후 4 18 08](https://user-images.githubusercontent.com/71386219/154215090-98cc787b-3a24-4a95-9e92-026fb3d796bc.png)

2. 이동시킬려고 하는 브랜치로 이동 후 rebase실행

topic으로 이동 후 아래 명령 실행

```bash
git rebase 브랜치명 # 브랜치명이 가리키고 있는 곳으로 base를 옮기겠다
```

## Merge와 Rebase 차이

merge가 m2와 t2를 합쳐서 새로운 버전의 mt3를 만든다면, rebase는 m1,m2의 베이스를 바꾼다는 뜻이다.

진행과정은 다음과 같다. 원래 m1과 t2를 합쳐서 빨간 m1을 만든다. 원래 m1과 빨간 m1은 변경사항은 같은데 워킹카피가 다르다. 다음 원래 m2와 빨간m1을 합쳐서 빨간m2를 만든다. 그다음 브랜치가 빨간 m2를 가리킨다.

rebase는 원래m1과 m2가 원격저장소로 푸쉬되기 전까지만 사용가능하다. 워킹카피가 다르기 때문에 엉망이 될 수 있다. rebase는 내 컴퓨터에 있는 동안만 한다. git-scm에서도 위험성으로 `이미 공개 저장소에 push한 커밋을 rebase하지 마라`라고되어있다. rebase는 기존의 커밋을 그대로 사용하는 것이 아니라 내용은 같지만 다른 커밋을 새로 만들기 때문이다.

 <img width="1135" alt="스크린샷 2022-02-16 오후 4 34 17" src="https://user-images.githubusercontent.com/71386219/154217384-06d11c3d-32eb-4983-9f15-01afbbb3d6f4.png">

🔍 참고자료

- [Git 브랜치 - 브랜치란 무엇인가 - git.scm ](https://git-scm.com/book/ko/v2/Git-브랜치-브랜치란-무엇인가)
- [Git 브랜치 - Rebase 하기 - git.scm](https://git-scm.com/book/ko/v2/Git-브랜치-Rebase-하기)
- [git merge와 git rebase 차이 - tistory](https://hajoung56.tistory.com/5)
- [생활코딩 - GIT CLI - Branch & Conflict](https://opentutorials.org/course/3840)
- [생활코딩 - GIT CLI - Cherry-pick & rebase](https://opentutorials.org/course/3843)
