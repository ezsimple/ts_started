/**
 * 기본적으로 null 과 undefined는 다른 모든 타입의 하위 타입니다.
 * 이건, null과 undefined를 number 같은 타입에 할당할 수 있다는 것을 의미합니다.
 *
 * 하지만, --strictNullChecks를 사용하면, null과 undefined는
 * 오직 any와 각자 자신들 타입에만 할당 가능합니다.
 * (예외적으로 undefined는 void에 할당 가능합니다)
 * 이건 많은 일반적인 에러를 방지하는 데 도움을 줍니다.
 * 이 경우, string 또는 null 또는 undefined를 허용하고 싶은 경우
 * 유니언 타입인 string | null | undefined를 사용할 수 있습니다.
 */

const u: undefined = undefined;
const n: null = null;

console.log(u, n);
