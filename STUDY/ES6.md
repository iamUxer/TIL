# ES6

# 2018년 11월 10일 2주차

## default parameter
> 함수 몸통에 전달시킬 매개 변수, 값이 없을 때는 undefined로 간주된다.
```
function tossParameters(param1, param2 = 123){
    구현 로직
};
```

## template literals
> 따옴표 대신 grave accent를 사용해서 코드상에 문자 표현 및 문자 보간 기능을 사용 할 수 있다. 표현식을 허용한다 >> ${expression interpolation}
```
var user = 'yuri';

console.log(`My name is ${user}`);

> My name is yuri
```

# 2018년 11월 17일 3주차 복습

## let & const
> 두 타입 모두 재선언이 불가능하다.
> let은 선언 후에 할당이 가능하고, 재할당 또한 가능하다.
```
let foo;
foo = 1; //선언 후 할당
foo = 2; //재할당
```
> const는 선언과 동시에 할당을 해야한다. 재할당은 불가능하고, 메소드를 통한 값의 변형만 가능하다.
```
const foo = [];
foo.push(1); //값의 변형
foo

> [1]
```
> 
## arrow function
> ES6 이전 버전
```
// 기명 함수
const function foo(params){
    return abc;
}
// 익명 함수
function (params){
    return abc;
}   
```
> ES6 버전
```
// 기명 함수
const foo = params => { 
    return abc
};
// 익명 함수
params => { 
    return abc
};
```
> 매개변수가 하나 일 때, 괄호는 생략 가능.

## 블록 레벨 scope
> {} 중괄호 단위로 유효 범위를 갖는다.

## includes
> array.includes()는 배열에 조건 요소가 들어있는지 검사하고 true 또는 false로 반환한다.
```
const array = [1, 2, 3];

console.log(array.includes(2));

> true

```
> string.includes()는 문자열에 조건 요소가 들어있는지 검사하고 true 또는 false로 반환한다.
```
const string = 'javascript study is very interesting';

var word = 'study';

console.log(`The word "${word}" ${string.includes(word)? 'is' : 'is not'} in the string.`);

> The word "study" is in the string.

```
## array destructuring assignment(구조 분해 할당)
> 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식, const에서는 작동할 수 없다.
```
let a, b, rest;
[a, b] = [10, 20];

> rest
undefined
> a
10
> b
20
```

# 2018년 11월 28일 4주차 복습

## Lexical scope

