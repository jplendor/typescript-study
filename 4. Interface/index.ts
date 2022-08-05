interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
let suyeong: User = {
  name: "수영",
  age: 23
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user)
}

const jisu = {
  name: "지수"
}

// getUser(jisu)
// '{ name: string; }' 형식의 인수는 'User' 형식의 매개 변수에 할당될 수 없습니다.
// 'age' 속성이 '{ name: string; }' 형식에 없지만 'User' 형식에서 필수입니다.

const jiwon = {
  name: "지원",
  age: 26
}

getUser(jiwon);

// 함수의 스펙(구조)에 인터페이스 활용

interface SumFunction {
  (a: number, b: number): number
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr = ['a', 'b', 'c'];
arr[2] = 'd'
// arr[2] = 10 // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

// 딕셔너리 패턴
interface StringRegexDictionary { 
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
}

Object.keys(obj).forEach(function(value) {console.log(value)}) // value가 string 타입이라고 정의 (추론)

// 인터페이스 확장(상속)
interface Person { 
  name: string,
  age: number
}

// interface Developer { 
//   name: string,
//   age: number,
//   language: string
// }

interface Developer extends Person {
  language: string
}
 
var jeongmin: Developer = {
  name: "정민",
  age: 20,
  language: "ts"
}
