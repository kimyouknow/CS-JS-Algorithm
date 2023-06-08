# LSC(최장 공통 문자열, 최장 공통 부분수열)

두 문자열 Xn과 Yn이 있다고 할 때, 각각은 다음과 같이 정의할 수 있다.

- Xn: x1, x2, …xn으로 구성된 길이가 n인 문자열 (ex: abcedsf)
- Yn: y1, y2, …yn으로 구성된 길이가 n인 문자열 (ex: kabcqs)

## 최장 공통 문자열(Longest Common Substring)

부분문자열이 아니기 때문에 한번에 이어져있는 문자열만 가능하다.

위의 예시에서 (Xn: abcedsf, Yn: kabcqs) 최장 공통 부분수열은 (`abc`edsf, k`abc`qs)로 abc가 된다.

LCS(Xn, Yn)을 Xn과 Yn의 최장 공통 문자열의 길이라고 하자.

더욱 간단하게 표현, LSC(i,j)를 Xi와 Yi의 최장 공통 문자열의 길이라고 할 수 있다.

- Xi = x1, x2, … ,x(i-1), xi
- Yi = y1, y2, …y(i-1), yi

  위의 예시에서 (xi,yi)가 같다면 (x(i-1), y(i-1))에는 그전까지의 최장 공통 문자열이 있기 때문에 xi,yi만 비교하면 된다. 현재 두 문자(xi, yi)가 같을때 **두 문자의 앞 글자까지가 공통 문자열이라면 계속 공통 문자열이 이어질 것**
  이고, 아니라면 본인부터 다시 공통 문자열을 만들어 가게 될 것이다.

이를 점화식으로 표현하면 아래와 같다.

```python
if i == 0 or j == 0:  # 마진 설정
	LCS[i][j] = 0
elif X[i] == Y[j]:
	LCS[i][j] = LCS[i - 1][j - 1] + 1
else:
	LCS[i][j] = 0
```

길이가 증가하기 때문에 작은 수부터 테이블을 채우면 된다.

## 최장 공통 부분수열(Longest Common Subsequence)

부분수열이기 때문에 문자 사이를 건너뛰어 공통되면서 가장 긴 부분 문자열을 찾으면 된다.

위의 예시에서 (Xn: abcedsf, Yn: kabcqs) 최장 공통 부분수열은 (`abc`ed`s`f, k`abc`q`s`)로 abcs가 된다.

최장 공통 부분 수열은 다이나믹 프로그래밍을 활용해서 구할 수 있다.

다이나믹 프로그래밍은 부분문제의 해로 큰 문제의 해를 구할 수 있을 때 활용할 수 있다. 적당한 순서로 DP테이블 채우면 된다.

LCS(Xn, Yn)을 Xn과 Yn의 최장 공통 부분수열의 길이라고 하자.

더욱 간단하게 표현, LSC(i,j)를 Xi와 Yi의 최장 공통 부분 수열의 길이라고 할 수 있다.

- Xi = x1, x2, … ,x(i-1), xi
- Yi = y1, y2, …y(i-1), yi

이 때, 우리가 비교할 부분은 xi와 yi이다. 위의 예시에서 (xi,yi)가 같다면 (x(i-1), y(i-1))에는 그전까지의 최장 공통 부분 수열(LCS(x(i-1), y(i-1)))이 있기 때문에 xi,yi만 비교하면 된다.

- xi === yi
  - **두 문자의 앞 글자까지가 공통 부분 수열이라면 계속 공통 부분 수열이 이어질 것이다.**
  - 따라서 ,LCS(x(i-1), y(i-1))의 값에 +1을 추가한다.
- xi ≠ yi
  - xi와 yi가 동시에 뽑히는 경우는 없다(xi === yi는 위에서 이미 확인했기 떄문)
  - 따라서, xi와 yi 중 하나가 뽑히는 경우와 둘다 뽑히지 않은 경우를 확인하면 된다. 그리고 가장 긴 공통 부분 수열 중 큰 값을 선택하면 된다.
  - xi가 안뽑히는 경우: LCS(x(i-1), yi)
  - yi가 안뽑히는 경우: LCS(xi, y(i-1))

점화식을 정리하면 아래와 같이 표현하 수 있다.

```python
if i == 0 or j == 0:  # 마진 설정
	LCS[i][j] = 0
elif string_A[i] == string_B[j]:
	LCS[i][j] = LCS[i - 1][j - 1] + 1
else:
	LCS[i][j] = max(LCS[i - 1][j], LCS[i][j - 1])
```

길이가 증가하기 때문에 작은 수부터 테이블을 채우면 된다.

## **최장 공통 부분수열(Longest Common Subsequence) 찾기**

경우에 따라 여러가지 답이 나올 수 있다.

```python
LCS 배열의 가장 마지막 값에서 시작
결과값을 저장할 result 배열을 준비.
⭐️ LCS[i - 1][j]와 LCS[i][j - 1] 중 현재 값과 같은 값을 찾기
	- 만약 같은 값이 있다면 해당 값으로 이동
	- 만약 같은 값이 없다면 result배열에 해당 문자를 넣고 LCS[i -1][j - 1]로 이동
⭐️ 과정을 반복하다가 0으로 이동하게 되면 종료
result 배열의 역순이 LCS가 된다.
```

## 참고 자료

- [https://velog.io/@emplam27/알고리즘-그림으로-알아보는-LCS-알고리즘-Longest-Common-Substring와-Longest-Common-Subsequence](https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence)
- [알고리즘 - 동적계획법 - LCS 문제](https://youtu.be/EAXDUxVYquY)
