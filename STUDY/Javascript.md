# JS

#### 2018년 11월 10일 2주차 복습

## Truthy, Falsy
> Truthy 값은 Boolean 논리적 연산자를 통해 값이 참으로 간주되는 것.

> Falsy 값은 Boolean 논리적 연산자를 통해 값이 거짓으로 간주되는 것.
``` 
- Falsy -
    if (false)
    if (null)
    if (undefined)
    if (0)
    if (NaN)
    if ('')
    if ("")
    if (document.all)
```
## AND, OR
> AND는 좌항과 우항이 모두 TRUE 일 때 우항 값을 반환한다. 
모든 항이 TRUE 인지 검사를 해야하기 때문에 마지막 값 까지 체크하고 마지막 값을 반환하는 것.
```
var andBoolean = 123 && 456;
console.log(andBoolean)

> 456
```
> OR는 좌항 또는 우항 중, 하나라도 TRUE 일 때 첫 번째 TRUE 값 피연산자를 반환한다. 하나의 항이라도 TRUE 값이 나오면 되기 때문에 첫 번째로 체크된 TRUE 값을 반환한다.
```
var orBoolean = 123 || 456;
console.log(orBoolean);
> 123
```
> AND와 OR 모두 논리 값이 존재할 때는 TRUE 또는 FALSE로 반환

## arguments
> 함수에 전달될 인수들, 배열 형태의 객체. 유사 배열이기 때문에 배열 메소드를 포함하지 않는다.
```
function name(a, b, c){
    구현 로직
};

name(arg1, arg2, arg3); 
```
## declaration
> 데이터를 할당하기에 앞서 변수명으로 선언하는 것

> 함수는 생성 자체로 선언과 할당이 동시에 일어나는 듯?
```
var variation;
```
## assign
> 선언한 변수에 값을 할당하는 것
```
var variation = 'value';
var funcDeclaration = function (){

}
```
## function
> 내부에 기능을 포함하고 있는 객체
```
1-1. 함수 선언식 : 익명함수
function (){
    구현 로직
};

1-2. 함수 선언식 : 기명함수
function name(){
    구현 로직
};

2. 함수 표현식
const newFunc = function(){
    구현 로직
};
```

## hoisting
> 자바스크립트는 선언을 코드가 생성된 위치와 상관없이 위로 끌어올려 해석한다.
```
- 실제 코드
    a = 1;

    console.log(a);
    newFunc();

    var a;

    function newFunc(){
        console.log('hoisting');
    }

- 코드 해석
    var a;
    function newFunc(){
        console.log('hoisting');
    }
    //선언 부분을 끌어올림 한다.

    a = 1;

    console.log(a);
    newFunc();

    //실행결과
    > 1
    > hoisting
```

## setInterval
> 일정 시간마다 반복하는 함수
```
setInterval(function() {
    구현 로직
}, 지연시간);
```

#### 2018년 11월 10일 3주차 예습

## 값 (value)
> 값은 데이터고 타입이 있다.
```
1. undefined
2. null
3. boolean - true, false
4. number - 1, 2, 0.3, NaN, infinity, -infinity..
5. string - a, b, \n..
6. symbol
7. object - function(){}, [], {}, /a/
```
## 식 (expression)
> 연산을 실행했을 때 값을 반환하는 표현식? 그 값은 변수에 할당될 수 있다.
```
console.log(a+1);
```
## 문 (statement)
> 변수에 할당 될 수 없는 연산이 아닌 구문
```
1.변수 선언문
    var a;
2.변수 할당문
    a = 0;
3.함수 선언문
    function x(){}
4.조건문
    if(a < 1){}
5.반복문
    for(a > -3){}
6.함수 호출문
    x();
7. ...
```


## var
> 

## 함수 단위 scope
## null & undefined
## TDZ
## array.prototype (map, filter, reduce, sort)
## 객체 속성 접근자 (property accessor)
## 생성자 함수
## new 키워드