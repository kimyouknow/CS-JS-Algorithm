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
```

```bash
git commit -m "제목"
git commit // vi 편집기로 넘어감. 아래 커밋 약속 정리에 예시 남겨둠.
```

```bash
git push <저장소명> <브랜치명>
```

```bash
git check
```

```bash
git
```
