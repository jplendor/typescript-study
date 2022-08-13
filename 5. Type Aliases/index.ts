// 타입 별칭: 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수

// string 타입 사용
// const nickname: string = "tom";

// 타입 별칭 사용
type myNickname = string;
const nickname: myNickname = "tom";

/*****************************/

// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: "세호",
  age: 30,
};

// 인터페이스(interface) vs. 타입 별칭(type)
// 인터페이스: 새로운 타입을 생성하는 것
// 1) 프리뷰에서 타입의 모양(속성)이 보이진 않는다. (ctrl 누르고 올리면 타입의 모양이 보이고, 타입 정의한 부분으로 이동 가능)
// 2) 확장 가능
// 타입 별칭: 새로운 타입을 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 "이름을 부여하는 것"
// 1) 프리뷰에서 타입의 모양(속성)이 보인다.
// 2) 확장 불가능
