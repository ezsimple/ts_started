"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = 'mino';
        this.fullName = (0, lodash_1.camelCase)(firstName) + ' ' + (0, lodash_1.camelCase)(lastName);
    }
    Person.prototype.getName = function () {
        return this.fullName;
    };
    return Person;
}());
var person = new Person('LEE', 'MIN HO');
console.log(person.getName());
