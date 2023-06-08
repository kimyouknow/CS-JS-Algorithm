# 우선순위 큐

pop을 할 때 가장 먼저 들어온 원소가 나오는 대신 우선순위가 가장 높은 원소가 나오는 큐

힙을 사용해서 우선순위 큐를 만든다고 했을 때, `힙의 키를 우선순위로 사용한다면 힙은 우선순위 큐의 구현체가 된다`.

⇒ 우선순위 큐 : ADT, 힙: data structure

### 활용사례

cpu의 프로세스 스케줄링에서 사용된다. 하나의 cpu가 있고, 멀티 프로세싱을 위해 4가지의 프로세스가 실행되어야 한다고 가정해보자. cpu를 선점한 프로세스 외에 나머지 프로세스들은 ready queue에서 대기하게 되는데 이 때, ready queue가 우선순위 큐가 될 수 있다. 다음 프로세스가 실행되어야 할 때, ready queue에서 우선순위가 가장 높은 프로세스가 실행된다.

## 우선순위 큐의 특징

1. 원소의 추가 : O(lg N)
2. 우순순위가 가장 높은 원소의 확인: O(1)
3. 우선순위가 가장 높은 원소의 제거: O(lg N)

## 주요동작

insert: 큐에 아이템 삽입

delete: 우선순위가 가장 높은 아이템 제거

peek: 우선순위가 가장 높은 아이템 출력

## 우선순위 큐 구현 방법

### 단순 리스트

삽입 : O(1)

삭제: O(N)

### 힙

삽입 : O(logN)

삭제: O(logN)

[힙 구현](/datastructure/Heap/REAMDE.md)을 상속받아서 구현

## 참고자료

[https://yoongrammer.tistory.com/81](https://yoongrammer.tistory.com/81)

[https://www.youtube.com/watch?v=P-FTb1faxlo](https://www.youtube.com/watch?v=P-FTb1faxlo)
