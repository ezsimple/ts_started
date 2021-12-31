/**
 * 초과 프로퍼티 검사 (Excess Property Checks)
 * 인터페이스의 첫 번째 예제에서 TypeScript가 { label: string; }을 기대해도
 * { size: number; label: string; }를 허용해주었습니다.
 * 또한 선택적 프로퍼티를 배우고,
 * 소위 "option bags"을 기술할 때, 유용하다는 것을 배웠습니다.
 */

{
  interface SquareConfig {
    color?: string;
    width?: number;

    /**
     * 하지만 특별한 경우에, 추가 프로퍼티가 있음을 확신한다면,
     * 문자열 인덱스 서명(string index signatuer)을 추가하는 방법
     */
    [propName: string]: any;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let square = { color: 'white', area: 1 };
    if (config.color) square.color = config.color;
    if (config.width) square.area = config.width;
    return square;
  }

  /**
   * 상수(const)는 변하지 않는 변수 (재할당 할 수 없는 변수)를 나타내고,
   *
   * 리터럴(Literal)이란?
   * 변수에 넣는 변하지 않는 데이터를 의미한다.
   *
   * createSquare의 매개변수가 color대신 colour로 전달된 것에 유의하세요.
   * 이 경우 JavaScript에선 조용히 오류가 발생합니다.
   *
   * 하지만, TypeScript는 이 코드에 버그가 있을 수 있다고 생각합니다.
   * <b>객체 리터럴은 다른 변수에 할당할 때나 인수로 전달할 때</b>
   * 특별한 처리를 받고, 초과 프로퍼티 검사 (excess property checking)를 받습니다.
   *
   * 만약 객체 리터럴이 "대상 타입 (target type)"이 갖고 있지 않은 프로퍼티를 갖고 있으면,
   * 에러가 발생합니다.
   */
  const options = { colour: 'red', width: 1000 }; // !! colour 로 이름이 다름에 유의
  const mySquare = createSquare(options);
}
