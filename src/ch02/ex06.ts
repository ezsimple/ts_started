/**
 * 함수 타입 (Function Types)
 *
 * 인터페이스는 JavaScript 객체가 가질 수 있는 넓은 범위의 형태를 기술할 수 있습니다.
 * 프로퍼티로 객체를 기술하는 것 외에, 인터페이스는 함수 타입을 설명할 수 있습니다.
 */

{
  // 함수 인터페이스 정의
  interface SearchFunc {
    // 파라미터와 리턴 타입을 정의
    (source: string, subString: string): boolean;
  }

  const mySearch: SearchFunc = function (src: string, sub: string) {
    const result = src.search(sub);
    return result > -1;
  }

}
