/**
 * object는 원시 타입이 아닌 타입을 나타냅니다.
 * 예를 들어, number, string, boolean, bigint, symbol, null,
 * 또는 undefined 가 아닌 나머지를 의미합니다.
 *
 * object 타입을 쓰면, Object.create 같은 API가 더 잘 나타납니다. 예를 들어:
 */

// declare는 Block-Scope에서는 사용할 수 없음
declare function create(o: object | null): any;

{
  let o = create({ prop: 0 });
  console.log(o);

  create(null); // 성공

  /**
   * 원시타입은 저장할 수 없습니다.
   */
  // create('문자열 입니다'); // 오류
  // create(44444); // 오류
  // create(false); // 오류
  // create(undefined); // 오류
}
