/**
 * 선택적 프로퍼티 (Optional Properties)
 * 인터페이스의 모든 프로퍼티가 필요한 것은 아닙니다.
 * 어떤 조건에서만 존재하거나 아예 없을 수도 있습니다.
 * 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는
 * "option bags" 같은 패턴을 만들 때 유용합니다.
 */
{
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    const newSquare = { color: 'white', area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }

    if (config.width) {
      newSquare.area = config.width;
    }

    return newSquare;
  }
  const mySquare = createSquare({ color: 'black' });
  console.log(mySquare);
}
