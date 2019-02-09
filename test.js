// function sayName(name = '익명'){

//     return `안녕 ${name}야`;
// }

// // console.log(sayName());

// // 1. return 문에 template literals 사용
// // 2. 이름을 입력하지 않았을 때 '익명'으로 표기, if문 사용하지 않고
// // 3. default parameter

// function func1(a, b, c) {
//     console.log(arguments[0]);
//     // expected output: 1

//     console.log(arguments[1]);
//     // expected output: 2

//     console.log(arguments[2]);
//     // expected output: 3
//   }

//   func1(1, 2, 3);

// //   a = 1;

// //   console.log(a);
// //   newFunc();

// //   var a;

// //   function newFunc(){
// //       console.log('hoisting');
// //   }

// var user = 'yuri';

// console.log(`My name is ${user}`);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// var foo = new Person('Lee', 29);

// Person.prototype.sayHello = function(){
//     console.log('Hi! my name is ' + this.name + ', age is ' + this.age);
// };

// foo.sayHello();

// var newFoo = new Person('Kim', 31);

// newFoo.sayHello();

// function sum(a, b){
//     console.log(this === global);
//     this.myNumber = 20;
//     return a + b;
// }

// console.log(sum(15, 16));
// console.log(global.myNumber);

const array1 = [1, 2, 3, 4];

console.log(array1.fill(6, 0, 3));

console.log(array1);
