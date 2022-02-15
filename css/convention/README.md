# Naming convention 및 rules

[Methodology - Naming convention 번역 및 정리](https://en.bem.info/methodology/naming-convention/)

`naming 규칙의 주요 목적`은 이름에 `의미를 부여`하여 개발자에게 가능한 많은 `정보를 제공`하고, `디버깅에 도움`을 주는 것.

# Naming rules

## BEM

CSS 제작 방법론으로, 일종의 네이밍 컨벤션이라고 볼 수 있다. 개발, 디버깅, 유지보수를 위해 가능한 명확하게 네이밍하는 것이 목표.

## BEM Naming rules

- 무엇을 하는지
- 어디서 사용하는지
- class들의 관계

```css
block-name__elem-name_mod-name_mod-val
// 형태>의미>순서_상태
```

`Block`: 독립적으로 분리할 수 있는 것들. nav, header, footer 등등, 블록은 블록을 포함할 수 있다.

```css
.stick-man {
}
```

`Element`: Block의 구성 요소들

```css
.stick-man__head {
}
.stick-man__body {
}
```

`Modifier`: 수식어

```css
.stick-man__head_size_big {
}
.stick-man__head-size_small {
}
```

- 소문자, 숫자만 조합
- 단어는 `하이픈(-)`으로 구분
- 블록 이름(block-name)은 해당 요소 및 수정자의 네임스페이스를 정의
- 요소 이름(elem-name)은 `이중 밑줄(__)`로 블록 이름과 구분
- 수정자 이름(mod-name)은 `단일 밑줄(_)`로 블록 또는 요소 이름과 구분됩니다.
- 수정자 값(od-val)은 `단일 밑줄(_)`로 수정자 이름과 구분됩니다.
- 부울 수정자의 경우 값이 이름에 포함되지 않습니다.

# 예시 및 주의사항

모든 예시는 [해당링크](https://naradesign.github.io/bem-by-example.html) 이 곳에서 가져왔습니다.

## 네임스페이싱

| 구분             | 접두사 | 예시                       | 설명                                                                                                                                                     |
| ---------------- | ------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Component        | c-     | c-card c-checklist         | 애플리케이션의 백본을 형성하고 독립형 구성 요소에 대한 모든 외관을 포함합니다.                                                                           |
| Layout module    | l-     | l-grid l-container         | 이 모듈은 외관이 없으며 순전히 c- 구성 요소를 배치하고 응용 프로그램의 레이아웃을 구성하는 데 사용됩니다.                                                |
| Helpers          | h-     | h-show h-hide              | 이러한 유틸리티 클래스에는 단일 기능이 있으며 종종 !important를 사용하여 특수성을 높입니다. (일반적으로 위치 지정 또는 가시성을 위해 사용됩니다.)        |
| States           | is-    | has-vis-visible has-loaded | c- 구성 요소가 가질 수 있는 다른 상태를 나타냅니다.                                                                                                      |
| JavaScript hooks | js-    | js-tab-switcher            | JavaScript 동작이 구성 요소에 연결되었음을 나타냅니다. 스타일과 연관되어서는 안 됩니다. 스크립트로 더 쉽게 조작할 수 있도록 하기 위해 순전히 사용됩니다. |

## 변경자가 있는 구성 요소

변형이 있을 경우 변형은 변경자 클래스로 구현한다. 단, 변경자 클래스만 사용하면 안 된다. 대체가 아닌 확장하기 위한 것이다.

```css
<!-- DO THIS / 역자 주 / btn 구성 요소에 --submit 변경자를 추가해서 확장했다 -->
<button class="btn btn--submit"></button>

<style>
  .btn {
    display: inline-block;
    color: blue;
  }
  .btn--submit {
    color: green;
  }
</style>

<!-- DON'T DO THIS / 이렇게 하지 마세요 -->
<button class="btn--secondary"></button>

<style>
  .btn--secondary {
    display: inline-block;
    color: green;
  }
</style>
```

## 하위 요소가 있는 구성 요소

BEM의 목적 중 하나는 특이성을 낮추고 일관성 있게 유지하는 것이다. HTML의 하위 요소에서 클래스 이름을 생략하지 않아야 한다. 클래스 이름을 생략하면 당장은 장황한 클래스 이름을 사용하지 않아서 더 간결해 보일 수 있지만 결국 나중엔 특이성이 증가해 디버깅 및 의미 파악이 더욱 어렵게 된다.

```css
<!-- DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">Look at me!</figcaption>
</figure>

<style>
  .photo { } /* 특이성 10 */
  .photo__img { } /* 특이성 10 */
  .photo__caption { } /* 특이성 10 */
</style>

<!-- DON'T DO THIS / 이렇게 하지 마세요 -->
<figure class="photo">
  <img src="me.jpg">
  <figcaption>Look at me!</figcaption>
</figure>

<style>
  .photo { } /* 특이성 10 */
  .photo img { } /* 특이성 11 */
  .photo figcaption { } /* 특이성 11 */
</style>
```

하지만 구성 요소에 여러 수준의 하위 요소가 있는 경우 클래스 이름에 각 수준을 나타내면 안 된다. BEM은 구조의 깊이를 전달하지 않는다.구성 요소의 하위 요소를 나타내는 BEM클래스 이름은 오직 기본 블록 이름과 하나의 요소 이름만 허용한다.

```css
<!-- DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__quote">
      Look at me!
    </blockquote>
  </figcaption>
</figure>

<style>
  .photo { }
  .photo__img { }
  .photo__caption { }
  .photo__quote { }
</style>


<!-- DON'T DO THIS / 이렇게 하지 마세요 -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__caption__quote"> <!-- 클래스 이름에 여러 하위 요소(또는 구조)를 명명하지 말 것 -->
      Look at me!
    </blockquote>
  </figcaption>
</figure>

<style>
  .photo { }
  .photo__img { }
  .photo__caption { }
  .photo__caption__quote { } /* 역자 주: 초심자의 가장 흔한 실수다 */
</style>
```

🔍 참고자료

- [CSS-naming-methodologyBEM - velog](https://velog.io/@2seunghye/CSS-naming-methodologyBEM)
- [[번역] 디버깅 시간을 절약할 수 있는 CSS 네이밍](https://blog.sonim1.com/221)
- [예제로 이해하는 BEM.](https://naradesign.github.io/bem-by-example.html)
- [Battling BEM CSS: 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
- [https://github.com/airbnb/css#css](https://github.com/airbnb/css#css)
