# 정리 계기

`코드스쿼드 웹프론트엔드 베이직` 클래스를 시작하면서 PR방식으로 코드리뷰를 진행했기 때문에 PR과 비롯한 Git Branch에 대해 공부해야했다. 더불어 `Connect`프로젝트에서 새로운 프론트엔드 팀원이 합류하면서 connect-front레포지토리를 체계적으로 관리해야했다. 이전까지 혼자 관리하면서 main브랜치에서 작업했는데, 두 명이서 함께 작업할려니 각자 브랜치를 만들어 작업해야 한다고 생각했다.

작업을 시작하기 전 브랜치를 어떻게 관리해야할까 고민했다. main브랜치에서 devlop브랜치를 만들고, develop브랜치에서 feature브랜치를 만들어 작업하는 방식이 있어 해당 방식으로 작업하면 되겠다고 생각했다. 하지만 단순히 브랜치를 여러 개 만들고 합치는 과정만 반복한다면 merge하는 과정에서 충돌(conflict)가 계속 날 것 같았고, 체계적으로 관리하기 어려울 것 같다는 생각이 들었다.

어떻게 레포지토리를 관리해야할까 마땅한 해결책을 찾지 못하고 있었는데 다행이 팀원분이 이전 프로젝트에서 PR방식으로 레포지토리를 정리하신 경험이 있으셔서 PR방식으로 레포지토리를 관리하기로 결정했다.

개인 레포지토리 경험은 있지만 다른 사람들과 레포지토리를 함께 사용한 경험도 없고 PR방식도 처음이라 관련 내용을 정리하기로 했다. 다른 사람과 함께 작업할 일이 많아질 때 꼭 필요한 내용이랑 예시와 함께 자세히 정리해보려고 한다.

# 목차

# 간단한 개념 및 용어 설명

- 중앙 원격 저장소(project repository): 여러 명이 같은 프로젝트를 관리하는데 사용되는 그룹 계정의 중립된 원격 저장소
- 자신의 원격 저장소(my repository): 내 깃허브 레포지토리
- 로컬 저장소(local repository): 내 pc에 저장되는 개인 전용 저장소

# 목적

main브랜치에서 개발을 최소화하고 develop브랜치에서 작업을 진행한다.

# 실습 예시

1. 중앙 원격 저장소를 포크해서 자신만의 원격 저장소를 만들기

- 중앙 원격 저장소에는 main과 develop 브랜치가 있음.
- 현재 프로젝트에서는 main이 아닌 develop브랜치에서 작업 후 main에 합칠 예정
- 자신의 깃허브 계정에 중앙 원격 저장소와 똑같은 내용의 저장소를 복제
- 개인 원격 저장소와 중앙 원격 저장소는 독립적으로 운영

- 그룹 생성

<img width="832" alt="그룹생성" src="https://user-images.githubusercontent.com/71386219/154831390-1b1651dc-719a-4284-8c6f-8afd71064d8c.png">

- 레포지토리 생성

<img width="832" alt="레포지토리생성" src="https://user-images.githubusercontent.com/71386219/154831402-67077712-2345-4888-b474-633d3fcea220.png">

- 브랜치 생성

