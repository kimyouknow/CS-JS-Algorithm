# 해쉬

`해시함수(hash function)`란 데이터의 효율적인 관리를 목적으로 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수

## 핵심구조

`hashFn(key) -> hashcode -> index -> value`

> 검색하고자하는 key값을 입력받아서 해쉬 함수를 돌려서 반환받은 해쉬코드를 배열의 인덱스로 변환해서 데이터에 접근하는 자료구조

## 용어

`키(key)`

- 매핑 전 데이터 원본

`해시 값(hash value)`

- 매핑 후 데이터 값

`해싱(hashing)`

- 매핑하는 과정

`해시 함수(hash function)`

- 해싱작업을 해주는 함수

`해시 테이블(hash table)`

- 해시 함수를 사용하여 키를 해시 값으로 매칭하고, 이 해시값을 색인(index) 혹은 주소 삼아 데이터의 값(value)를 키와 함께 저장하는 자료구조
- 데이터가 저장되는 곳을 `버킷(bucket)`혹은 `슬록(slot)`이라고 한다.

## 장점

### 접근성

- 데이터 엑세스(삽입, 삭제 ,탐색)시 O(1)의 시간복잡도를 가진다.

### 보안성

- 키와 해시값 사이에 직접적인 연관이 없기 때문에 해시 값만 가지고 키값을 온전히 복원하기 어려움.

## 단점

### 미리정해진 길이

- 데이터의 크기(길이)가 가변적이면 문제가 발생

### 충돌(collision)

- differnet keys -> saurce code: key값은 문자열이고 가지수가 무한하지만 해쉬코드는 정수개밖에 제공해서 중복되는 해쉬코드를 가질 수 밖에 없다.
- differnet code -> same index: 서로다른 해쉬코드를 만들어도 배열 방이 한정되어 있어 같은 배열 방을 씀.
- 충돌을 효과적으로 방지하고 처리하기 위해 해쉬 알고리즘이 사용된다.

## 해쉬 알고리즘

## 활용

🔍 참고자료

- https://ratsgo.github.io/data%20structure&algorithm/2017/10/25/hash/
- [엔지니어대한민국 - 유튜브](https://youtu.be/Vi0hauJemxA)
- [코드없는 프로그래밍 - 유튜브](https://youtu.be/y-0DZ1MFN1g)
- [우테코: hash function - 유뷰브](https://youtu.be/Rpbj6jMYKag)
