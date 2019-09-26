# React

##Class Components
```js
class Hello extens Component {
  render() {
    return <div> Hello, World! </div>
  }
}

```

##Functional Components

```js
// 함수 선언을 이용한 정의
function Hello() {
  return <div> Hello, World! </div>
}

// 함수 표현식
const Hello = () => {
  return <div> Hello, World! </div>
}

```

##styled Component

```js
// 변수명으로 선언하여 export해주고 모듈화하여 공통으로 사용가능

//기본 html element
const myBTN = styled.div`
  background: red;
`
//외부 UI 프레임웤 사용ex
const myBTN = style(Button)`
 background: red;
`
```

```js
//모듈화 할때

export const myBTN = styled.div`
  background: red;
`
```
