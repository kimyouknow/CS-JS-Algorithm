# Git 전반적인 정리

[Git-공식문서](https://git-scm.com)를 정리하기엔 양이 너무 많고, Git을 잘 사용하기 위해 알아야 하는 지식도 많다. 모든 내용을 한 번에 정리할 수 없으니까 Git관련해서 새롭게 알게된 내용을 폴더별로 정리할 예정이다. 다음에 내가 봤을 때 쉽게 이해할 수 있게 정리하자.

# 애매한 단어들

- upstream
- rebase

# 명령어 정리

```bash
// 로컬에서 기본 값으로 사용할 git 관련 옵션 설정 가능
git config
git config --list // 전체 config 리스트 확인
git config --global init.defaultBranch main // default branch 이름을 main으로 설정
git config --global user.name "임시" // global 설정
git config --unset --global user.name // global 삭제
```

```bash
// 새로운 저장소 만들기
git init
```

```bash
// 저장소 받아오기
git clone /로컬/저장소/경로 // 로컬 저장소 clone
git clone 사용자명@호스트:/원격/저장소/경로 // 원격 서버의 저장소 clone

// 특정 브랜치만 clone
git clone -b {브랜치명} --single-branch {저장소 url}
```

````bash
git commit -m "제목"
git commit // vi 편집기로 넘어감. 아래 커밋 약속 정리에 예시 남겨둠.
# --amend: 가장 최근 커밋 메세지 수정
# -v: git add -p와 마찬가지로 커밋하는 변경사항을 다시 한번 확인하고 커밋가능. 다만, 화면 아래 diff가 한 번더 나옴.

```bash
# 전체 파일 스테이징
git add .

# git add 특정 폴더/특정 파일
# -p: 변경사항을 확인하면서 스테이징 작업 가능, 수정된 파일의 수정 부분을 단위별로 나눠서 추가할지 말지 보여준다. hunk(변경사항 단위)를 추가할지말지 결정
#    y - (중요)stage this hunk
#    n - (중요)do not stage this hunk
#    q - (중요)quit; do not stage this hunk or any of the remaining ones
#    a - stage this hunk and all later hunks in the file
#    d - do not stage this hunk or any of the later hunks in the file
#    g - select a hunk to go to
#    / - search for a hunk matching the given regex
#    j - leave this hunk undecided, see next undecided hunk
#    J - leave this hunk undecided, see next hunk
#    k - leave this hunk undecided, see previous undecided hunk
#    K - leave this hunk undecided, see previous hunk
#    s - split the current hunk into smaller hunks
#    e - (중요)manually edit the current hunk
#    ? - (중요)print help
````

````
```bash
git push <저장소명> <브랜치명>
````

```bash
git reset HEAD // git add 취소
```

```bash
git log
# --all
# -- oneline
# -- grapth
```
