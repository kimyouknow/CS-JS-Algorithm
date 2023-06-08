/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const n = accounts.length;
  const obj = {};
  const names = {};

  const find = (x) => {
    if (obj[x] === x) return x;
    else return find(obj[x]);
  };

  const union = (x, y) => {
    const px = find(x);
    const py = find(y);
    if (px < py) {
      obj[py] = px;
    } else {
      obj[px] = py;
    }
  };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (obj[email] === undefined) {
        obj[email] = email;
      }
      names[email] = name; // 이메일마다 해당하는 name 매핑
      union(email, emails[0]); // accounts[i]의 이메일을 같은 그룹으로 묶기
    }
  }
  const emails = {};
  // 같은 그룹에 있는 이메일 모으기
  for (const email of Object.keys(obj)) {
    const p = find(email); // email이 속한 그룹 찾기
    if (p in emails) {
      emails[p].push(email);
    } else {
      emails[p] = [email];
    }
  }

  return Object.entries(emails).map(([email, arr]) => [names[email], ...arr.sort()]);
};

// read

// - 1 <= accounts.length <= 1000
// - 2 <= accounts[i].length <= 10
// - 1 <= accounts[i][j].length <= 30
// - accounts[i][0] consists of English letters.
// - accounts[i][j] (for j > 0) is a valid email.

// accounts에 같은 이메일이 있으면 같은 사람 account라는 뜻
// 같은 이름이더라도 동명이인일 수 있음

// 합치기
// - 이름, 정렬된 account

// sol1 51m

// accounts[i]의 길이가 10개 밖에 안되니까 완탐해도 시간은 통과할 듯 -> 하지만 너무 비효율적
// 이메일을 기준으로 사람을 합치기
// obj: {[email]: [array's index]}

// sol2: 45m union find (힌트봄)

// 이메일을 그룹화하려면 각 그룹에 대표를 만들기

// 배열의 인덱스가 아니라면 뭘 기준으로 그룹화하지?

// 처음에는 각 이메일을 자체 대표로 설정
// 각 계정의 이메일은 자연스럽게 같은 그룹에 속하며 같은 상위 그룹에 할당하여 가입(해당 목록에서 첫 번째 이메일의 상위 그룹을 사용).
