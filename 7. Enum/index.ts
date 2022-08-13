// 이넘(Enum): 특정 값들의 집합

// 숫자형 이넘

enum Shoes1 {
  Nike, // 0 (초기값을 주지 않은 경우) / 초기값 (초기값을 준 경우)
  Adidas, // 1 (= 0 + 1) / 초기값 + 1
  Reebok, // 2 (= 0 + 2) / 초기값 + 2
}

let myShoes1 = Shoes1.Nike;
console.log(myShoes1); // 0

// 문자형 이넘

enum Shoes2 {
  Nike = "나이키",
  Adidas = "아디다스",
  Reebok = "리복",
}

let myShoes2 = Shoes2.Reebok;
console.log(myShoes2);

// 이넘 활용 사례
// 아래와 같이 정해진 값들 중에서 하나 넘겨야하는 경우에 사용하면 좋다.

enum Answer {
  Yes = "Y",
  No = "N",
}

function giveAnswer(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}

giveAnswer(Answer.Yes);
