# H2 m1 설치 및 이론 정리

📌 목차

1. H2란?
2. H2 main features
3. 장점 및 활용
4. 단점
5. 프론트에서 느낀 점
6. 설치과정

# H2란?

Java 기반 RDBMS

# H2 main features

- 자바기반 오픈소스 관계형 데이터 베이스 관리 시스템(Very fast, open source, JDBC API)
- 두 가지 in memory DB 기능 지원 (Embedded and server modes; in-memory databases)
  - Embedded Mode(내장모드): application 서버 실행 종료시 데이터 모두 휘발
  - Server Mode(서버모드): application 서버 실행 종료시에도 지속적으로 해당 데이터 사용가능
- 브라우저 기반의 콘솔모드 사용가능 (Browser based Console application)
- 별도의 설치과정없이 작은 용량 (Small footprint: around 2.5 MB jar file size)

# 장점 및 활용

- 위와 같은 장점을 활용해 어플리케이션 개발 단계의 테스트 DB로 많이 사용된다.

# 단점

- 백에서 어떻게 관리하고 있나 몰라서 아직 구체적인 단점을 파악하지 못했다.

# 프론트에서 느낀 점

- 아직 RDMBS에 대해 잘 몰라 구체적인 장단점을 파악하지 못했다.

# 설치과정

> mac m1 기준

1. H2 database 홈페이지에서 다운로드

매인 홈페이지에서 `All Document` 클릭 후 최신버전 보다는 안정화된 버전으로 다운.

![스크린샷 2022-02-09 오후 10 55 58](https://user-images.githubusercontent.com/71386219/153215869-02edcc5c-fc5e-4eff-86f4-f7c7154b301d.png)

2. 압축 풀고 실행

다운 받은 파일을 압축해제하고 원하는 곳으로 이동. (본인은 user root로 옮김). 완료 후 다음과 같은 폴더 구성에서 `/bin`으로 이동 후 `./h2.sh` 파일 실행.

`permission denied` 에러 시 `chmod 755 ./h2.sh`로 권한 부여

![스크린샷 2022-02-09 오후 11 03 57](https://user-images.githubusercontent.com/71386219/153216857-91393373-7f6b-42eb-960f-0079ba628978.png)

3. 연결

아래와 같이 연결

![스크린샷 2022-02-09 오후 11 07 25](https://user-images.githubusercontent.com/71386219/153217562-7bf919f4-f8a4-4548-88ae-888af120657a.png)

![스크린샷 2022-02-09 오후 11 07 39](https://user-images.githubusercontent.com/71386219/153217552-9359c90e-dd8c-425a-8a08-e18ef402325e.png)

4. 저장위치

데이터의 기본 저장위치는 root디렉토리이다. 기본적으로 `test.mv.db`파일로 저장되고, `JDBC URL`을 jdbc:h2:~/MPTest와 같이 설정하면 `MPTest.mv.db`와 같은 파일로 저장된다.

✅ 참고자료

- [h2 공식문서](https://www.h2database.com/html/main.html)
- [[H2DB] H2 Database란?](https://youngbae10000.tistory.com/51)
- [[H2] H2 DB의 특징과 사용에 대한 고찰](https://jamie95.tistory.com/188)
- [MacOS 에서 H2 database 설치 및 Spring Boot 에 연결](https://bcp0109.tistory.com/315)
