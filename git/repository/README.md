# State area, Repository

### Stage area

- 커밋 대기 공간이라고 생각하면 편함.
- git add 명령어를 통해 추가된 파일이 모여 있음.
- git commit을 하면 stage area에 있는 커밋됨.

### Repository

- 커밋된 결과가 저장되는 공간

# 저장소

- `원격 저장소(Remote Repository)`: 파일이 원격 저장소 전용 서버에서 관리되어 여러 사람이 함께 공유하기 위한 저장소
- `로컬 저장소(Local Repository)`: 내 pc에 파일이 저장되는 개인 저장소

# Git Clone vs Fork

### Fork

- 해당 repository에서 fork하면 내 repository로 가져와 수정이 가능하다.
- 원본을 수정하는 것이 아니라 복사본을 수정가능하게 된다는 뜻
- fork한 저장소는 원본과 연결되어 있다. -> original repository에서 변화가 생기면(새로운 commit) 그래도 forked된 repository로 반영할 수 있다. (Fetch나 Rebase를 통해서 가능)
- 그 후 original repository에 forked된 repository의 변경 사항을 적용하고 싶으면 pull request를 해야 한다.
- original repository의 관리자가 승인하면 내가 수정한 코드의 commit, merge되어 original repository에 반영된다.

![image](https://www.toolsqa.com/gallery/Git/4.1_Pull-Request.png)

### Clone

- 특정 repository를 내 로컬에 복사하여 새로운 저장소를 만든다.
- clone한 original repository를 remote repository의 origin으로 가진다.
- fork와 original repository와 연결되지 않는다.

![image](https://user-images.githubusercontent.com/71386219/153859863-bde44bc4-12f8-4928-8883-b8c5479b6d85.png)

# Git Fetch / Pull

두 방법 모두 원격 저장소의 커밋들을 로컬 저장소로 가져와 합치는 방법이다.

### Fetch(가져오기)

- remote repository에 있는 변경사항들을 local repository에 가져오기 전에 변경 내용을 확인하고 싶을 때 사용
- pull과 다르게 우선 repository의 내용을 가져오기 때문에 conflict이 발생하지 않는다.

### Pull(가져와서 병합하기)

- fetch와 다르게 local directory에 변경내용을 합친다.

# Upstream / Downstream

- upstream과 downstream은 상대적인 개념
- origin과 local을 기준으로 생각하면 origin이 upstream, local이 downstream이다. push와 pull을 기준으로 생각했을 때 origin으로부터 local로 흐르는 관계가 형성되기 때문
- local에서 origin으로 push한다
- origin에서 local로 pull한다
- 예시: `git push -u origin main` -> `-u`는 `--set-upstream` 옵션의 줄임으로 upstream으로 설정한다는 뜻.

### Fork와 Upstream 관계

- `original repository: upstream`
- `copy repository(내가 forked한 repository): origin`
- `local과 origin의 관계`에선 local이 downstream, origin이 upstream이었는데, `fork한 repository를 기준`으로 보면 origin이 downstream, 원본 remote가 upstream이라는 관계가 됨. 그래서 GitHub로 협업을 할 때는 보통 다음과 같은 프로세스 거처야 함.

```
1. '원본 remote repository'(upstream)를 깃허브에서 fork
2. 'fork한 remote repository'(origin)를 깃 클라이언트로 clone
3. 기능을 완성할 때까지 반복
  - 'clone한 repository'(local)에 commit
  - local에서 origin으로 push
4. upstream에 반영하기 (PR: Pull Request)
  - PR을 등록하기 전 upstream에 바뀐 내용이 없는 경우
    - origin에서 upstream으로 PR
  - PR을 등록하기 전 upstream에 바뀐 내용이 있는 경우
    - upstream을 local로 pull
    - local에서 origin으로 push
    - origin에서 upstream으로 PR
```

- upstream repository 추가

```bash
git remote add {브랜치명} {repository_url} // 브래치명 생략시 main으로 되는 듯?
```

- upstream repository 변경 내역 확인

```bash
git fetch upstream {브랜치명} // 브래치명 생략시 main으로 되는 듯?
```

- upstream repository 변경 내역 반영

```bash
// local의 main으로 chekout 후 merge
git checkout main
git merge upstream/main

// 아니면 rebase 사용
```

🔍 참고자료

- [누구나 쉽게 이해할 수 있는 Git 입문](https://backlog.com/git-tutorial/kr/intro/intro1_2.html)
- [Git - 생활코딩](https://opentutorials.org/module/1215)
- [Git fork와 clone 의 차이점 - velog](https://velog.io/@imacoolgirlyo/Git-fork와-clone-의-차이점-5sjuhwfzgp)
- [Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)
- [GitHub에서 협업을 위한 remote repository와 upstream 이해하기](https://pers0n4.io/github-remote-repository-and-upstream/)
