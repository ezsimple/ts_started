/**
 * 인덱서블 타입 (Indexable Types)
 * 인터페이스로 함수 타입을 설명하는 방법과 유사하게,
 * a[10] 이나 ageMap["daniel"] 처럼 타입을 "인덱스로" 기술할 수 있습니다.
 * 인덱서블 타입은 인덱싱 할때 해당 반환 유형과 함께
 * 객체를 인덱싱하는 데 사용할 수 있는 타입을 기술하는
 * 인덱스 시그니처 (index signature)를 가지고 있습니다.
 */

{
  interface StringArray {
    [index: number]: string;
  }

  const myArray: StringArray = ['bob', 'bobo'];

  const myStr: string = myArray[0];

  console.log(myStr);

  class Animal {
    name: string;
  }

  class Dog extends Animal {
    breed: string;
  }

  // 이해가 잘 안됨....  (오류 발생)
  // interface NotOkay {
  //   [x: number]: Animal;
  //   [y: string]: Dog;
  // }

  interface NumberDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  const myArray2: ReadonlyStringArray = ["1", "2"];
  // myArray2[0] = "hello"; // Index signature in type 'ReadonlyStringArray' only permits reading.

}

