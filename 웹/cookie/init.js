const http = require("http");

http
  .createServer(function (request, response) {
    const stringCookie = request.headers.cookie;
    // 쿠키를 객체로 변경, 쿠키가 브라우저에 있을 때만 실행.
    const cookieObj =
      stringCookie &&
      stringCookie.split(";").reduce((acc, cur, i) => {
        const [name, value] = cur.trim().split("=");
        acc[name] = value;
        return acc;
      }, {});

    console.log(cookieObj);

    // response.writeHead(200, {
    //   "Set-Cookie": [
    //     "yummy_cookie=choco",
    //     "tasty_cookie=strawberry",
    //     `Permanent=cookies; Max-Age=${60 * 60}`,
    //   ],
    // });
    response.end("Cookie!!");
  })
  .listen(3000);
