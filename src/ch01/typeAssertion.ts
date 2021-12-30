/**
 * 타입 단언(Type assertions) 은 컴파일러에게
 * "날 믿어, 난 내가 뭘 하고 있는지 알아"라고 말해주는 방법입니다.
 * 타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만,
 * 다른 특별한 검사를 하거나 데이터를 재구성하지는 않습니다.
 * 이는 런타임에 영향을 미치지 않으며, 온전히 컴파일러만 이를 사용합니다.
 * 타입 스크립트는 개발자가 필요한 어떤 특정 검사를 수행했다고 인지합니다.
 */

const str: any = '이것은 문자열 입니다';

// 타입 단언에는 두 가지 형태가 있습니다.
// 하나는, "angle-bracket" 문법입니다:
const strLeng: number = (<string>str).length;

// 다른 하나는 as-문법 입니다.
const strLeng2: number = (str as string).length;
