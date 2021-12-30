import { camelCase } from "lodash" 

class Person {
  private fullName: string = 'mino';
  constructor(private firstName: string, private lastName: string) {
    this.fullName = camelCase(firstName) + ' ' + camelCase(lastName);
  }

  public getName(): String {
    return this.fullName;
  }
}

const person: Person = new Person('LEE', 'MIN HO');

console.log(person.getName());