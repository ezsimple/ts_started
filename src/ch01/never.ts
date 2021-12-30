/**
 * never 타입은 절대 발생할 수 없는 타입을 나타냅니다. 
 * 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서 
 * 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰입니다. 
 * 변수 또한 타입 가드에 의해 아무 타입도 얻지 못하게 좁혀지면 
 * never 타입을 얻게 될 수 있습니다.

 * never타입은 모든 타입에 할당 가능한 하위 타입입니다. 
 * 하지만 어떤 타입도 never에 할당할 수 있거나, 하위 타입이 아닙니다.
 * (never 자신은 제외) 심지어 any도 never에 할당할 수 없습니다.
 * 
 */

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다
function error(msg: string): never {
  throw new Error(msg);
}

// 반환 타입이 never로 추론된다.
function fail() {
  return error('실패');
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {}
}
