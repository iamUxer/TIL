# ES6

#### 2018년 11월 10일 2주차

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
