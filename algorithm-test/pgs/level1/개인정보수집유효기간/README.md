링크: [https://school.programmers.co.kr/learn/courses/30/lessons/150370](https://school.programmers.co.kr/learn/courses/30/lessons/150370)

# 문제 읽기

개인정보 `n`개

수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 한다.

`today`: 오늘 날짜를 의미하는 문자열

- `YYYY`.`MM`.`DD`
- 2000 ≤ `YYYY` ≤ 2022
- 1 ≤ `MM` ≤ 12
- 1 ≤ `DD` ≤ 28

`terms`: 약관의 유효기간을 담은 1차원 문자열 배열

- 1 ≤ `terms` 의 길이 ≤ 20
- `terms`의 원소는 "`약관 종류`  `유효기간`" 형태
- `유효기간`: 1 이상 100 이하, 달 수를 나타내는 정수

`privacies`: 와 수집된 개인정보의 정보를 담은 1차원 문자열 배열

- 1 ≤ `privacies`의 길이 ≤ 100
- `privacies[i]`는 `i+1`번 개인정보의 수집 일자와 약관 종류
- `privacies`의 원소는 "`날짜` `약관 종류`" 형태

# 1트: 21m

파기 조건:

- 유효기간이 오늘날짜보다 뒤에 날짜면 파기
- 유효기간 > 오늘날짜

날짜계산

- yyyy → yyyy \* 12 \* 28
- mm → mm \* 28
- dd → dd
- yyyy + mm + dd

유효기간 계산

- termsMap: `terms`로 약관별 유효기간 객체 만들기
  - key: 약관
  - value: 유효기간
- `privacies`에 있는 개인정보들의 만료날짜를 구하기
  - `privacies`를 하나씩 돌면서
  - 만료날짜 = 날짜 + termsMap[약관종류] - 1
  - 파기여부결정
    - 만료날짜 < 오늘날짜 ⇒ idx + 1
