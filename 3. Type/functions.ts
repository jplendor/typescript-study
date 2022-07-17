// 함수의 파라미터, 반환 값의 타입을 정의
function sum(a: number, b:number): number {
  return a + b;
}

sum(10, 20)
// sum(10) // 2개의 인수가 필요한데 1개를 가져왔습니다.
// sum(10, 20, 30, 40) // 2개의 인수가 필요한데 4개를 가져왔습니다.

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log("optional", "parameter")
log("optional")