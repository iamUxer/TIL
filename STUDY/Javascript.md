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

#### 2018년 11월 17일 3주차 복습

## var
> 선언하고자 하는 이름으로 변수를 선언함, 값의 재할당이 가능하다.
```
var variation;
```

## 함수 단위 scope
> 함수안에서 유효범위를 갖는다. 
```
var a = 1;

function outer(){
    console.log(a); //위의 a 참조 1

    function inner(){
        console.log(a);  //호이스팅 발생 var a; > undefined
        var a = 3;
    }

    inner(); // undefined

    console.log(a); //같은 유효범위에 있는 바깥 a 참조 1
}

outer(); // 1, undefined, 1

console.log(a); //1

> 1
> undefined
> 1
> 1
```
## null & undefined
> null은 선언과 할당이 되었지만, 값이나 자료형이 없다.
```
var foo = null;
fool

> null
```
> undefined는 선언은 되었지만 값이 할당되지 않았다.
```
var foo;
foo;

> undefined
```
> null과 undefined의 차이점
```
* 동등연산자 == 는 형변환을 일으키는 것에 주의

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```
## TDZ(temporal dead zone)
> 

## array.prototype (map, filter, reduce, sort)
> prototype 이란 해당 객체의 원형 객체로 메소드가 명시되어 있고, 새로운 기능을 만들어서 내장시킬 수 있다. 콘솔창에는 __proto__ 로 표시된다.

> array.map()는 가지고 있는 배열의 모든 요소를 함수로 실행시켜 값을 반환하여 그 값을 모아 새로운 배열을 만들어 반환시킨다.
```
const fooArray = [1, 2, 3];

const doubles = fooArray.map(x => { 
    return x * 2
});

console.log(dougles);

> [2, 4, 6]
```

> array.filter()는 배열의 각 요소를 판별 함수로 통과시켜 새로운 배열로 반환한다.
```
const fooArray = [1, 2, 3];

const boolean = fooArray.filter(x => { 
    return x < 4
});

console.log(boolean);

> [1, 2, 3]
```

> array.reduce()는 왼쪽 요소에서 오른쪽 요소를 누적합산하여 단일 값으로 반환한다.
```
const array = [1, 2, 3, 4, 5];
const reducer = (paramA, paramB) => {
    return paramA + paramB
};

console.log(array.reduce(reducer));

console.log(array.reduce(reducer, 5)); //초기값 5;

> 15
> 20
```

> array.sort()는 왼쪽 요소와 오른쪽 요소를 비요하여 조건에 따라 해당 배열을 재정렬한다. 새로운 배열로 반환하는 것이 아닌, 해당 배열을 직접 재정렬한다.

```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;  // 오름차순 정렬
});
console.log(numbers);

> [1, 2, 3, 4, 5]

return b - a는 내림차순

if( a > b )와 같이 비교연산의 경우 조건에 만족했을 때,
return값으로 -1(음수)이면 a를 b보다 낮은 색인으로 정렬
return값으로 1(양수)이면 a를 b보다 높은 색인으로 정렬
```

## 객체 속성 접근자 (property accessor)
> array.in

## 생성자 함수
> new 키워드로 객체를 생성하는 함수이고, 이름이 대문자로 시작하는 것을 규칙으로 한다.
```
function Student(name){
        this.name = name;
    }
    
const student = new Student('Yuri');

console.log(student.name);
```

## new 키워드? new 연산자
> 객체를 위한 공간을 따로 만들고 this 키워드가 해당 공간을 의미하도록 만듬?
> 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.

```
function Person(name, age){
    this.name = name;
    this.age = age;
}

var foo = new Person('Lee', 29);
```