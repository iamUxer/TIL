function sayName(name = '익명'){

    return `안녕 ${name}야`;
}

// console.log(sayName());

// 1. return 문에 template literals 사용
// 2. 이름을 입력하지 않았을 때 '익명'으로 표기, if문 사용하지 않고
// 3. default parameter

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
  func1(1, 2, 3);


//   a = 1;

//   console.log(a);
//   newFunc();

//   var a;

//   function newFunc(){
//       console.log('hoisting');
//   }

var user = 'yuri';

console.log(`My name is ${user}`);