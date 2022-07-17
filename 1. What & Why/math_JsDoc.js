// JavaScript에서 @ts-check와 JSDoc을 사용하면,
// TypeScipt로 작성한 것 처럼 타입 및 에러 체크가 가능하다.
// 하지만 코드량도 많아지고 가독성이 좋지 않기 때문에 TypeScipt로 작성하는 것이 낫다.

// @ts-check
/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number}
 */
function sum3(a, b) {
  return a + b;
}

sum3(10, 20);
// sum3(10, "20");
