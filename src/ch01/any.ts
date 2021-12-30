/**
 * any .vs. object 의 차이
 *
 * Object로 선언된 변수들은 오직 어떤 값이든 그 변수에 할당할 수 있게 해주지만
 * 실제로 메서드가 존재하더라도, 임의로 호출할 수는 없습니다:
 */
const notSure: any = 4;

// notSure = 'may be a string';

// notSure = false;

console.log(notSure.toFixed()); // any 타입이므로, method를 호출 했습니다.
