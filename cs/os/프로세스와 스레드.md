📌 목차

# 프로그램

명령어들의 모음을 포함한 디스크에 저장된 파일

# 프로세스

- 프로그램이 실행되어 돌아가고 있는 상태
- 컴퓨터가 어떤 일을 하는 상태
- 운영체제는 여러 프로세스를 동시에 돌리고 있음.
- 프로세스는 하나 이상의 [스레드](#스레드)를 가진다.
- 프로세스가 생성될 때 [pcb](#pcb)가 생성된다.

## pcb (❓)

- `os가 프로세스 관리에 필요한 정보 저장해 놓은 곳`
- 일반 사용자가 접근하지 못하도록 보호된 메모리 영역 안에 남는다. 일부 운영 체제에서 PCB는 커널 스택의 처음에 위치
- 프로세스 상태 정보를 저장하는 구조체
- 프로세스 상태관리와 context switching을 위해 필요하다.
- 프로세스 생성시, 생성 됨.
- `context switching의 수행과정과 pcb역할`
  - p0을 실행하다가 interrupt이 걸리면 pcb0에 cpu에서 수행되던 레지스터 정보와 p0관련 정보를 저장하고, pcb1에 있던 p1정보를 불러와 실행
- 구성
  - 프로세스 식별자(process ID)
  - 프로세스 상태
  - 다음에 실행할 명령어 주소
  - 이전에 작업하던 작업 내용(레지스터)
  - cpu 스케줄링 정보(우선 순위, 최종 실행시각, cpu 점유시간 등)
  - 프로세스의 주소 공간 등

## 프로세스 문맥

- https://zangzangs.tistory.com/108

## 프로세스 주소 공간

Process Address Space

- `코드부분`(프로그램 소스 코드), `데이터부분`(전역 변수 등), `스택부분`(함수나 지역변수 등)으로 구분.
- 프로그램이 실행되면 프로세스 주소 공간(Process Address Space)이 메모리에 할당(생성)됨. -> 할당된 프로세스를 실행시키는 것이 cpu
- 프로그램이나 프로세스가 액세스 할 수있는 메모리

## 프로세스 상태

- two-state, five-state, seven-state 모델이 있다. 그 중` five-state`기준으로 설명

- 프로세스는 실행되면서 아래의 5가지 상태 변화를 겪음
- `Created State(new)`: 작업을 커널에 등록, pcb할당 및 프로세스 생성, 메모리 공간을 체크해 프로세스 생성.
- `Ready`: 프로그램이 메인 메모리에 적재되어 있는 상태, cpu에 의해 실행되기를 기다리는 상태, cpu만 있으면 즉시 실행 가능, 준비상태 프로세스들은 큐에서 대기
- `Running`: cpu가 해당 프로세스를 실행한 상태, 프로세서와 필요한 자원을 모두 할당 받은 상태
- `Waiting`: CPU를 할당해주어도 실행할 수 없는 상태이다.(I/O request, 다른 프로세스가 끝날 때까지 대기 등등)
- `terminated`: 프로세스가 완전히 종료, 할당 자원 반납

## 프로세스 상태 전이

Context Switching

- `프로세스의 상태 정보를 저장하고 복원하는 일련의 과정`(동작 중인 프로세스가 대기하면서 해당 프로세스의 상태를 보관하고, 대기하던 다음 프로세스가 동작하면서 이전에 보관했던 프로세스 상태를 복구하는 과정)
- 프로세스는 독립된 메모리 영역을 할당받아 사용하므로, 무거운 작업이 진행되었을 때 오버헤드가 발생할 수 있다.
- 생성 -> 준비 -> 실행 <-> 대기 -> 종료까지 크게 5가지 상태가 있다.
- `Admit`(new -> ready): os가 ready단계로 허락해야 넘어갈 수 있다.
- `Dispatch`(ready -> running): 여러 프로세스 중 하나를 선정하여 `cpu에 할당`
- `Interrupt(Preemption)` (running -> ready): 할당된 cpu시간이 지나면 timeout interrupt이 발생하여 cpu를 다른 프로세스에게 양도, 자신은 ready상태로 전이
- `Block/sleep` (running -> waiting): 입출력, 등의 자원요청 후 즉시 할당받을 수 없어 할당받을 때까지 기다리기 위해 running -> waiting으로 전이되는 과정
- `Wakeup` (waiting -> ready): 필요한 자원이 할당될 때 다시 waiting에서 ready로 전이

🔍 참고자료

- https://code-lab1.tistory.com/38
- https://yoongrammer.tistory.com/51
- https://velog.io/@zooneon/OS-Process-State
- https://www.youtube.com/watch?v=_gNeoGQx-Tc
- https://www.youtube.com/watch?v=DmZnOg5Ced8
- https://www.youtube.com/watch?v=-4HKhwlH3FQ
- https://www.youtube.com/watch?v=jZuTw2tRT7w&list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN&index=5
- https://gyoogle.dev/blog/computer-science/operating-system/Process%20vs%20Thread.html

# 스레드

- 경량화된 프로세스 버전
- 프로세스에서 실행 제어만 분리해서 처리하는 단위
- 하나의 프로세스 안에 다수의 스레드가 있을 때, `공유되는 자원`이 있음.
- 메모리 영역에서 스레드는 `코드, 데이터, 힙 영역`을 `공통된 자원`으로 사용함.
- `각 스레드는 스택 부분만을 따로 가지고 있음.`
- 공유되는 자원이 있기 때문에 컨텍스트스위칭이 일어날 떄 캐싱 적중률이 올라감. (모조리 다 빼고 다시 넣을 필요 없음)

## tcb(❓)

- 스레드(thread)별로 존재하는 자료구조, pc와 register set, pcb를 가리키는 포인터를 가짐.
- TCB는 커널 레벨에서 Context Switching의 기본 단위가 되며, 같은 프로세스에서의 스위칭에 대해서는 TCB 정보만 저장
- 다른 프로세스 간의 스위칭을 할 때에는 PCB / TCB 정보를 모두 저장

🔍 참고자료

- https://2oneweek.dev/common/computer-science/os/multi-thread/
- https://www.youtube.com/watch?v=1grtWKqTn50
- https://www.youtube.com/watch?v=iks_Xb9DtTM&t=1s

# 멀티 프로세스와 멀티 스레드

## 멀티 프로세스

- 한 프로세스는 하나의 작업만 처리 가능
- 동시 처리를 위해 부모 프로세스가 fork를 통해 여러 개의 자식 프로세스를 만들어서 일을 처리
- 자식 프로세스는 부모와 별개의 메모리 영역을 확보
- 각 프로세스가 독립적
- 개별 메모리를 차지해 자원이 소모적이다.
- 컨텍스트 스위칭 비용이 크다.

## 멀티 스레드

- 한 프로세스 내에 구분지어진 실행 단위
- 프로세스가 다수의 스레드로 구분되어 있지 않다면 단일 스레드 하나로 프로세스가 실행. 이 스레드가 실행단위가 되어 프로세스가 실행단위가 된 것처럼 보임.
- 하나의 어플리케이션 내 여러 작업
- 스레드끼리 긴밀히 연결되어 있다. -> 한 스레드에 문제가 생기면 전체 프로세스에 영향을 감.(안정성문제)
- 공유된 자원으로 통신 비용 절감
- 컨텍스트 스위칭 비용이 작다.
- 공유 자원 관리를 해야한다.

## 멀티 코어

- 하드웨어적인 측면에 가까움
- 싱글코어: 동시성을 활용
- 멀티코어: 병렬처리, 물리적으로 여러 코어를 사용하여 하나 이상의 프로세스(혹은 스레드)가 진행되는 것.

🔍 참고자료

- https://www.youtube.com/watch?v=1grtWKqTn50
- https://gyoogle.dev/blog/computer-science/operating-system/Process%20vs%20Thread.html

# 스케줄링

- https://woo-dev.tistory.com/148

## 프로세스 스케줄링

## 스레드 스케줄링

## 스케줄링 기법
