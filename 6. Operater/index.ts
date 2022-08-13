// 유니온 타입(Union Type) "|"

// # 1. number 타입의 인수는 string 타입의 매개변수에 할당될 수 없다.

function logMessage1(value: string) {
  console.log(value);
}

logMessage1("hello");
// logMessage1(100);

// #2. string, number 타입을 모두 받기 위해 any로 바꾼다면 타입을 지정해준 의미가 없다.

function logMessage2(value: any) {
  console.log(value);
}

logMessage2("hello");
logMessage2(100);

// #3. 유니온 연산자를 통해 string 또는 number 타입의 인수를 받을 수 있도록 한다.

function logMessage3(value: string | number) {
  console.log(value);
}

logMessage3("hello");
logMessage3(100);

// #4. if문을 통해 타입을 추론할 수 있도록 좁혀준다면, value까지만 쳐도 해당 타입의 API 목록이 주르륵 뜬다.

function logMessage(value: string | number) {
  if (typeof value === "string") {
    console.log(value.includes("h"));
  }
}

// #5. 함수의 매개변수에서 유니온 타입 써보기

interface Developer {
  name: string; // 공통 속성
  skill: string; // Developer만의 속성
}

interface Person {
  name: string; // 공통 속성
  age: number; // Person만의 속성
}

function askSomeone1(someone: Developer | Person) {
  someone.name; // 인수의 타입이 Developer일지, Person일지 모르니까 두 타입의 공통된 속성만 제공
  // someone.skill;
  // someone.age;
}

// 인터섹션 타입(Intersection Type) "&"

// #1. 인터섹션 타입(Intersection Type)은 여러 타입을 모두 만족하는 하나의 타입

var capt: string & number & boolean; // never

// #2. 함수의 매개변수에서 인터섹션 타입 써보기

function askSomeone2(someone: Developer & Person) {
  // 인수의 타입이 Developer의 속성과 Person의 속성을 모두 가지고 있다는 것이 보장되므로, 두 타입의 모든 속성 제공
  someone.name;
  someone.skill;
  someone.age;
}
