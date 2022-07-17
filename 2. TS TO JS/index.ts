function sum(a: number, b:number): number {
  return a + b;
}

// .ts는 브라우저에서 해석할 수 없으므로, 브라우저에서 실행하려면 .js로 변환(Compile)해야한다.
// "tsc index.ts" => index.js 생성