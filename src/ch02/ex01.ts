/**
 * TypeScript의 핵심 원칙 중 하나는 타입 검사가 "값의 형태에 초점을 맞추고 있다"는 것입니다.
 * 이를 "덕 타이핑(duck typing)" 혹은 "구조적 서브타이핑(structural subtyping)"이라고도 합니다.
 * TypeScript에서, 인터페이스는 이런 타입들의 이름을 짓는 역할을 하고
 * 코드 안의 계약을 정의하는 것뿐만 아니라
 * 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법입니다.
 */

function printLable(obj: { label: string }) {
  console.log(obj.label);
}

/**
 * 이 객체가 실제로는 더 많은 프로퍼티를 갖고 있지만,
 * 컴파일러는 최소한 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사합니다.
 */
{
  const obj = { size: 10, label: 'XL사이즈' };
  printLable(obj);
}