![develop브랜치생성](https://user-images.githubusercontent.com/71386219/154831420-fc1827a1-2ac2-47dc-a2ea-e240c1341f79.png)

- 개인 원격 저장소로 복제

![저장소복제](https://user-images.githubusercontent.com/71386219/154831497-c4f13d8f-45f4-48f3-94cd-09201b0d14c1.png)

![pr과정-1-11_page-0001](https://user-images.githubusercontent.com/71386219/154838036-8198d5b4-2ad9-415a-bea1-7c349be1eed8.jpg)

2. 프로젝트 참여자는 git clone명령으로 자신의 원격저장소 url을 가지고 로컬 저장소를 만들기

- 저장소를 클론할 때 main이 아닌 develop 브랜치를 자신의 로컬 저장소로 clone한다.

```bash
# git clone -b {브랜치명} --single-branch https://github.com/{본인저장소아이디}/{레포지토리명}
git clone -b develop --single-branch https://github.com/kimyouknow/pull-request
```

<img width="762" alt="로컬로 clone" src="https://user-images.githubusercontent.com/71386219/154831526-52400624-52e0-4117-9042-ae545d7ca7ab.png">

![pr과정-1-11_page-0002](https://user-images.githubusercontent.com/71386219/154838041-420858b3-c57a-426a-a7a6-4117b1ff7751.jpg)

3. 원격 저장소 연결하기 (최초 1회)

- 깃허브 저장소에 push하거나 pull할 때 매번 url을 작성하기 번거로우니 url에 이름을 붙여서 등록
- 자신의 원격 저장소는 origin, 프로젝트 원격 저장소는 upstream으로 이름을 짓는다.
- origin은 clone할 때 자동으로 되지만, upstream은 따로 명령어를 통해 등록해야한다.
- 아래 예시 중 2번을 사용해 develop브랜치만 등록

```bash
# 1번: git remote add upstream {중앙 원격저장소_url}
# 2번: git remote add -t develop upstream {중앙 원격저장소_url}
git remote add upstream https://github.com/PR-practice/pull-request
git remote add -t develop upstream https://github.com/PR-practice/pull-request
# git remote -v 으로 등록 현황 확인
```

<img width="762" alt="중앙원격저장소연결" src="https://user-images.githubusercontent.com/71386219/154831568-af086014-fd45-4058-bd07-ce94ba4df65b.png">

![pr과정-1-11_page-0003](https://user-images.githubusercontent.com/71386219/154838042-f7e6244c-1b6b-4a11-8de3-4165f229fba5.jpg)

4. 자신이 구현할 기능 이름으로 브랜치를 생성 후, 해당 브랜치에서 작업

- develop브랜치가 아닌 새로운 branch를 만들어서 작업
- 구현할 기능 이름으로 브랜치를 짓는다.

```bash
# git checkout -b {브랜치명}
git checkout first-task
```

![pr과정-1-11_page-0004](https://user-images.githubusercontent.com/71386219/154838044-8b845d21-2d43-4a8c-8be5-37f47a7062f2.jpg)

5. 기능 구현 하면서 적절한 add와 commit

```bash
git status
git add
git commit
```

<img width="762" alt="task" src="https://user-images.githubusercontent.com/71386219/154831676-5877af55-a632-41cd-8eab-12e680a1fd3c.png">

![pr과정-1-11_page-0005](https://user-images.githubusercontent.com/71386219/154838045-f3afce2b-512c-41e9-bec3-93f679244eba.jpg)

6. 해당 브랜치에서 작업이 완료되면 자신의 원격 저장소로 push

- 기능 구현을 마친 후 커밋한 내용을 푸시할 때, 프로젝트 원격 저장소가 아닌, 자신의 원격 저장소로 푸시

```bash
# git push origin {자신이 만든 브랜치명}
git push origin first-task
```

<img width="762" alt="push" src="https://user-images.githubusercontent.com/71386219/154831678-a94a3953-70b4-40c1-a704-33514e7a0373.png">

![pr과정-1-11_page-0006](https://user-images.githubusercontent.com/71386219/154838047-6380679d-1bb7-45fc-9c2b-3b169aa07e27.jpg)

- 개인 원격 저장소는 다음과 같은 상태로 변함.

![스크린샷 2022-02-20 오후 3 40 13](https://user-images.githubusercontent.com/71386219/154831710-9ea72a71-b8d6-457e-9beb-4d66f8c40407.png)

7. github서비스에서 pr 요청

- pr은 중앙 원격 저장소(upstream)의 브랜치(develop)와 자신이 생성한 기능 브랜치(first-task)를 기준으로 한다.
- ❗️ 주의 사항: 아래와 같이 개인원격저장소의 task브랜치에서 중앙원격저장소의 develop브랜치로 보내야한다.

![pr](https://user-images.githubusercontent.com/71386219/154831803-0a9c6591-8f43-47fe-985d-060372fc9f2e.png)

![pr과정-1-11_page-0007](https://user-images.githubusercontent.com/71386219/154838049-d3e697e0-6f4d-4afb-8653-fe43bd2d2652.jpg)

8. 프로젝트 관리자는 변경 내용을 확인한 후 중앙 원격 저장소에서 merge한다.

- 충돌이 일어날 경우 팀원들과 합의 후 충돌내용을 수정한 후 병합한다.
- 병합이 성공하면 main브랜치의 상태를 develop브랜치 상태로 업데이트한다.

![pr과정-1-11_page-0008](https://user-images.githubusercontent.com/71386219/154838050-2d345787-4ca3-42a1-828f-4327f7d18e88.jpg)

9. 성공적으로 merge후 자신의 로컬 저장소 브랜치를 삭제 후 업스트림 저장소로 최신화해야 한다.

- 자신의 로컬 브랜치 기능 브랜치를 삭제
- 중앙 원격 저장소가 변경되었으므로, 모든 팀원은 자신의 로컬 저장소를 동기화해서 최신상태로 만들어야 한다.
- 원격 저장소 등록을 안했을 경우, 3번으로 돌아간다.
- 로컬 레포리토리가 중앙원격레포지로티로 성공적으로 최신화되었을 경우, 자신의 원격레포지토리에 git push origin develop으로 최신화된 로컬레포지토리내용으로 최신화한다.

```bash
# git fetch upstream {브랜치명}
# 1번 방법: fetch 이후 rebase
git fetch upstream develop
# 1-1: merge
git merge upstream/develop
# 1-2: rebase
git rebase upstream/develop

# 2번 방법: fetch 이후 merge(pull)
git pull upstream develop

# git pull origin develop
```

<img width="762" alt="스크린샷 2022-02-20 오후 3 48 07" src="https://user-images.githubusercontent.com/71386219/154831930-0fb86409-be78-4200-addc-3c0d4f386430.png">

![pr과정-1-11_page-0009](https://user-images.githubusercontent.com/71386219/154838051-53c5db97-446b-46ca-ac96-676eb8484bc4.jpg)
![pr과정-1-11_page-0010](https://user-images.githubusercontent.com/71386219/154838052-df0f2162-cf59-4ffa-be6b-e6a95523e805.jpg)
![pr과정-1-11_page-0011](https://user-images.githubusercontent.com/71386219/154838053-07b41eb7-9a10-41a7-8861-d3aad5f5c9b9.jpg)

10. 이후 4번부터 반복

🔍 참고자료

- [git 초보를 위한 풀리퀘스트(pull request) 방법 - 초보몽키의 개발공부블로그](https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/)
- [깃허브로 협업하기(forking workflow방식) - tistory](https://andamiro25.tistory.com/193)
- [Branch를 이용한 협업 방법을 공부했습니다 - tistory](https://mokochi.tistory.com/4)
- [git 협업가이드 - velog](https://velog.io/@jinuku/Git-%ED%98%91%EC%97%85-%EA%B0%80%EC%9D%B4%EB%93%9C)
