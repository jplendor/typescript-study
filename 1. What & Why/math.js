function sum1(a, b) {
  return a + b;
}

sum1(10, 20); // 30
sum1(10, "20"); // 1020 이걸 의도한게 아닌데...

var total = sum1(10, 20);
total.toLocaleString();
// 코드를 작성하는 시점에 total이라는 변수의 타입이 number 라는 것을 자바스크립트가 인지하지 못하고 있기 때문에
// 자바스크립트 Number에서 제공하는 API인 toLocaleString()을 일일이 작성해야하고
// 만약 오탈자가 존재했을 경우 브라우저에서 실행했을 때만 오류를 확인할 수 있다.
