function sum2(a: number, b:number): number {
  return a + b;
}

sum2(10, 20); // 30
// sum2(10, "20"); 
// 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다. 라는 메세지로 인수의 타입이 잘못됐음을 알려준다.

var total2 = sum2(10, 20)
total2.toLocaleString()
// 변수 total에 대한 타입이 지정되어 있기 때문에 VSCode에서 해당 타입에 대한 API를 미리 보기로 띄워줄 수 있고,
// API를 다 일일이 치는 것이 아니라 tab으로 빠르고 정확하게 작성해나갈 수 있다.
