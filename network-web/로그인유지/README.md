# 로그인 유지

# jwt와 oauth

## jwt(JSON Web Token) 방식

### 핵심: access token, refresh token

- access token:
- refresh token:

### 동작과정

1. [프론트]: id와 비밀번호를 [백]으로 전달
2. [백]: id와 비밀번호를 검증하고 access token과 refresh token, access token의 만료시간을 반환해준다. 이 때 생성한 refresh token은 DB에 {ID, refreshToken}으로 저장한다.
3. [프론트]: 반환받은 access token을 매 api 호출마다 헤더에 붙여서 전송한다. 이 떄, localStorage나 cookie에 저장해둔다.
4. [백]: api호출을 받을 시 헤더의 access token을 확인하고 유효한지, 만료기간이 지났는지 체크 후 api를 동작
5. [프론트]: access token의 만료 기간이 지나거나, 30초 미만으로 남았다면, 백엔드에 refresh token을 붙여 reIssue 요청 보내기
6. [백]: reIssue 요청이 들어올 경우, refresh token이 DB에 있는 것인지 확인 후, access token과 새로운 access token 만료 시간을 반환
7. [프론트]: reIssue결과 반환된 access token과 만료시간을저장하여 다음 api호출에사용.

## OAuth(Open Authentication) 방식

실제 비밀번호 대신 access token (비밀키)를 이용한다.

### OAuth 인증을 필요한 구성

1. 유저: 일반 사용자
2. APP: 유저가 사용하는 서비스
3. Auth server / Resource server

   - `resource server`: 리소스 저장 서버, api를 통해 리소스 제공
   - `authorization server`: 인증 담당 서버, 인증을 완료하면 access token을 client에게 보냄. 리소스 서버와 인증 서버는 같은 서버일 수도 있다. 일반적으로 구글이나 페이스북 같은 대규모 서비스에서는 리소스 서버와 인증 서버를 분리한다.

4. client id: public key
5. client secret: secret key, 보통 환경변수에 담아 둠.
6. redirect url: client id와 client secret을 확인 한 후 redirect할 url주소

### 동작과정

1. 유저가 oauth 버튼 클릭
2. 브라우저는 해당 서버로 `로그인 url` 요청
3. 해당 서버에서 `로그인 url`을 브라우저에 전달
4. 브라우저에서 `로그인 url`로 리다이렉트
5. 브라우저에 깃허브 로그인 화면 뜸
6. 유저는 해당 서버가 요청한 정보(`scope`) 제공 요청을 승인하고, 자신의 깃허브 정보 입력
7. 깃허브 인증 서버(auth server)에서 사용자의 아이디와 비밀번호, 제공할 범위(`scope`)확인
8. 인증이 완료되면 `authorization code`를 `rediect url`에 붙여 보냄
9. 해당 서버에서 `authorization code`를 받아 client id, client secrest, `authorization code`를 깃허브 oauth서버에 보낸다 (`rediect url`은 optional)
10. 깃허브 서버는 client id, client secrest, `authorization code`가 모두 일치하는지 확인하고, 모두 일치하면 access token을 해당 서버로 보냄.
11. 해당 서버는 access token을 이용해 깃허브의 resource server로부터 사용자 정보를 받아온다.

# 토큰을 어디에 저장해야할까

토큰을 refresh token과 access token으로 나눠서 생각해야 한다.

access token은 만료시간이 짧기 때문에 좀 더 오픈된 공간에 저장해도 되지만, refresh token은 쉽지 않다. 웹에서 사용자의 로그인 정보를 저장할만한 공간은 클라이언트에서는 로컬스토리지, 쿠키 등이 있고, 서버에는 세션이나 db가 있다.

refresh토큰은 서버에 저장하는 것이 가장 좋고, access token의 경우 만료기간이 짧다면 클라이언트 단에 저장해도 된다.
클라이언트 단에 refresh나 access token을 저장할 때 로컬스토리지와 쿠키 중 쿠키에 httponly와 secure 옵션을 사용한다면 어느 정도 보안은 된다.

👀 참고자료

- https://www.youtube.com/watch?v=cWUtMHTKdj0
- https://han-um.tistory.com/17
- https://velog.io/@devstone/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%99%80-%EC%84%9C%EB%B2%84-%EC%96%91-%EC%9E%85%EC%9E%A5%EC%97%90%EC%84%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B3%BC%EC%A0%95-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-feat.-session-JWT%EC%86%8C%EC%85%9C%EB%A1%9C%EA%B7%B8%EC%9D%B8
- https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id
- https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#jwt_persist
