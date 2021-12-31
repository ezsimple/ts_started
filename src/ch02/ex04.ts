/**
 * 읽기전용 프로퍼티 (Readonly properties)
 * 일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야합니다.
 * 프로퍼티 이름 앞에 readonly를 넣어서 이를 지정할 수 있습니다:
 */
{
  interface Point {
    readonly x?: number;
    readonly y?: number;
  }

  /**
   * 첫 할당후에 재할당 할 수 없습니다.
   * (주의) 이경우 y도 재할당 할 수 없습니다.
   */
  const p1: Point = { x: 1 };
  // p1.y = 5; // y값을 재할당 할 수 없습니다.

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;

  /**
   * 오류발생 케이스 (재할당 금지)
   */
  // ro[0] = 12;
  // ro.push(5);
  // ro.length = 1000;
  // a = ro;
  a = ro as number[]; // 타입 단언(type assertion)으로 오버라이드 하는 것 이 가능 합니다.

  /**
   * readonly vs const
   * readonly와 const 중에 어떤 것을 사용할 지 기억하기 가장 쉬운 방법은
   * 변수와 프로퍼티중 어디에 사용할지 질문해 보는 것입니다.
   * 변수는 const를 사용하고 프로퍼티는 readonly를 사용합니다
   */
}
