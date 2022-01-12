# VSCODE-NodeJS debugging 정리

이 문서는 vscode 공식홈페이지의 debugging문서를 정리한 내용입니다.

> https://code.visualstudio.com/docs/editor/debugging <br/> > https://docs.microsoft.com/ko-kr/visualstudio/debugger/watch-and-quickwatch-windows?view=vs-2022

# Debugging with VSC

: VSC에서 디버깅

VSC는 기본으로 디버거를 제공한다. 편집, 컴파일 및 디버그 루프를 가속화하는데 도움이 된다.

VSC는 Node.js 런타임에 대한 디버깅 지원 기능이 내장되어 있으며 JS, TS 또는 JS로 변환되는 다른 언어를 디버깅할 수 있다. 그 외 언어들은 extension을 추가해서 디버깅 가능하다. 아래 설명할 디버깅 과정은 Node.js 디버거를 기반으로 하지만 대부분의 개념과 기느은 다른 디버거에도 적용할 수 있다.

> ## Run view

<br/>
<img src="https://user-images.githubusercontent.com/71386219/147244821-a2e25ebf-8756-4280-ae8f-e9778152ff02.png"  alt="run-view"/>

실행보기를 표시하려면 `Activity Bar`의 `Run icon`을 선택하거나 `Ctrl+Shift+D`단축키 입력하면 됨.

> ## Launch configurations

<br/>
<img src="https://user-images.githubusercontent.com/71386219/147244945-c77f19f4-dbce-4cab-aa20-6e48cf205166.png"  alt="create-launch"/>

VSC에서 간단한 앱을 실행하거나 디버깅하기 위해서 `Debug 시작 보기`에서 `Run and Debug`를 선택하거나 `F5` 키를 누르면 VSC가 현재 활성 파일을 실행하려고 시도함.

여기에 `launch configuration`파일을 만들면 디버깅 설정 세부 정보를 구성하고 저장할 수 있다.

VSC작업 공간(프로젝트 루트 폴더)에 `.vcode` 폴더를 만들고 `lauch.json`파일을 아래 코드처럼 구성하기. (실행 시작 보기에서 `create a launch.json file`를 클릭)

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\app.js"
    }
  ]
}
```

`name`: 실행 목록에 들어가므로 구분이 가능한 이름으로 변경

`program`: NodeJS 실행 시작 파일의 위치와 파일명

> ## Launch versus attach configurations

:실행 및 연결 구성

VSC의 핵심 디버깅 모드 2가지

- `Launch`
- `Attach`

### Launch

- VSC가 첨부되기 전 디버그 모드에서 앱을 시작하는 방법

### Attach

- VSC의 디버거를 이미 실행 중인 앱이나 프로세스에 연결하는 방법

> ## Add a new configuration

: 실행목록 추가하기

<br/>
<img src="https://user-images.githubusercontent.com/71386219/147244979-9d141160-aa1b-479c-b298-9e5aca97b399.gif"  alt="new-config"/>

기존 launch.json에 새 구성을 추가하는 3가지 방법

- 커서가 구성 배열 안에 있는 경우 `IntelliSense`를 사용합니다.
- 배열 시작 시 IntelliSense 스니펫을 호출하려면 `Add Configuration` 버튼을 누릅니다.
- 실행 메뉴에서 `Add Configuration`을 선택합니다.

> Intellisense: `(Ctrl+Space)`을 사용하여 특정 디버거에 대한 특성 확인 가능. 모든 특성에 대해서도 `Hover Help`를 통해 모든 특성 사용가능.

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245008-fc635bad-7fc7-49a6-a353-90166f84987b.png"  alt="add-config"/>

# Start Debugging

: 디버깅 시작하기

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245040-3de79a1e-404b-427b-a795-491524a5ab5c.png"  alt="start"/>

디버그 세션을 시작하려면 먼저 Run view에서 ` Configuration dropdown`을 사용하여 `Launch Program`이라는 구성 선택.

시작 구성이 설정되면 `F5`로 디버그 세션을 시작.

# Breakpoints

: breakpoints란
코드 실행 중 멈추고(break) 싶은 부분(point)라고 할 수 있다.

breakpoints를 설정하면 해당 부분에서 variables와 call stack을 확인할 수 있다.

**breakpoints사용 방법**

- editor의 `여백 클릭`
- 현재 줄에서 `F9` 사용

**여백 도형의 의미**

- 빨간 원: 사용 가능한 breakpoint
- 회색 원: 사용할 수 없는 breakpoint

**추가적인 breakpoint**

- 디버거가 `다양한 종류의 오류` 혹은 `예외 대한 중단`을 지원하는 경우 breakpoints 보기에서 사용가능

**Reapply All Breakpoints**

- 모든 breakpoint를 원래 위치로 설정

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245075-dc416d85-a634-4e8b-954a-5230fe175607.png"  alt="breakpoints"/>

Debug.showBreakpointsInOverviewRuler

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245105-dcf3a2ba-4ee3-4906-b2ca-3de2dd911a85.png"  alt="bpts-in-overview"/>

# 화면 구성

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245129-3cff05d2-2a8d-4dcd-9983-2ca49ae5a4a1.png"  alt="screen"/>

- 작업 실행목록(variables)
- 디버깅 동작들(debug actions)
- 디버킹 콘솔(console)
- Watch
- 호출 스택(call stack)

> ## Variables

:실행 시점의 변수 정보 표시

변수 값을 더블 클릭하면 새로운 값으로 수정 가능

- global: 전역 변수
- local: 지역 변수
- closure: 클로저 변수

> ## Callstack

: 함수와 메서드가 호출되는 순서 표시

### 의미

- 콜스택은 후입선출(LIFO)을 기본으로하는 자료구조이다.
- 콜스택을 통해 프로그램 내의 함수의 호출(`코드의 실행 순서`)을 기록
- 함수가 호출되면 스택에 추가
- 스택에 쌓여 있다가 맨 마지막에 호출된 함수부터 실행되면서 스택에서 제거됨.

### 예시

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245165-abbb7e27-2e24-415c-babb-5d4a4987f90a.gif"  alt="callstack"/>

> ## Watch

: 디버깅하는 동안 `Watch windows`와 `QuickWatch`를 사용하여 `breakpoints`에서의 `변수와 식`을 볼 수 있다.

### 사용방법

- watch 섹션의 `빈 공간` 더블클릭 혹은 `우측 상단의 ➕버튼` 클릭 후 검사하고자 하는 변수 또는 식 추가.

### 활용

- 변수 타입 체크, 변수 확인 등
- 아래 예시 참고

> ## Debug Toolbar

### continue

- 다음 breakpoint로 이동

### step over

- 해당 라인 실행 후 다음 라인에서 정지
- 다음 라인이 함수일 경우 함수 내부로 이동하지 않고 바로 실행

### step into

- 해당 라인 실행 후 다음 라인에서 정지
- 다음 라인이 함수일 경우 함수 내부로 접근하여 함수내부의 동작을 실행
- 함수가 여러 개 중첩되어 있는 경우 가장 깊숙히 중첩되어 있는 함수가지 이동

### step out

- 현재 함수의 나머지 부분을 실핼시키고 함수의 리턴이 완료된 곳에서 일시정지

## Watch, Callstack, continue 사용 예시

<br/> <img src="https://user-images.githubusercontent.com/71386219/147245205-8533014f-5d3d-4295-a9b4-8dc1994c9991.gif"  alt="step"/>

# 추가 사항

- 아직 step into와 step over의 차이점을 모르겠다.
